import Router from 'koa-router';
import {find, create, update, remove} from '../controllers/bookController';

const router = Router();

router.get('/book', find);
router.post('/book', create);
router.delete('/book/:id', remove);
router.put('/book/:id', update);

export default router.routes();