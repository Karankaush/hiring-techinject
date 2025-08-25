const express = require("express");
const { protect, admin } = require("../middlewares/authMiddleware");
const { deleteUser, deleteLog, updateLog } = require("../controllers/adminControllers");

const router = express.Router();

// Apply auth + admin check
router.use(protect, admin);

// User management
router.delete("/users/:id", deleteUser);

// Wellness log management
router.delete("/logs/:id", deleteLog);
router.put("/logs/:id", updateLog);

module.exports = router;
