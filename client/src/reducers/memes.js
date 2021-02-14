// eslint-disable-next-line import/no-anonymous-default-export
export default (memes = [], action) => {
	switch (action.type) {
		case "FETCH_ALL":
			return [...action.payload];
		case "CREATE":
			return [...memes, action.payload];
		case "UPDATE":
			return memes.map((meme) => meme._id === action.payload._id ? action.payload : meme);
		case "DELETE":
			return memes.filter((meme) => meme.i_d !== action.payload);
		case "LIKE":
			return memes.map((meme) => meme._id === action.payload._id ? action.payload : meme);
		case "DISLIKE":
			return memes.map((meme) => meme._id === action.payload._id ? action.payload : meme);
		default:
			return memes;
	}
};
