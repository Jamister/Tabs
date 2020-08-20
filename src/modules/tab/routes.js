import Tab from './pages/Tab';

const tab_routes = [
    { path: '/tab', exact: true, component: Tab },
    { path: '/', exact: true, component: Tab },
    { path: '*', exact: true, component: Tab },
];

export default tab_routes;
