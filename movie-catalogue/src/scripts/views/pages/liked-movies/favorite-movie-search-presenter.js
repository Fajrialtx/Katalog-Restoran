/* eslint-disable linebreak-style */
/* eslint-disable lines-between-class-members */
/* eslint-disable no-underscore-dangle */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
class FavoriteMovieSearchPresenter {
    constructor({ favoriteRestaurants }) {
        this._listenToSearchRequestByUser();
        this._favoriteRestaurants = favoriteRestaurants;
    }
    _listenToSearchRequestByUser() {
        this._queryElement = document.getElementById('query');
        this._queryElement.addEventListener('change', (event) => {
            this._searchRestaurants(event.target.value);
        });
      }
    _searchRestaurants(latestQuery) {
        this._latestQuery = latestQuery;
        this._favoriteRestaurants.searchRestaurants(this.latestQuery);
    }

    get latestQuery() {
      return this._latestQuery;
    }
  }

  export default FavoriteMovieSearchPresenter;
