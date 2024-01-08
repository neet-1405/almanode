

const mongoose = require('mongoose')
const subscriberModel = require('./model/schema')
// const data = require('./model/data')
const dotenv = require("dotenv").config();



// const mongodbURI=process.env.MONGOOSE_URI;
// const mongodbURI="mongodb+srv://parasharneetesh75:Neetesh123@cluster0.gogpguc.mongodb.net/";

const DATABASE_URL = "mongodb+srv://testforcode:4O1FvTMDv6xbc1DU@cluster0.uxepwdo.mongodb.net/youtube?retryWrites=true&w=majority";
const mongoDB=process.env.MONGOOSE_URI
const data = require('./model/data')
const port=process.env.port||8020;
const server=app.listen(port,()=>{
    console.log("server is running on the port 8010")
})

// database configuration
mongoose.connect(DATABASE_URL)
.then(()=>console.log("mongoDB succesfull connected "))
.catch(err=>console.log(err))



const refreshAll = async () => {
    await subscriberModel.deleteMany({});
    await subscriberModel.insertMany(data);
    await mongoose.disconnect();
}
refreshAll();














// // Import required dependencies
// const mongoose = require("mongoose"); 
// // const subscriberModel = require("./models/subscribers"); 
// // const data = require("./data"); 

// const subscriberModel = require('./model/schema')
// const data = require('./model/data')

// // Connect to DATABASE
// const MONGOOSE_URI = "mongodb+srv://parasharneetesh75:Neetesh123@cluster0.gogpguc.mongodb.net/";

// // const Subscriber=require("./model/schema")
// // const subscribers= require('./model/schema')
// mongoose.connect(MONGOOSE_URI, {
//   useNewUrlParser: true, 
//   useUnifiedTopology: true, 
// });
// const db = mongoose.connection; // Get the database connection object

// db.on("error", (err) => console.log(err)); // Event listener for connection errors
// db.once("open", () => console.log("Database created...")); // Event listener for successful connection

// const refreshAll = async () => {
//   // Function to refresh data in the database
// //   await subscriberModel.deleteMany({}); // Delete all existing documents in the "subscribers" collection
//   await subscriberModel.insertMany(data); // Insert new documents from the "data" array into the "subscribers" collection
// //   await mongoose.disconnect(); // Disconnect from the database
// };

// refreshAll(); // 