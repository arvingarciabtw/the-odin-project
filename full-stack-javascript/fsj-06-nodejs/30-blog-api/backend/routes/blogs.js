import { Router } from 'express';
import blogsController from '../controllers/blogsController.js';

const blogsRouter = Router();

blogsRouter.get('/', blogsController.getBlogs);
blogsRouter.get('/:id', blogsController.getBlogById);

export default blogsRouter;
