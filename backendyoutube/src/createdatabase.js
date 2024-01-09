

const mongoose = require('mongoose')
const subscriberModel = require('./model/schema')
// const data = require('./model/data')
const dotenv = require("dotenv").config();



// const mongodbURI=process.env.MONGOOSE_URI;


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






