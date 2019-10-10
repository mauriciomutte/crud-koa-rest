import Book from '../models/Book';

export const find = async ctx => {
  const book = await Book.find({});
  ctx.body = book;
};

export const create = async ctx => {
  const newBook = new Book(ctx.request.body);
  await newBook.save();
  ctx.body = newBook;
};

export const remove = async ctx => {
  await Book.deleteOne({_id: ctx.params.id});
  ctx.body = {message: 'Book was deleted'};
};

export const update = async ctx => {
  const book = await Book.findOneAndUpdate(
    {_id: ctx.params.id}, 
    ctx.request.body, 
    {new: true}
  );
  ctx.body = {message: 'Book was updated', book};
};