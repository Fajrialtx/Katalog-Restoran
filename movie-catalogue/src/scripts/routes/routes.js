import Restaurants from '../views/pages/now-playing';
import Detail from '../views/pages/detail';
import Favorite from '../views/pages/like';

const routes = {
  '/': Restaurants, // default page
  '/now-playing': Restaurants,
  '/detail/:id': Detail,
  '/like': Favorite,
};

export default routes;
