import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

export const ArticleList = ({ newsArticles, fetchAPIData }) => {
	const renderArticleList = () => {
		return newsArticles.map(article => {
			return (
				<div className="card mb-3" key={article.url}>
					{article.url_to_image !== 'n/a' ? (
						<img
							src={article.url_to_image}
							className="card-img-top"
							alt={article.url_to_image}
						/>
					) : null}
					<div className="card-body">
						<h5 className="card-title">{article.title}</h5>
						<p className="card-subtitle mb-2 text-muted">{article.description}</p>
						<hr className="my-4" />
						<p>{article.content}</p>
						<hr className="my-4" />
						<p className="card-subtitle mb-2 text-muted">
							Published: {moment(article.published_at).format('MM-DD-YYYY')}
						</p>
						<a href={article.url} className="btn btn-primary">
							Go to article
						</a>
					</div>
				</div>
			);
		});
	};

	return (
		<React.Fragment>
			{fetchAPIData ? (
				<div data-test="article-list-data">{renderArticleList()}</div>
			) : (
				<div data-test="article-list"></div>
			)}
		</React.Fragment>
	);
};

const mapStateToProps = ({ newsArticles, fetchAPIData }) => {
	return {
		newsArticles,
		fetchAPIData,
	};
};
export default connect(mapStateToProps)(ArticleList);
