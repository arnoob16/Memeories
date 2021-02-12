import express from 'express';
import {getMemes, createMeme} from '../controllers/meme.js';
const router = express.Router();

router.get('/', getMemes);
router.post('/', createMeme);

export default router;