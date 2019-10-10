import Router from 'koa-router';
import {find, create, read, update, remove} from '../controllers/book';

const router = new Router();

router.get('/api/book', find);
router.post('/api/book', create);
router.get('/api/book/:id', read);
router.delete('/api/book/:id', remove);
router.put('/api/book/:id', update);

export default router.routes();