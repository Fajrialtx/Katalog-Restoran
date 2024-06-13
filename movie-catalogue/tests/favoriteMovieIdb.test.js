/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
/* eslint-disable no-undef */
import { itActsAsFavoriteRestaurantModel } from './contracts/favoriteMovieContract';
import FavoriteIdb from '../src/scripts/data/favorite-movie-idb';

describe('Favorite Restaurant Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await FavoriteIdb.getAllRestaurants()).forEach(async (restaurant) => {
      await FavoriteIdb.deleteRestaurant(restaurant.id);
    });
  });

  itActsAsFavoriteRestaurantModel(FavoriteIdb);
});
