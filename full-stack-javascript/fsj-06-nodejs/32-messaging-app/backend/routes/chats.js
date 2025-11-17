import { Router } from 'express';
import chatsController from '../controllers/chatsController.js';

const chats = Router();

chats.get('/', chatsController.getChats);
chats.get('/:id', chatsController.getChatById);

export default chats;
