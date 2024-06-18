import 'regenerator-runtime';
import '../styles/style.css';
import '../styles/responsive.css';
import App from './views/app';
import swRegister from './utils/sw-register';
import WebSocketInitiator from './utils/websocket-initiator';
import CONFIG from './globals/config';
import filter from 'lodash.filter';
import Restaurants from './views/pages/now-playing';
 

const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
  WebSocketInitiator.init(CONFIG.WEB_SOCKET_SERVER);
});

mainContent.addEventListener('submit', (event) => {
  event.preventDefault();
  restaurantsContainer.innerHTML = '';
 
import('lodash.filter')
  .then((module) => module.default)
  .then(filterRestaurants)
  .catch((error) => alert(error));
});
 
const filterRestaurants = (filter) => {
  filter(Restaurants, post-item.value === 'all' ? {} : { type: post-item.value })
    .forEach(renderContact);
};
