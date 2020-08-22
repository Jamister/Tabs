import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Modules
import tab_routes from 'modules/tab/routes';
import user_routes from 'modules/user/routes';

const all_routes = [
    ...tab_routes,
    ...user_routes,
];

const Routes = () => (
    <Switch>
        {all_routes.map(route => (
            <Route
                key={route.path}
                path={route.path}
                exact={route.exact}
                component={route.component}
            />
        ))}
    </Switch>
);

export default Routes;
