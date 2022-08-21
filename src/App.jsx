import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';

import Header from './components/shared/Header';

const Home = lazy(() => import('./containers/Home'));
const Details = lazy(() => import('./containers/Details'));

function App() {
	return (
		<>
			<Header />
			<Suspense
				fallback={
					<Spinner animation="border" role="status">
						<span className="visually-hidden">Loading...</span>
					</Spinner>
				}
			>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path=":pokemon/detail" element={<Details />} />
				</Routes>
			</Suspense>
		</>
	);
}

export default App;
