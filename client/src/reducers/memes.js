// eslint-disable-next-line import/no-anonymous-default-export
export default (memes = [], action) => {
	switch (action.type) {
		case "FETCH_ALL":
			return [...action.payload];
		case "CREATE":
			return [...memes, action.payload];
		case "DELETE":
			return memes.filter((meme) => meme.i_d !== action.payload);
		default:
			return memes;
	}
};
