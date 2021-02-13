import * as api from '../api';

export const getMemes = () => async(dispatch) => {
    try {
        const {data} = await api.fetchMemes();
        dispatch({type: 'FETCH_ALL', payload: data});
    } catch (error) {
        console.log(error);
    }
}

export const createMeme = (meme) => async(dispatch) => {
    try {
        const {data} = await api.createMeme(meme);
        dispatch({type: 'CREATE', payload: data});
    } catch (error) {
        console.log(error);
    }
}

export const deleteMeme = (id) => async(dispatch) => {
    try {
        await api.deleteMeme(id);
        dispatch({type: 'DELETE', payload: id});
    } catch (error) {
        console.log(error);
    }
}