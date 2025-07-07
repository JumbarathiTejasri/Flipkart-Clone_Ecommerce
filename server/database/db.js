import mongoose from "mongoose";

export const Connection=async(username,password)=>{
    const URL=`mongodb+srv://${username}:${password}@cluster0.dj0uryv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
    try{
       await mongoose.connect(URL);
       console.log('Database Connected Successfully');
    }catch(error){
        console.log('Error while connecting with the database ',error.message);
    }
}

export default Connection;