const mongoose = require('mongoose');
const url = 'mongodb+srv://saipriya123:Saipriya.123@cluster0.hyinzsj.mongodb.net/issueTracker?retryWrites=true&w=majority';
// mongoose.connect('url') 
mongoose.connect(url);
const db=mongoose.connection;

//If any Error then Getting this Line
db.on('error',console.error.bind(console,"Error connecting to MongoDB"));   


db.once('open',()=>{
    console.log("Connected to Database :: Mongoose ")
});

module.exports=db;  //Exports db