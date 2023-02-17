const express=require('express');
const { addUSer, getUserByLocation, getUserBySimilarName, updateUser, deleteUser } = require('../Controller/UserController');
const router=express.Router();

// To add new user
router.post('/addUser',addUSer);

// get users by their location
router.get('/find/location',getUserByLocation);

// get user by their name
router.get('/find/name',getUserBySimilarName);

// update user data 
router.patch('/update/:id',updateUser);

// Delete user API
router.delete('/deleteUser/:id',deleteUser)


module.exports=router;