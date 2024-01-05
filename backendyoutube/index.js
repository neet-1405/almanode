// const express=require("express");
// const dotenv=require("dotenv").config();
// const cors=require("cors")
// const mongoose=require("mongoose");
// const bodyParser=require("body-parser");
// const path = require("path");
// const users=require("../backendyoutube/src/users")
// const app=express();


// app.use(cors());
// app.use(express.json());

// app.use(users);

// app.listen(port,()=>{

//     console.log(`server start at port no${Port}`)
// })

const express = require("express"); // Importing Express module
// const app = require("./src/app"); // Importing custom app module

const app=require("./src/users")
const mongoose = require("mongoose"); // Importing Mongoose module
const port = process.env.port || 8020; // Setting the port number

// Middleware to parse JSON bodies and URL-encoded bodies
app.use(express.json()); // Parsing JSON bodies
app.use(express.urlencoded({ extended: false })); // Parsing URL-encoded bodies

// Connecting to the database
// const DATABASE_URL =
// "mongodb+srv://ojhaparth:test123@cluster0.9xedsar.mongodb.net/";


MONGOOSE_URI= "mongodb+srv://parasharneetesh75:Neetesh123@cluster0.gogpguc.mongodb.net/";
mongoose.connect(MONGOOSE_URI, {
useNewUrlParser: true,
useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", (err) => console.log(err)); // Handling database connection errors
db.once("open", () => console.log("connected to database")); // Logging successful database connection

// Starting the server
app.listen(port, () => console.log(`App listening on port ${port}!`)); 