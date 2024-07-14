# stocks-portfolio

Execute `npm run start` to start the backend server.

The project is divided as MVC with separate responsibilities for separation of concerns, maintainability and readability.

# for beginners:
    The entry point to the project is the scripts section of package.json file.
    That takes you to server.js file,
    -Server.js refers to two files: .env and app.js. It imports the exported express app from app.js
        -App.js creates an express server and configures bodyparsers and cors middlewares on it and calls the connectDB function exported from config/db.js
        App.js deputes stockRoutes handler to all the routes consisting of /api/ in the path.
            - config/db.js creates a DB connection  
            - stockRoutes.js creates an express router and deployes actions imported from stockController on routes /stocks and /watchlist (route post /api/)
                -stockController.js this exports two actions 