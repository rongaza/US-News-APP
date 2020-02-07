import axios from 'axios';
import { GET_NEWS_API } from './types';
import { API_URL } from '../constants';
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import moment from 'moment';
import { newsAPI } from '../config/dev';

export const getNews = () => async dispatch => {
	dispatch(showLoading());
	// fetch articles from newsAPI
	const newsURL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${newsAPI}`;
	console.log(newsURL);
	const res = await axios.get(newsURL);
	let articleList = res.data.articles.map(article => {
		return {
			source_name: article.source.name,
			author: article.author ? article.author : 'n/a',
			title: article.title ? article.title : 'n/a',
			description: article.description ? article.description : 'n/a',
			url: article.url ? article.url : 'n/a',
			url_to_image: article.urlToImage ? article.urlToImage : 'n/a',
			published_at: article.published_at
				? moment(article.published_at).format('YYYY-MM-DD')
				: moment().format('YYYY-MM-DD'),
			content: article.content ? article.content : 'n/a',
		};
	});

	// check for duplicate articles in redux store
	// articleList = articleList.filter(article => {
	// 	return newsArticles.indexOf(article.title) !== 1;
	// });

	// post articles to database and dispatch articleList for redux store
	axios.post(API_URL, articleList).then(res => dispatch({ type: GET_NEWS_API, payload: res.data }));

	dispatch(hideLoading());
};
