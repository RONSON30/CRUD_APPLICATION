const mongoose=require('mongoose');
const connectDB=async()=>{
    try{
        //mongo db connection string
        const con=await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
            useFindAndModify:false,
            useCreateIndex:true})
            console.log(`MONGODB connected:${con.connection.host}`);}
            catch(err){
                console.log(err);
                process.env(1);
            }}
            module.exports=connectDB