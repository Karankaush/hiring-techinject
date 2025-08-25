const User = require("../models/User");
const WellnessLog = require("../models/WellnessLog");

// Delete a user
exports.deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: "User deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Failed to delete user" });
  }
};

// Delete a wellness log
exports.deleteLog = async (req, res) => {
  try {
    await WellnessLog.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: "Wellness log deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Failed to delete log" });
  }
};

// Update a wellness log
exports.updateLog = async (req, res) => {
  try {
    const updatedLog = await WellnessLog.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedLog) {
      return res.status(404).json({ message: "Log not found" });
    }
    res.json({ success: true, log: updatedLog });
  } catch (err) {
    res.status(500).json({ message: "Failed to update log" });
  }
};
