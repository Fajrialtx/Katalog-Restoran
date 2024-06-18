import RestaurantDB from '../../data/themoviedb-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Restaurants = {
  async render() {
    return `
    <picture>
    <div class="hero">
      <div class="hero__inner">
        <h1 class="hero__title">Jelajahi Makanan Nusantara</h1>
        <p class="hero__tagline">
          Memperluas pengetahuan tempat kuliner yang tersedia di nusantara
        </p>
      </div>
    </div>
    </picture>
    <section= class="desc">
        <article class="headline">
          <div class="headline__content">
            <h1 class="headline__title">Madang Kuy : Jelajahi Makanan Nusantara</h1>
            <p class="headline__description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus eum
              facere nostrum officiis qui quidem ratione similique, soluta veniam
              voluptatum. Accusantium ad amet asperiores, aut commodi corporis dicta
              distinctio ducimus expedita itaque laudantium magnam maiores, nobis
              obcaecati officiis provident quasi qui quos repellat rerum saepe sint soluta
              veniam vero vitae, voluptas voluptate voluptatem. Esse nobis non nulla optio
              vero. Laudantium!
            </p>
            <button class="headline__button">Read More</button>
          </div>
        </article>
        <div id="maincontent" class="latest">
          <h1 class="latest__label">Jelajahi Resto</h1>
        </div>
        
      </section>
      <div class="content">
        <div id="restaurants" class="posts">

        </div>
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantDB.homeRestaurant();
    const restaurantsContainer = document.querySelector('#restaurants');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Restaurants;
