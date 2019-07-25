import Koa from 'koa';
import Router from 'koa-router';
import Logger from 'koa-logger';
import Cors from 'kcors';
import BodyParser from 'koa-bodyparser';
import mongoose from 'mongoose';

import routes from './routes/book';

const app = new Koa();
const router = Router();

app.use(BodyParser());
app.use(Logger());
app.use(Cors());

// API Route
app.use(routes).use(router.allowedMethods());

// DB Connect
mongoose.set('useFindAndModify', false);
mongoose.connect(
  'mongodb://localhost/koa-crud',
  {  useNewUrlParser: true }
);

// Server
const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`API server started on ${port}`));
