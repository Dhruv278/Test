const express=require("express");
const app=express();
const userRoutes=require('./routes/UserRouter');
const GlobalErrorHandler=require('./Controller/errorController')
app.use(express.json());




// SetupRoutes
app.use('/api/v1',userRoutes);


// Setup Error Route
app.use(GlobalErrorHandler)

module.exports=app;