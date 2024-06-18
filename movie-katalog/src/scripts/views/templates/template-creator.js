/* eslint-disable import/no-extraneous-dependencies */
import CONFIG from '../../globals/config';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const createRestaurantDetailTemplate = (restaurant) => `
<h2 class="post__name">${restaurant.name}</h2>
<img class="post__poster" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" crossorigin="anonymous"/>
<div class="post__info">
  <h3>Information</h3>
  <div class="info__item">
    <h4>Kota</h4>
    <p>${restaurant.city}</p>
  </div>
  <div class="info__item">
    <h4>Alamat</h4>
    <p>${restaurant.address}</p>
  </div>
  <div class="info__item">
    <h4>Categories</h4>
    <p>${restaurant.categories.map((category) => category.name).join(' | ')}</p>
  </div>
  <div class="info__item">
    <h4>Foods</h4>
    <div class="food__items">
      ${restaurant.menus.foods.map((food) => `
        <div class="food__item">
          <p>${food.name}</p>
        </div>
      `).join('')}
    </div>
  </div>
  <div class="info__item">
    <h4>Drinks</h4>
    <div class="drink__items">
      ${restaurant.menus.drinks.map((drink) => `
        <div class="drink__item">
          <p>${drink.name}</p>
        </div>
      `).join('')}
    </div>
  </div>
</div>
<div class="post__description">
  <h3>Description</h3>
  <p>${restaurant.description}</p>
  <h4>Rating</h4>
  <h3>${restaurant.rating}</h3>
</div>
<div class="post__description">
  <h3>Customer Reviews</h3>
  ${restaurant.customerReviews.map((review) => `
    <div class="review__item">
      <p><strong>${review.name}</strong></p>
      <p>${review.review}</p>
      <p class="review__date">${review.date}</p>
    </div>
  `).join('')}
</div>
`;

const createRestaurantItemTemplate = (restaurant) => `
  <div class="post-item">
    <div class="post-item__header">
    <div class="post-item__thumbnail">
        <img class="lazyload restaurant-img" alt="${restaurant.name}"
        data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" crossorigin="anonymous"/>
        </div>
        </div>
        <div class="post-item__rating">
        <p> Rating : ${restaurant.rating}</p>
        <p> Lokasi : ${restaurant.city}</p>
        
    </div>
    <div class="post-item__content">
        <h3 class="post-item__title"><a href="${`/#/detail/${restaurant.id}`}">${restaurant.name}</a></h3>
        <p>${restaurant.description}</p>
    </div>
  </div>
  `;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
  <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
