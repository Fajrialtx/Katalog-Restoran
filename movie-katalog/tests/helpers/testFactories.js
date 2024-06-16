/* eslint-disable linebreak-style */
/* eslint-disable import/prefer-default-export */
import LikeButtonInitiator from '../../src/scripts/utils/like-button-initiator';
import FavoriteIdb from '../../src/scripts/data/favorite-movie-idb';

const createLikeButtonInitiatorWithRestaurant = async (restaurant) => {
  await LikeButtonInitiator.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    favoriteRestaurants: FavoriteIdb,
    restaurant,
  });
};
export { createLikeButtonInitiatorWithRestaurant };
