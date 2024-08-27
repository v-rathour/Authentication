const express = require('express');
const User = require('../models/User');
const routes = express.Router();
const passport = require('passport')
routes.post('/signup', async(req, res) => {
   
   try{
       let { username, email, password } = req.body;
       console.log(username, email, password);
       const user = new User({ username, email });
       const NewUser = await User.register(user, password);
       req.login(NewUser, function (err) {
           if (err) {
               return next(err);
           }

           return res.status(200).send({ message: "User created successfully!" });
       })
    }
   catch (err) {
       return res.status(500).send({ message: err.message })
    }

})

routes.post(
  "/login",
  passport.authenticate("local", { failureRedirect: "/login",failureMessage:true }),
  function (req, res) {
      res.status(200).send({message:"User logged in successfully"})
      
    }
  
);

module.exports = routes;