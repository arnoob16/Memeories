import express from 'express';
import {getMemes, createMeme, getMemeById, editMeme, deleteMeme, likeMeme, dislikeMeme} from '../controllers/meme.js';
const router = express.Router();

router.get('/', getMemes);
router.get('/:id', getMemeById);
router.post('/', createMeme);
router.patch('/:id', editMeme);
router.delete('/:id', deleteMeme);
router.patch('/:id/likeMeme', likeMeme);
router.patch('/:id/dislikeMeme', dislikeMeme);
export default router;