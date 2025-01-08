const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    const isProduction = process.env.NODE_ENV === "production";
    let options = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };
    if (isProduction) {
      const ca = fs.readFileSync("./global-bundle.pem");
      options = {
        ...options,
        tls: true,
        tlsCAFile: ca,
        retryWrites: false,
      };
    }

    await mongoose.connect(process.env.MONGODB_URI, options);
    console.log("MongoDB / DocumentDB connected");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};

module.exports = connectDB;
