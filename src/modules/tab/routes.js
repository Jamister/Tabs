import Tab from './pages/Tab';
import Tabs from './pages/Tabs';

const tab_routes = [
    { path: '/tabs', exact: true, component: Tabs },
    { path: '/tab', exact: true, component: Tab },
    { path: '/', exact: true, component: Tab },
    { path: '*', exact: true, component: Tab },
];

export default tab_routes;
