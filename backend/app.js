const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const express = require("express");
const app = express();
const ErrorHandler = require("./utils/ErrorHandler");



app.use(express.json());
app.use(cookieParser());
app.use("/", express.static("uploads"))

app.use(bodyParser.urlencoded({ extended: true }));


// config
if (process.env.NODE_ENV !== "PRODUCTION") {
    require("dotenv").config({
        path: "backend/config/.env",
    });
}

// import routes
const user = require("./controller/user");
app.use("api/v2/user", user)

app.use(ErrorHandler)


module.exports = app