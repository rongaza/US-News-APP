import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<a className="navbar-brand">
				<Link to={'/'}>US News</Link>
			</a>
		</nav>
	);
};

export default Header;
