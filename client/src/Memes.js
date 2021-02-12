import React from 'react';
import {useSelector} from 'react-redux';
import Meme from './Meme';
import loaderAnimation from './loader.svg';

const Loader = () => {
    return (
        <img src={loaderAnimation} alt="Loader"/>
    )
}

const Memes = () => {
    const memes = useSelector((state) => state.memes);
    console.log(memes);

    return (
        !memes.length ? (
            <div className="memeView">
                <Loader/>
            </div>
            ) : (
            <div className="memeView">
            {memes.map((meme, index) => {
                return <Meme
                    key = {index}
                    url = {meme["url"]}
                    caption = {meme["caption"]}
                    username = {meme["username"]}
                />
            })}
            </div>
        )
        
    )
}

export default Memes;