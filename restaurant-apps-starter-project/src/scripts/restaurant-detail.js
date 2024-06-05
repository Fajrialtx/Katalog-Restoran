import 'egenerator-runtime'; /* for async await transpile */

const restaurantId = new URLSearchParams(window.location.search).get('id');

async function fetchRestaurantDetail() {
  const response = await fetch(`https://restaurant-api.dicoding.dev/detail/${restaurantId}`);
  const data = await response.json();
  renderRestaurantDetail(data);
}

function renderRestaurantDetail(data) {
  const restaurant = data.restaurant;

  const restaurantName = document.getElementById('restaurant-name');
  restaurantName.textContent = restaurant.name;

  const restaurantImage = document.getElementById('restaurant-image');
  restaurantImage.src = `https://restaurant-api.dicoding.dev/images/small/${restaurant.pictureId}`;
  restaurantImage.alt = restaurant.name;

  const restaurantAddress = document.getElementById('restaurant-address');
  restaurantAddress.textContent = restaurant.address;

  const restaurantCity = document.getElementById('restaurant-city');
  restaurantCity.textContent = restaurant.city;

  const restaurantDescription = document.getElementById('restaurant-description');
  restaurantDescription.textContent = restaurant.description;

  const menuFoods = document.getElementById('menu-foods');
  restaurant.menus.foods.forEach((food) => {
    const foodItem = document.createElement('li');
    foodItem.textContent = food.name;
    menuFoods.appendChild(foodItem);
  });

  const menuDrinks = document.getElementById('menu-drinks');
  restaurant.menus.drinks.forEach((drink) => {
    const drinkItem = document.createElement('li');
    drinkItem.textContent = drink.name;
    menuDrinks.appendChild(drinkItem);
  });

  const customerReviews = document.getElementById('customer-reviews');
  restaurant.customerReviews.forEach((review) => {
    const reviewItem = document.createElement('li');
    reviewItem.textContent = `${review.name} - ${review.review}`;
    customerReviews.appendChild(reviewItem);
  });

  const favoriteButton = document.getElementById('favorite-button');
  favoriteButton.addEventListener('click', async function() {
    // Add or remove favorite restaurant from IndexedDB
    //...
  });
}

fetchRestaurantDetail();