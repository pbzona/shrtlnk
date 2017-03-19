import React from 'react';
import {Link} from 'react-router';

const NotFound = () => {
	return (
		<div className="boxed-view">
			<div className="boxed-view__box">
				<h1>Page Not Found</h1>
				<p>Sorry, we can't find that page</p>
				<Link to="/">HOME</Link>
			</div>
		</div>
	);
};

export default NotFound;
