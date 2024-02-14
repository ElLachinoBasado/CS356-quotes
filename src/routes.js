import FireEmblem from './pages/FireEmblem';
import BaldursGate from './pages/BaldursGate';
import StreetFighter from './pages/StreetFighter';

const routes = [
  { path: '/', component: <FireEmblem />, exact: true },
  { path: '/BG', component: <BaldursGate /> },
  { path: '/SF', component: <StreetFighter /> },
];

export default routes;