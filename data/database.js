import mongoose from "mongoose"


export const connectDB=()=>{
    mongoose.connect(process.env.MODEL_URI,{
        dbname:"NodeAPI",
    }).then(()=>{
        console.log("database connected")
    }).catch(()=>{
        console.log("something went wrong")
    })
}

