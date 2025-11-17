import { Router } from 'express';
import passport from 'passport';
import messagesController from '../controllers/messagesController.js';

const messages = Router();

const auth = passport.authenticate('jwt', { session: false });

messages.get('/:id', auth, messagesController.getMessagesFromChatId);
messages.post('/', auth, messagesController.createMessage);

export default messages;
