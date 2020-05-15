import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Pages
import Tab from './pages/Tab';

const Routes = () => (
	<Switch>
		<Route path="/tab" exact component={Tab} />
		<Route path="/" exact component={Tab} />
		<Route path="*" exact component={Tab} />
	</Switch>
);

export default Routes;
