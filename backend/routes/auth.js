// backend/routes/auth.js
const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/Users');

const router = express.Router();

// Register
router.post("/register", async (req, res) => {
  try {
    const { name, email, password, photoURL } = req.body;
    // check for existing user
    const existing = await User.findOne({ email });
    if (existing) return res.status(400).json({ message: "Email already registered" });
    // hashing password
    const hashed = await bcrypt.hash(password, 10);
    const user = await User.create({
      name,
      email,
      password: hashed,
      photoURL
    });
    // return consistent user object under `user`
    res.status(201).json({
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        photoURL: user.photoURL
      }
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server error" });
  }
});

// Login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ message: "Invalid credentials" });
    const ok = await bcrypt.compare(password, user.password);
    if (!ok) return res.status(401).json({ message: "Invalid credentials" });

    // return consistent user object under `user`
    res.status(200).json({
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        photoURL: user.photoURL
      }
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;