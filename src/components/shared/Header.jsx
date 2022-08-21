import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<header>
			<div className="navbar navbar-dark bg-dark shadow-sm">
				<div className="container">
					<Link to="/" className="navbar-brand d-flex align-items-center">
						<strong>Pokemon UI</strong>
					</Link>
				</div>
			</div>
		</header>
	);
};

export default Header;
