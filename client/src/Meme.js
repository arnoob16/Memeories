import React from 'react';
const Meme = ({username, caption, url}) => {
    return (
        <div className="meme">
            <img src={url} alt={caption}/>
            <h4>{caption}</h4>
            <i>{` - by ${username}`}</i>
        </div>
    )
}

export default Meme;