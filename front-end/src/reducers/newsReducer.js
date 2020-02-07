import { GET_NEWS_API } from '../actions/types';

const newsReducer = (state = [], action) => {
	switch (action.type) {
		case GET_NEWS_API:
			return action.payload;
		default:
			return state;
	}
};

export default newsReducer;
