import axios from 'axios';

const url = 'http://localhost:5000/memes';

export const fetchMemes = () => axios.get(url);
export const createMeme = (meme) => axios.post(url, meme);
export const deleteMeme = (id) => axios.delete(`${url}/${id}`);