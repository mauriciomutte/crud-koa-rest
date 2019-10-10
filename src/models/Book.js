import mongoose from 'mongoose';

const BookSchema = new mongoose.Schema({
  name: {
    type: String,
    unique : true,
    required : true
  },
  author: {
    type: String,
    required : true
  },
  pages: {
    type: Number,
    required : true
  }
});

export default mongoose.model('Book', BookSchema);