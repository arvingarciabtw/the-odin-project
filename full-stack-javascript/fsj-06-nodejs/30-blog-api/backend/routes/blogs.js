import { Router } from 'express';
import blogsController from '../controllers/blogsController.js';

const blogsRouter = Router();

blogsRouter.get('/', blogsController.getBlogs);

export default blogsRouter;
