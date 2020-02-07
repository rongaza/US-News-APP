import React from 'react';
import thunk from 'redux-thunk';
import moxios from 'moxios';

import configureStore from 'redux-mock-store';
import { getNews } from '.';

const mockStore = configureStore([thunk]);
const newsArticles = {
	source_name: 'Tri Valley Times',
	author: 'Ron Gaza',
	title: 'Walks Dog',
	description: 'Ron walks dog at 4am in the cold',
	url: 'https://www.youtube.com/watch?v=Uasdfyei2iDA4Hs&list=PLillGF-RfqbbRA-CIUxlxkUpbq0IFkX60',
	url_to_image: 'https://www.youtube.com/watch?v=Uyei2iDA4Hs&list=PLillGF-RfqbbRA-CIUxlxkUpbq0IFkX60',
	published_at: '2022-02-01',
	content: 'Dogs',
};
const initialState = {
	newsArticles,
	fetchAPIData: false,
};
const store = mockStore(initialState);

describe('api calls', () => {
	beforeEach(() => moxios.install());
	afterEach(() => moxios.uninstall());

	test('successfull api request calls GET_NEWS_API action', () => {
		moxios.wait(() => {
			let request = moxios.requests.mostRecent();
			request.respondWith({ status: 200, response: { newsArticles } });
		});

		store.dispatch(getNews()).then(() => {
			const actionsCalled = store.getActions();
			expect(actionsCalled[0]).toEqual(getNews());
		});
	});
});
