const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  content: { type: String },
  date: { type: Date },
  type: { type: String }, // GROUP OR DIRECT
});

module.exports = mongoose.model('Message', messageSchema);
