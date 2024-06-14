/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable no-undef */
/* eslint-disable linebreak-style */
// eslint-disable-next-line import/no-extraneous-dependencies
import { spyOn } from 'jest-mock';
import FavoriteMovieSearchPresenter from '../src/scripts/views/pages/liked-movies/favorite-movie-search-presenter';
import FavoriteIdb from '../src/scripts/data/favorite-movie-idb';

describe('Searching restaurants', () => {
  let presenter;
  const searchRestaurants = (query) => {
    const queryElement = document.getElementById('query');
    queryElement.value = query;
    queryElement.dispatchEvent(new Event('change'));
  };
  const setMovieSearchContainer = () => {
    document.body.innerHTML = `
      <div id="restaurant-search-container">
        <input id="query" type="text">
        <div class="restaurant-result-container">
          <ul class="restaurants">
          </ul>
        </div>
      </div>
    `;
  };
  const constructPresenter = () => {
    spyOn(FavoriteIdb, 'searchRestaurants');
    presenter = new FavoriteMovieSearchPresenter({
      favoriteRestaurants: FavoriteIdb,
    });
  };

  beforeEach(() => {
    setMovieSearchContainer();
    constructPresenter();
  });

    beforeEach(() => {
      document.body.innerHTML = `
        <div id="restaurant-search-container">
          <input id="query" type="text">
          <div class="restaurant-result-container">
            <ul class="restaurants">
            </ul>
          </div>
        </div>
      `;
      spyOn(FavoriteIdb, 'searchRestaurants');
      presenter = new FavoriteMovieSearchPresenter({ favoriteRestaurants: FavoriteIdb });
    });

    it('should be able to capture the query typed by the user', () => {
      searchRestaurants('film a');
      expect(presenter.latestQuery).toEqual('film a');
    });
    it('should ask the model to search for liked restaurants', () => {
      searchRestaurants('film a');
      expect(FavoriteIdb.searchRestaurants).toHaveBeenCalledWith('film a');
    });
});
