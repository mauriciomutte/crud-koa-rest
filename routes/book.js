const Router = require('koa-router');
const Ctx = require('../controllers/bookController')
const router = new Router;

router.get('/', Ctx.find);
router.post('/', Ctx.create);
router.delete('/:id', Ctx.delete);
router.put('/:id', Ctx.update);

module.exports = router.routes();