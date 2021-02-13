import express from 'express';
import {getMemes, createMeme, getMemeById, deleteMeme} from '../controllers/meme.js';
const router = express.Router();

router.get('/', getMemes);
router.get('/:id', getMemeById);
router.post('/', createMeme);
router.delete('/:id', deleteMeme);

export default router;