import FavoriteIdb from '../../data/favorite-movie-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';
import FavoriteRestaurantView from './liked-movies/favorite-movie-view';
import FavoriteRestaurantShowPresenter from './liked-movies/favorite-movie-show-presenter';
import FavoriteRestaurantSearchPresenter from './liked-movies/favorite-movie-search-presenter';

const view = new FavoriteRestaurantView();

const Favorite = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">Your Favorite Restaurant</h2>
        <div id="restaurants" class="posts">

        </div>
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteIdb.getAllRestaurants();
    const restaurantContainer = document.querySelector('#restaurants');
    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
    // eslint-disable-next-line no-new
    new FavoriteRestaurantShowPresenter({ view, favoriteRestaurants: FavoriteIdb });
    // eslint-disable-next-line no-new
    new FavoriteRestaurantSearchPresenter({ view, favoriteRestaurants: FavoriteIdb });
  },
};

export default Favorite;
