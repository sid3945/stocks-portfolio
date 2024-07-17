# stocks-portfolio

Execute `npm run start` to start the backend server.

The project is divided as MVC with separate responsibilities for separation of concerns, maintainability and readability.

# Project walk through:
The entry point to the project is the scripts section of package.json file.
That takes you to server.js file,
-Server.js refers to two files: .env and app.js. It imports the exported express app from app.js
    -App.js creates an express server and configures bodyparsers and cors middlewares on it and calls the connectDB function exported from config/db.js
    App.js deputes stockRoutes handler to all the routes consisting of /api/ in the path.
        - config/db.js creates a DB connection  
        - stockRoutes.js creates an express router and deployes actions imported from stockController on routes /stocks and /watchlist (route post /api/)
            -stockController.js this exports two actions 
        - events/stockEvent.js has an event defined that can be imported and emitted into
        - events/stockListener listens to the events emitted above and performs respective actions like sending an email
            - services/emailService.js is a service that uses nodemailer to send an email when stocks are added to watchlist.
        -middleware/authMiddleware has 2 middlewares that check for the JWT and for the roles