import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './layout/Header';
import Dashboard from './Dashboard';

const App = () => {
	return (
		<BrowserRouter>
			<Header />
			<Route path="/" exact component={Dashboard} />
		</BrowserRouter>
	);
};

export default App;
