import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import ArticleList from './ArticleList';
import LoadingBar from 'react-redux-loading-bar';

export const Dashboard = ({ getNews, fetchAPIData }) => {
	const renderButton = () => {
		if (fetchAPIData) {
			return null;
		} else {
			return (
				<button
					onClick={handleFetchData}
					type="button"
					className="btn btn-primary btn-lg"
					data-test="fetch-data-button"
				>
					Get News
				</button>
			);
		}
	};

	const headline = () => {
		return fetchAPIData ? 'Top US Headlines' : 'Get Top US News';
	};
	const handleFetchData = () => {
		getNews();
	};
	return (
		<div className="container" data-test="component-dashboard">
			<LoadingBar />
			<div className="jumbotron mt-5">
				<h1 className="display-4 text-center">{headline()}</h1>
				<hr className="my-4" />
				<p className="lead text-center">{renderButton()}</p>
				<ArticleList />
			</div>
		</div>
	);
};

const mapStateToProps = ({ fetchAPIData }) => {
	return {
		fetchAPIData,
	};
};
export default connect(mapStateToProps, actions)(Dashboard);
