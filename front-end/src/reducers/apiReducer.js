import { GET_NEWS_API } from '../actions/types';

const apiReducer = (state = false, action) => {
	switch (action.type) {
		case GET_NEWS_API:
			return true;
		default:
			return state;
	}
};

export default apiReducer;
