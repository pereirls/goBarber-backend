import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import AuthMiddleware from './app/middlewares/auth';
import multer from 'multer';
import MulterConfig from './config/multer';
import FileController from './app/controllers/FileController';

const routes = new Router();
const upload = multer(MulterConfig);

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(AuthMiddleware);
routes.put('/users', UserController.update);

routes.post('/files', upload.single('file'), FileController.store)

export default routes;
