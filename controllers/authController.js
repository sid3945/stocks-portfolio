const User = require("../models/user");
const jwt = require("jsonwebtoken");

const registerUser = async (req, res) => {
	const { username, password } = req.body;

	try {
		const user = new User({ username, password });
		await user.save();
		res.status(201).json({ message: "User registered successfully" });
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Internal Server Error" });
	}
};

const loginUser = async (req, res) => {
	const { username, password } = req.body;

	try {
		const user = await User.findOne({ username });
		if (user && (await user.matchPassword(password))) {
			const token = jwt.sign({ id: user._id, username: user.username }, process.env.JWT_SECRET, {
				expiresIn: "1h",
			});
			res.json({ token });
		} else {
			res.status(401).json({ error: "Invalid credentials" });
		}
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Internal Server Error" });
	}
};

const protect = (req, res, next) => {
	let token;

	if (
		req.headers.authorization &&
		req.headers.authorization.startsWith("Bearer")
	) {
		token = req.headers.authorization.split(" ")[1];
	}

	if (!token) {
		return res.status(401).json({ error: "Not authorized, no token" });
	}

	try {
		const decoded = jwt.verify(token, process.env.JWT_SECRET);
		req.user = decoded.id;
		next();
	} catch (error) {
		console.error(error);
		res.status(401).json({ error: "Not authorized, token failed" });
	}
};

module.exports = {
	registerUser,
	loginUser,
	protect,
};