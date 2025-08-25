
const express = require("express");
const { createLog, getLogs, updateLog, deleteLog } = require("../controllers/wellnessControllers");
const { protect } = require("../middlewares/authMiddleware");

const router = express.Router();

router.use(protect);

router.post("/", createLog);
router.get("/", getLogs);
router.put("/:id", updateLog);
router.delete("/:id", deleteLog);

module.exports = router;
