import axios from "axios";

const url = "https://memeories-backend.vercel.app/memes";

export const fetchMemes = () => axios.get(url);
export const createMeme = (meme) => axios.post(url, meme);
export const updateMeme = (id, meme) => axios.patch(`${url}/${id}`, meme);
export const deleteMeme = (id) => axios.delete(`${url}/${id}`);
export const likeMeme = (id) => axios.patch(`${url}/${id}/likeMeme`);
export const dislikeMeme = (id) => axios.patch(`${url}/${id}/dislikeMeme`);
