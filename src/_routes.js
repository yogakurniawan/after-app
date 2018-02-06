// ./src/_routes.js
import Main from './Main';
import Sandwiches from './Sandwiches';
import Tacos from './Tacos';

const routes = [
  {
    path: '/',
    exact: true,
    component: Main
  },
  {
    path: '/sandwiches',
    component: Sandwiches
  },
  {
    path: '/tacos',
    component: Tacos
  }
]

export default routes;