const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// USER REGISTER
exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const exists = await User.findOne({ email });
    if (exists) return res.status(400).json({ message: "User already exists" });

    const hashed = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hashed, isAdmin: false });

    return res.status(201).json({
      success: true,
      message: "User registered successfully",
      userId: user._id
    });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

// USER LOGIN (returns token with id + isAdmin)
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    const ok = await bcrypt.compare(password, user.password);
    if (!ok) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    return res.json({
      success: true,
      message: "User logged in successfully",
      token
    });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

// ADMIN REGISTER (requires ADMIN_CODE in body)
exports.registerAdmin = async (req, res) => {
  try {
    const { name, email, password, adminCode } = req.body;

    if (!adminCode || adminCode !== process.env.ADMIN_CODE) {
      return res.status(403).json({ message: "Invalid admin code" });
    }

    const exists = await User.findOne({ email });
    if (exists) return res.status(400).json({ message: "User already exists" });

    const hashed = await bcrypt.hash(password, 10);
    const adminUser = await User.create({
      name,
      email,
      password: hashed,
      isAdmin: true
    });

    return res.status(201).json({
      success: true,
      message: "Admin registered successfully",
      userId: adminUser._id
    });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
