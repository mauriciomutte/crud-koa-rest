const Koa = require('koa');
const Router = require('koa-router');
const BodyParser = require('koa-bodyparser');
const mongoose = require('mongoose');

const app = new Koa();
const router = new Router();

app.use(BodyParser({
  enableTypes: ['json'],
  jsonLimit: '5mb',
  strict: true,
  onerror: function (err, ctx) {
    ctx.throw('body parse error', 422)
  }
}));

// API Route
router.prefix('/v1')
router.use('/book', require('./routes/book'))
app.use(router.routes())
app.use(router.allowedMethods())

// DB Connect
mongoose.connect(
  'mongodb://localhost/koa-crud',
  {  useNewUrlParser: true }
);

// Server
const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`API server started on ${port}`));
