import SignIn from './pages/SignIn';
import Account from './pages/Account';

const user_routes = [
    { path: '/account', exact: true, component: Account },
    { path: '/sign/in', exact: true, component: SignIn },
    { path: '/', exact: true, component: SignIn },
    { path: '*', exact: true, component: SignIn },
];

export default user_routes;
