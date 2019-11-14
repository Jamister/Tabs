import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

// Loading
import LoadingPage from './components/LoadingPage';

// Pages
const Tab = lazy(() => import('./pages/Tab'));

const Routes = () => (
	<Suspense fallback={<LoadingPage />}>
		<Switch>
			<Route path="/tab" exact component={Tab} />
			<Route path="/" exact component={Tab} />
			<Route path="*" exact component={Tab} />
		</Switch>
	</Suspense>
);

export default Routes;
