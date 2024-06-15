import mongoose from "mongoose"


export const connectDB=()=>{
    mongoose.connect(process.env.MODEL_URI,{
        dbname:"NodeAPI",
    }).then((c)=>{
        console.log(`database connected with ${c.connection.host}`)
    }).catch(()=>{
        console.log("something went wrong")
    })
}

