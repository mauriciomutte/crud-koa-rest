const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
  name: {
    type: String,
    unique : true,
    required : true
  },
  category: {
    type: String,
    unique : false,
    required : true
  },
  pages: {
    type: Number,
    unique : false,
    required : true
  }
});

module.exports = User = mongoose.model('books', BookSchema);