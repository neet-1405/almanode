

const express = require("express"); // Importing Express module
// const app = require("./src/app"); // Importing custom app module

const app=require("./src/users")
const mongoose = require("mongoose"); // Importing Mongoose module
const port = process.env.port || 8020; // Setting the port number
require("dotenv").config();
// Middleware to parse JSON bodies and URL-encoded bodies
app.use(express.json()); // Parsing JSON bodies
app.use(express.urlencoded({ extended: false })); // Parsing URL-encoded bodies

// Connecting to the database
// const DATABASE_URL =



const MONGOOSE_URI = "mongodb+srv://testforcode:4O1FvTMDv6xbc1DU@cluster0.uxepwdo.mongodb.net/youtube?retryWrites=true&w=majority";
mongoose.connect(MONGOOSE_URI, {
useNewUrlParser: true,
useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", (err) => console.log(err)); // Handling database connection errors
db.once("open", () => console.log("connected to database")); // Logging successful database connection

// Starting the server
app.listen(port, () => console.log(`App listening on port ${port}!`)); 