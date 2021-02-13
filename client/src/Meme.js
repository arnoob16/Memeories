import React, {useState} from 'react';
import moment from 'moment';
import {useDispatch} from 'react-redux';
import {deleteMeme} from './actions/meme';

const Meme = ({username, caption, url, timestamp, likes, _id}) => {

    const [likedState, setLikedState] = useState(false);
    const dispatch = useDispatch();
    return (
        <div className="meme">
            <h6 className="memeHeader"><span className = "userName">{username}</span> {` posted this ${moment(timestamp).fromNow()}`}</h6>
            <img src={url} alt={caption}/>
            <h5>{caption}</h5>
            <div className="btnActions">
                <div className="likeBtn" onClick={() => {
                    setLikedState(!likedState);
                }}>
                    <i className= {likedState ? "likeIcon press" : "likeIcon"}></i>
                    <strong className= {likedState ? "liked" : "unliked"} > {likes}</strong>
                </div>
                <button className="deleteIcon" onClick={() => 
                    dispatch(deleteMeme(_id))}>
                </button>
            </div>
        </div>
    )
}

export default Meme;