import SignIn from './pages/SignIn';

const user_routes = [
    { path: '/sign/in', exact: true, component: SignIn },
    { path: '/', exact: true, component: SignIn },
    { path: '*', exact: true, component: SignIn },
];

export default user_routes;
