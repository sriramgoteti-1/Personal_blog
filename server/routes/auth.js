const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

//REGISTER
router.post("/signup", async (req, res) => {
  try {
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

// LOGIN
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    // !user && res.status(400).json("Wrong credentials!");

    const validated = await User.findOne({ password: req.body.password});
    // !validated && res.status(400).json("Wrong credentials!");
    if(!user){
      return res.status(400).json("Wrong credentials!");
    }
    else if(!validated){
      return res.status(400).json("Wrong credentials!");
    }
    else{
      res.status(200).json(user);
    }

  
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;