import React from 'react';
import { shallow } from 'enzyme';
import { Dashboard } from './Dashboard';
import { findByTestAttr } from '../tests/testUtils';

const setup = (props = { fetchAPIData: false }) => {
	const wrapper = shallow(<Dashboard {...props} />);
	return wrapper;
};

describe('when the component first renders and there are no articles', () => {
	test('component renders without an error', () => {
		const wrapper = setup();
		const dashboardComponent = findByTestAttr(wrapper, 'component-dashboard');
		expect(dashboardComponent.length).toBe(1);
	});

	test('renders fetch data button when there are no articles loaded', () => {
		const wrapper = setup();
		const button = findByTestAttr(wrapper, 'fetch-data-button');
		expect(button.length).toBe(1);
	});
});

describe('when component renders after it has fetched articles from api', () => {
	test('renders no fetch data button when fetchAPIData = true', () => {
		const wrapper = setup({ fetchAPIData: true });
		const button = findByTestAttr(wrapper, 'fetch-data-button');
		expect(button.length).toBe(0);
	});
});
