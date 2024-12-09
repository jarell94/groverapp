const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: String,
  password: String,
  private: { type: Boolean, default: false }
});

module.exports = mongoose.model('User', userSchema);
