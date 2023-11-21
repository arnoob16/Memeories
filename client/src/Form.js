import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { createMeme, updateMeme } from "./actions/meme";
import { useSelector } from "react-redux";
const Form = ({ currentMemeId, setCurrentMemeId }) => {
	const [memeData, setMemeData] = useState({
		username: "",
		caption: "",
		url: "",
	});
	const meme = useSelector((state) =>
		currentMemeId
			? state.memes.find((meme) => meme._id === currentMemeId)
			: null
	);
	const dispatch = useDispatch();

	useEffect(() => {
		if (meme) setMemeData(meme);
	}, [meme]);

	const handleSubmit = (event) => {
		event.preventDefault();
		if (currentMemeId) {
			dispatch(updateMeme(currentMemeId, memeData));
		} else {
			dispatch(createMeme(memeData));
		}
		clear();
	};

	const clear = () => {
		setCurrentMemeId(null);
		setMemeData({ username: "", caption: "", url: "" });
	};

	return (
		<form
			autoComplete="off"
			noValidate
			onSubmit={handleSubmit}
			className="form"
		>
			<h2>{currentMemeId ? "Edit" : "Upload"} your favourite meme</h2>
			<input
				type="text"
				value={memeData.username}
				onChange={(e) => setMemeData({ ...memeData, username: e.target.value })}
				placeholder="Enter your name."
			/>
			<input
				type="text"
				value={memeData.caption}
				onChange={(e) => setMemeData({ ...memeData, caption: e.target.value })}
				placeholder="Enter a catchy caption."
			/>
			<input
				type="url"
				value={memeData.url}
				onChange={(e) => setMemeData({ ...memeData, url: e.target.value })}
				placeholder="Enter your meme image URL."
			/>
			<input type="submit" value="Upload Meme" />
		</form>
	);
};

export default Form;
