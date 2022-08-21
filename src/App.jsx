import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/shared/Header';

const Home = lazy(() => import('./containers/Home'));
const Details = lazy(() => import('./containers/Details'));

function App() {
	return (
		<>
			<Header />
			<Suspense fallback={<div>Loading</div>}>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path=":pokemon/detail" element={<Details />} />
				</Routes>
			</Suspense>
		</>
	);
}

export default App;
