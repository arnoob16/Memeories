import React, { useState } from "react";
import moment from "moment";
import { useDispatch } from "react-redux";
import { deleteMeme, likeMeme, dislikeMeme } from "./actions/meme";

const Meme = ({
	username,
	caption,
	url,
	timestamp,
	likes,
	_id,
	setCurrentMemeId,
}) => {
	const [likedState, setLikedState] = useState(false);
	const dispatch = useDispatch();
	if (!url) return <></>;
	const formattedTime = moment(
		timestamp.substring(0, timestamp.length - 4).replace("T", ""),
		"yyyy-MM-ddHH:mm:ss"
	).format("yyyy-MM-DD");
	return (
		<div className="meme">
			<h6 className="memeHeader">
				<span className="userName">{username}</span> <br />{" "}
				{`posted this ${moment(formattedTime, "yyyy-MM-DD").fromNow()}`}
			</h6>
			<img src={url} alt={caption} />
			<p>{caption}</p>
			<div className="btnActions">
				<div
					className="likeBtn"
					onClick={() => {
						setLikedState(!likedState);
						if (!likedState) {
							dispatch(likeMeme(_id));
						} else {
							dispatch(dislikeMeme(_id));
						}
						// setCurrentMemeId(_id);
					}}
				>
					<i className={likedState ? "likeIcon press" : "likeIcon"}></i>
					<strong className={likedState ? "liked" : "unliked"}> {likes}</strong>
				</div>
				<button
					className="editIcon"
					onClick={() => setCurrentMemeId(_id)}
				></button>
				<button
					className="deleteIcon"
					onClick={() => dispatch(deleteMeme(_id))}
				></button>
			</div>
		</div>
	);
};

export default Meme;
