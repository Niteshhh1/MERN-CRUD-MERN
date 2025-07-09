const express = require('express');
const User = require('../models/user');
// const { useReducer } = require('react');
const router = express.Router();

// get all users
router.get('/get',async(req,res)=>{
     const users = await User.find();
    //  console.log(users);
     res.json({users});
})

// create user
router.post('/create',async(req,res)=>{
     const user = req.body;
    //  console.log(user);
     await User.create(user);
})

// get for update
router.get('/get/:id', async (req, res) => {
  try {
    const id = req.params.id; // ✅ just the id string
    const user = await User.findById(id); // ✅ correct usage
    res.json({ user });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "User not found", error });
  }
});

//update user
router.put('/put/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const { uname, email, age } = req.body;

    const response = await User.findByIdAndUpdate(
      id,{ uname, email, age },
    );

    res.json({ message: 'User updated successfully', updatedUser: response });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Update failed', error });
  }
});

//delete user
router.delete('/delete/:id',async(req,res)=>{
  try {
     const id = req.params.id;
   const response = await User.findOneAndDelete(id);
  } catch (error) {
    console.log(error)
  }
})

module.exports = router