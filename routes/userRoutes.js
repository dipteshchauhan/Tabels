const express=require('express');
const userRoutes=express.Router();
const createUserController=require('../controller/createUserController');
const middleware=require('../middleware/userAuthMiddleware')

userRoutes.post('/save-user',createUserController.saveUser);
userRoutes.get('/user-logIn',createUserController.userLogIn);
userRoutes.get('/user-sample',middleware,createUserController.userSample);
module.exports=userRoutes;