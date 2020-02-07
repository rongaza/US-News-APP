import React from 'react';
import { shallow } from 'enzyme';
import { ArticleList } from './ArticleList';
import { findByTestAttr } from '../tests/testUtils';

const setup = (props = { newsArticles: [], fetchAPIData: false }) => {
	const wrapper = shallow(<ArticleList {...props} />);

	return wrapper;
};

const componentProps = {
	newsArticles: [
		{
			source_name: 'Tri Valley Times',
			author: 'Ron Gaza',
			title: 'Walks Dog',
			description: 'Ron walks dog at 4am in the cold',
			url: 'https://www.youtube.com/watch?v=Uasdfyei2iDA4Hs&list=PLillGF-RfqbbRA-CIUxlxkUpbq0IFkX60',
			url_to_image:
				'https://www.youtube.com/watch?v=Uyei2iDA4Hs&list=PLillGF-RfqbbRA-CIUxlxkUpbq0IFkX60',
			published_at: '2022-02-01',
			content: 'Dogs',
		},
	],
	fetchAPIData: true,
};

test('renders without error', () => {
	const wrapper = setup();
	const component = findByTestAttr(wrapper, 'article-list');
	expect(component.length).toBe(1);
});

test('renders no article list when fetchAPIData = false', () => {
	const wrapper = setup();
	const component = findByTestAttr(wrapper, 'article-list');
	expect(component.length).toBe(1);
});

test('renders list of articles when newsArticles prop is populated', () => {
	const wrapper = setup(componentProps);
	const component = findByTestAttr(wrapper, 'article-list-data');
	expect(component.length).toBe(1);
});
