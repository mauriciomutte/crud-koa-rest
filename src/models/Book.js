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
    unique : false,
    required : true
  },
  pages: {
    type: Number,
    unique : false,
    required : true
  }
});

export default mongoose.model('Book', BookSchema);