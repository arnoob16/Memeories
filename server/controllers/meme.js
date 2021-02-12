import PostMeme from '../models/PostMeme.js';

export const getMemes = async (req, res) => {
    try {
        const memes = await PostMeme.find();
        console.log(memes);
        res.status(200).json(memes);
    }catch(err){
        res.status(404).json({'message' : error.message});
    }
}

export const createMeme = async (req, res) => {
    const meme = req.body;

    const newMeme = new PostMeme(meme);

    try {
        await newMeme.save();
        res.status(201).json(newMeme);
    } catch (error) {
        res.status(409).json({'message' : error.message});
    }
}