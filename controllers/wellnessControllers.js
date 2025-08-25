const WellnessLog = require('../models/WellnessLog');

// Create log
exports.createLog = async (req, res) => {
  try {
    const log = await WellnessLog.create({ ...req.body, userId: req.user.id });
    res.status(201).json(log);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all logs for user
exports.getLogs = async (req, res) => {
  try {
    const logs = await WellnessLog.find({ userId: req.user.id });
    res.json(logs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update log
exports.updateLog = async (req, res) => {
  try {
    const log = await WellnessLog.findOneAndUpdate(
      { _id: req.params.id, userId: req.user.id },
      req.body,
      { new: true }
    );
    if (!log) return res.status(404).json({ message: "Log not found" });
    res.json(log);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete log
exports.deleteLog = async (req, res) => {
  try {
    const log = await WellnessLog.findOneAndDelete({ _id: req.params.id, userId: req.user.id });
    if (!log) return res.status(404).json({ message: "Log not found" });
    res.json({ message: "Log deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
