

const app = require("./app");
const mongoose = require("mongoose");
const env = require("dotenv");

env.config();

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB connected");
})
.catch(err => console.error("❌ DB connection failed:", err));

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));