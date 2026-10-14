const mongoose=require("mongoose")

const mongoURI=process.env.CONNECT_TO_DATABASE_URL||"mongodb://127.0.0.1:27017/attendancemangament"
 
// mongoose.set('strictQuery', false)
const connectToMongos =()=>{
         mongoose.connect(mongoURI)
         console.log("You're now Connected with Database")
}

module.exports=connectToMongos;
