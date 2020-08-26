import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Modules
import user_routes from 'modules/user/routes';
import tab_routes from 'modules/tab/routes';

const all_routes = [
    ...user_routes,
    ...tab_routes,
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
