const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  shortDesc: { type: String },
  fullDesc: { type: String, required: true },
  date: { type: String, default: new Date().toISOString().split('T')[0] },
  imageUrl: { type: String },
  author: { type: String, required: true },
  userId: { type: String, required: true }, // <-- change to String if NextAuth ID is string
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Blog', blogSchema);