import FavoriteIdb from '../../data/favorite-movie-idb';
import FavoriteRestaurantView from './liked-movies/favorite-movie-view';
import FavoriteRestaurantShowPresenter from './liked-movies/favorite-movie-show-presenter';
import FavoriteRestaurantSearchPresenter from './liked-movies/favorite-movie-search-presenter';

const view = new FavoriteRestaurantView();

const Like = {
  async render() {
    return view.getTemplate();
  },

  async afterRender() {
    // eslint-disable-next-line no-new
    new FavoriteRestaurantShowPresenter({ view, favoriteRestaurants: FavoriteIdb });
    // eslint-disable-next-line no-new
    new FavoriteRestaurantSearchPresenter({ view, favoriteRestaurants: FavoriteIdb });
  },
};

export default Like;
