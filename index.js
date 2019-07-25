import Koa from 'koa';
import BodyParser from 'koa-bodyparser';
import mongoose from 'mongoose';
import routes from './routes/book';

const app = new Koa();

app.use(BodyParser({
  enableTypes: ['json'],
  jsonLimit: '5mb',
  strict: true,
  onerror: function (err, ctx) {
    ctx.throw('body parse error', 422)
  }
}));

// API Route
app.use(routes);

// DB Connect
mongoose.connect(
  'mongodb://localhost/koa-crud',
  {  useNewUrlParser: true }
);

// Server
const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`API server started on ${port}`));
