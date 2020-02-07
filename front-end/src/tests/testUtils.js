import checkPropTypes from 'check-prop-types';
import { createStore, applyMiddleware } from 'redux';
import reducers from '../reducers';
import reduxThunk from 'redux-thunk';

/**
 *
 * @param {ShallowWrapper} wrapper
 * @param {string} value of data-test attribute for search
 * @returns {ShallowWrapper}
 */

export const storeFactory = initialState => {
	return createStore(reducers, initialState, applyMiddleware(reduxThunk));
};

export const findByTestAttr = (wrapper, value) => {
	return wrapper.find(`[data-test="${value}"]`);
};

export const checkProps = (component, conformingProps) => {
	const propError = checkPropTypes(component.propTypes, conformingProps, 'prop', component.name);
	expect(propError).toBeUndefined();
};
