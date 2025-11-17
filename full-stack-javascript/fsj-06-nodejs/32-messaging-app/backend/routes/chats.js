import { Router } from 'express';
import passport from 'passport';
import chatsController from '../controllers/chatsController.js';

const chats = Router();

const auth = passport.authenticate('jwt', { session: false });

chats.get('/', auth, chatsController.getChats);
chats.get('/:id', auth, chatsController.getChatById);

export default chats;
