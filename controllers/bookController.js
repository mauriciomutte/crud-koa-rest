import Book from '../models/Book';

export const find = async ctx => {
  await Book.find()
    .then(data => { ctx.body = data })
    .catch(err => { 'error:' + err });
};

export const create = async ctx => {
  console.log(ctx.request.body);
  if(!ctx.request.body.name || !ctx.request.body.category || !ctx.request.body.pages) {
    return ctx.body = { error: 'Bad Data!' };
  }
  const book = new Book(ctx.request.body);

  await book.save()
    .then(data => { ctx.body = data })
    .catch(err => { 'error:' + err });
};

export const remove = async ctx => {
  await Book.deleteOne({
    _id: ctx.params.id 
  })
    .then(() => { ctx.body = {status: 'book deleted!'} })
    .catch(err => { 'error:' + err });
};

export const update = async ctx => {
  if(!ctx.request.body.name && !ctx.request.body.category && !ctx.request.body.pages) {
    return ctx.body = { error: 'Bad Data!' };
  }

  await Book.findOneAndUpdate(
    {_id: ctx.params.id},
    {name: ctx.request.body.name,
    category: ctx.request.body.category,
    pages: ctx.request.body.pages}
  )
    .then(() => { ctx.body = {status: 'book updated!'} })
    .catch(err => { 'error:' + err });
};