import { Router } from 'express';
import messagesController from '../controllers/messagesController.js';

const messages = Router();

messages.get('/:id', messagesController.getMessagesFromChatId);
messages.post('/', messagesController.createMessage);

export default messages;
