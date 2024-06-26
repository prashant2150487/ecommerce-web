const app = require("./app");
const connectDatabase = require("./db/Database");


// Handling uncaught Exception
process.on("uncaughtException", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`shutting down the server for handling uncaught exception`);
});

// config
if (process.env.NODE_ENV !== "PRODUCTION") {
    require("dotenv").config({
        path: "config/.env",
    });
}

//connect db
connectDatabase()
    .then(() => {
        console.log("Database connected successfully");
    })
    .catch((err) => {
        console.error("Error connecting to database:", err.message);
        process.exit(1); // Exiting the process if database connection fails
    });

// unhandled promise rejection

// create server
const server = app.listen(process.env.PORT, () => {
    console.log(
        `Server is running on http://localhost:${process.env.PORT}`
    );
});

process.on("unhandledRejection", (err) => {
    console.log(`Shutting down the server for ${err.message}`);
    console.log(`shutting down the server for unhandle promise rejection`);

    server.close(() => {
        process.exit(1);
    });
});