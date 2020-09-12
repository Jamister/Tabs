import MyTabs from './pages/MyTabs';
import Tab from './pages/Tab';

const tab_routes = [
    { path: '/me/tabs', exact: true, component: MyTabs },
    { path: '/tab/:id', exact: true, component: Tab },
];

export default tab_routes;
