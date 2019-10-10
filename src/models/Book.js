import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const BookSchema = new Schema({
  name: {
    type: String,
    unique : true,
    required : true
  },
  category: {
    type: String,
    required : true
  },
  pages: {
    type: Number,
    required : true
  }
});

export default mongoose.model('Book', BookSchema);