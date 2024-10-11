const { v4: uuidv4 } = require("uuid");
const mongoose = require("mongoose");

const accessSchema = new mongoose.Schema({
  userGuid: { type: String, default: uuidv4 },
  connectedAt: { type: Date, default: Date.now },
  disconnectedAt: { type: Date },
});

module.exports = mongoose.model("Access", accessSchema);
