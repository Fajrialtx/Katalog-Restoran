/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable linebreak-style */
import LikeButtonInitiator from '../src/scripts/utils/like-button-initiator';
import FavoriteIdb from '../src/scripts/data/favorite-movie-idb';
// eslint-disable-next-line no-unused-vars
import * as TestFactories from './helpers/testFactories';

describe('Unliking A Restaurant', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  beforeEach(async () => {
    addLikeButtonContainer();
    await FavoriteIdb.putRestaurant({ id: 1 });
  });

  afterEach(async () => {
    await FavoriteIdb.deleteRestaurant(1);
  });

  it('should display unlike widget when the restaurant has been liked', async () => {
    await TestFactories.createLikeButtonInitiatorWithRestaurant({ id: 1 });
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestaurants: FavoriteIdb,
      restaurant: {
        id: 1,
      },
    });

    expect(document.querySelector('[aria-label="unlike this restaurant"]')).toBeTruthy();
  });

  it('should not display like widget when the restaurant has been liked', async () => {
    await TestFactories.createLikeButtonInitiatorWithRestaurant({ id: 1 });
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestaurants: FavoriteIdb,
      restaurant: {
        id: 1,
      },
    });

    expect(document.querySelector('[aria-label="like this movie"]')).toBeFalsy();
  });
  it('should be able to remove liked restaurant from the list', async () => {
    await TestFactories.createLikeButtonInitiatorWithRestaurant({ id: 1 });
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestaurants: FavoriteIdb,
      restaurant: {
        id: 1,
      },
    });
    document.querySelector('[aria-label="unlike this restaurant"]').dispatchEvent(new Event('click'));
    expect(await FavoriteIdb.getAllRestaurants()).toEqual([]);
  });
  it('should not throw error when user click unlike widget if the unliked restaurant is not in the list', async () => {
    await TestFactories.createLikeButtonInitiatorWithRestaurant({ id: 1 });
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestaurants: FavoriteIdb,
      restaurant: {
        id: 1,
      },
    });
    // Hapus dulu film dari daftar film yang disukai
    await FavoriteIdb.deleteRestaurant(1);
    // Kemudian, simulasikan pengguna menekan widget batal menyukai film
    document.querySelector('[aria-label="unlike this restaurant"]').dispatchEvent(new Event('click'));
    expect(await FavoriteIdb.getAllRestaurants()).toEqual([]);
  });
});
