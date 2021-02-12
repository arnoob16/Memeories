/** @format */

export default (memes = [], action) => {
	switch (action.type) {
		case "FETCH_ALL":
			return [...action.payload];
		case "CREATE":
			return [...memes, action.payload];
		default:
			return memes;
	}
};
