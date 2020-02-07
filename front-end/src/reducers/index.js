import { combineReducers } from 'redux';
import { loadingBarReducer } from 'react-redux-loading-bar';
import newsReducer from './newsReducer';
import apiReducer from './apiReducer';

export default combineReducers({
	newsArticles: newsReducer,
	loadingBar: loadingBarReducer,
	fetchAPIData: apiReducer,
});
