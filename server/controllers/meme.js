import PostMeme from '../models/PostMeme.js';
import mongoose from 'mongoose';

export const getMemes = async (req, res) => {
    try {
        const memes = await PostMeme.find();
        const last100Memes = memes.slice(Math.max(memes.length - 100, 0)).reverse();
        res.status(200).json(last100Memes);
    } catch (err) {
        res.status(404).json({
            'message': error.message
        });
    }
}

export const getMemeById = async (req, res) => {
    const {id: _id} = req.params;
    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).json("No such meme with that ID found.")
    else {
        const response = await PostMeme.find({"_id": _id}, (error, meme) => {
            if (error) return { "message": error.message};
            else return meme[0];
        });
        return res.status(200).json(response[0]);
    }
}

export const createMeme = async (req, res) => {
    const meme = req.body;
    const newMeme = new PostMeme(meme);
    try {
        const memes = await PostMeme.find();
        let matching = false;
        memes.forEach((meme) => {
            if(meme.url === newMeme.url && meme.caption === newMeme.caption && meme.username === newMeme.username){
                matching = true;
            }
        });
        if(matching){
            res.status(409).json({"message" : "Same meme is already posted by you."});
        }else{
            await newMeme.save();
            res.status(201).json({
                "id": newMeme._id
            });
        }
        
    } catch (error) {
        res.status(409).json({
            'message': error.message
        });
    }
}

export const deleteMeme = async (req, res) => {
    const id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(id)) 
        return res.status(404).json("No such meme with that ID found.")
    await PostMeme.findByIdAndRemove(id);
    return res.status(204).json({"message": "Post Deleted Succesfully"});
}