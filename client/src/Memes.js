import React from "react";
import { useSelector } from "react-redux";
import Meme from "./Meme";
import loaderAnimation from "./loader.svg";

const Loader = () => {
	return <img src={loaderAnimation} alt="Loader" />;
};

const Memes = ({ setCurrentMemeId }) => {
	const memes = useSelector((state) => state.memes) ?? [];
	return (
		<div className="memeView">
			{memes.length ? (
				memes.map((meme, index) => {
					return (
						<Meme
							key={index}
							url={meme["url"]}
							caption={meme["caption"]}
							username={meme["username"]}
							timestamp={meme["dateCreated"]}
							likes={meme["likes"]}
							_id={meme["_id"]}
							setCurrentMemeId={setCurrentMemeId}
						/>
					);
				})
			) : (
				<Loader />
			)}
		</div>
	);
};

export default Memes;
