import FireEmblem from './pages/FireEmblem';
import BaldursGate from './pages/BaldursGate';
import StreetFighter from './pages/StreetFighter';

const routes = [
  { path: '/', component: <FireEmblem />, exact: true },
  { path: '/about', component: <BaldursGate /> },
  { path: '/contact', component: <StreetFighter /> },
];

export default routes;