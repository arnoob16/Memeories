import mongoose from 'mongoose';
const memeSchema = mongoose.Schema({
    username: String,
    url: String,
    caption: String,
    likes: {
        type: Number,
        default: 0
    },
    dateCreated: {
        type: Date,
        default: new Date()
    } 
});

const postMeme = mongoose.model('PostMeme', memeSchema);
export default postMeme;