const express = require('express');
const router = express.Router();
const User = require('../model/UserModel');
const catchAsync = require('../Utils/catchAsync');
const errorClass = require('../Utils/errorClass');





// Add User Function
exports.addUSer=catchAsync(async(req,res,next)=>{
    const user=await User.create();

    if(!user){
        return next(new errorClass('error in adding user',500));
    }
    res.status(200).send(user);

})





// Get User Function based on nearby geolocation coordinates
exports.getUserByLocation=catchAsync(async(req,res,next)=>{
let { longitude, latitude, distance } = req.query;

// If user don't pass distance than it return exact location of users 
if(!distance){
    distance=0;
}

    const users = await User.find({
      location: {
        $near: {
          $geometry: {
            type: 'Point',
            coordinates: [longitude, latitude],
          },
          $maxDistance: distance,
        },
      },
    });
    if(!users)return next(new errorClass("No user found",404));
    res.status(200).json({
        status:'Success',
        users
    });
  
})



// Get User Function based on partial matching name
exports.getUserBySimilarName=catchAsync(async(req,res,next)=>{
    const { name } = req.query;
    const users = await User.find({ name: { $regex: name, $options: 'i' } });

// If there is no user with tha name
    if(!users || users.length===0){
        return next(new errorClass("No user found",404));
    }

    res.status(200).json({
        status:'Success',
        users
    })


})





// Update User Function
exports.updateUser=catchAsync(async(req,res,next)=>{
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      if (!user) {
        return next(new errorClass('User not updated',500));
      }
      res.status(200).json({
        status:'Success',
        user
      });
})






// Delete User Function
exports.deleteUser=catchAsync(async(req,res,next)=>{
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
       return next(new errorClass('Internal server error, User is not deleted',500))
    }
    res.status(200).json({
        status:'Success',
        message:'User deleted',
        user
    });
})

