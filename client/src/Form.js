import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {createMeme} from './actions/meme';

const Form = () => {

    const [memeData, setMemeData] = useState({username:'', caption:'', url: ''})
    const dispatch = useDispatch();
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(createMeme(memeData))
        clear();
    }

    const clear = () => {
        setMemeData({username:'', caption:'', url: ''});
    } 

    return (
        <form autoComplete="off" noValidate onSubmit={handleSubmit} className="form">
            <h2>Upload your favourite meme</h2>
            <input 
                type="text" 
                value = {memeData.username} 
                onChange={(e) => setMemeData({ ...memeData, username: e.target.value})}
                placeholder="Enter your name."/>
            <input 
                type="text" 
                value = {memeData.caption} 
                onChange={(e) => setMemeData({ ...memeData, caption: e.target.value})}
                placeholder="Enter a catchy caption."/>
            <input 
                type="url" 
                value={memeData.url} 
                onChange={(e) => setMemeData({ ...memeData, url: e.target.value})}
                placeholder="Enter your meme image URL."/>
            <input type="submit" value="Upload Meme"/>
        </form>
    )
}

export default Form;