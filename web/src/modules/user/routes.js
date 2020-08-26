import SignIn from './pages/SignIn';
import Test1 from './pages/Test1';

const user_routes = [
    { path: '/test1', exact: true, component: Test1 },
    { path: '/sign/in', exact: true, component: SignIn },
];

export default user_routes;
