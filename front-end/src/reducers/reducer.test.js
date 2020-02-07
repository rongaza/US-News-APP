import newsReducer from './newsReducer';
import apiReducer from './apiReducer';
import { GET_NEWS_API } from '../actions/types';
import * as actions from '../actions';

const article = [
	{
		source_name: 'Tri Valley Times',
		author: 'Ron Gaza',
		title: 'Walks Dog',
		description: 'Ron walks dog at 4am in the cold',
		url: 'https://www.youtube.com/watch?v=Uasdfyei2iDA4Hs&list=PLillGF-RfqbbRA-CIUxlxkUpbq0IFkX60',
		url_to_image: 'https://www.youtube.com/watch?v=Uyei2iDA4Hs&list=PLillGF-RfqbbRA-CIUxlxkUpbq0IFkX60',
		published_at: '2022-02-01',
		content: 'Dogs',
	},
];

describe('newsReducer', () => {
	test('newsReducer initial state', () => {
		const action = { type: 'some_action' };
		const initialState = [];
		expect(newsReducer(undefined, action)).toEqual(initialState);
	});

	test('GET_NEWS_API action returns correct state', () => {
		const initialState = [];
		const expectedState = article;
		const action = { type: GET_NEWS_API, payload: article };
		expect(newsReducer(undefined, action)).toEqual(expectedState);
	});
});

describe('apiReducer', () => {
	test('apiReducer initial state', () => {
		const expectedState = false;
		const action = { type: 'some_action' };
		expect(apiReducer(undefined, action)).toEqual(expectedState);
	});

	test('GET_NEWS_API action returns correct state', () => {
		const expectedState = true;
		const action = { type: GET_NEWS_API };
		expect(apiReducer(undefined, action)).toEqual(expectedState);
	});
});
