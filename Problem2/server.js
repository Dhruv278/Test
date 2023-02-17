const app=require("./app");

const mongoose=require('mongoose');
const dotenv=require("dotenv");
dotenv.config({path:"./config.env"});

// Databse connection
mongoose.set("strictQuery", false);
mongoose.connect(process.env.DATABASE_CONNECTION).then(con => console.log('database is connected'));


const PORT=process.env.PORT ;
const server=app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})
