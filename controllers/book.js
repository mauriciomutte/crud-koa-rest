import Book from '../models/Book';

const error = (err) => {
  ctx.status = err.status || 500;
  ctx.body = err.message;
}

export const find = async ctx => {
  try {
    const book = await Book.find({});
    ctx.body = book;
  } catch(err) {
    return error(err);
  }
};

export const create = async ctx => {
  try {
    const newBook = new Book(ctx.request.body);
    await newBook.save();
    ctx.body = newBook;
  } catch(err) {
    return error(err);
  }
};

export const remove = async ctx => {
  try {
    await Book.deleteOne({_id: ctx.params.id});
    ctx.body = {message: 'Book was deleted'};
  } catch(err) {
    return error(err);
  }
};

export const update = async ctx => {
  try {
    const book = await Book.findOneAndUpdate(
      {_id: ctx.params.id}, 
      ctx.request.body, 
      {new: true}
    );
    ctx.body = book;
  } catch (err) {
    return error(err);
  }
};