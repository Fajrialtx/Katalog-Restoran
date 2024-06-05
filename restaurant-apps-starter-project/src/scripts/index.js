import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';

const menu = document.querySelector('#menu');
const hero = document.querySelector('.hero');
const main = document.querySelector('main');
const drawer = document.querySelector('#drawer');

menu.addEventListener('click', function (event) {
  drawer.classList.toggle('open');
  event.stopPropagation();
});

hero.addEventListener('click', function () {
  drawer.classList.remove('open');
});

main.addEventListener('click', function () {
  drawer.classList.remove('open');
});
console.log('Hello Coders! :)');

const postsData = document.getElementById('posts');

async function fetchData() {
  const response = await fetch('https://restaurant-api.dicoding.dev/list');
  const data = await response.json();
  renderPosts(data);
}

function renderPosts(data) {
  data.restaurants.forEach((restaurant) => {
    // Buat elemen article
    const postItem = document.createElement('article');
    postItem.classList.add('post-item');

    // Buat elemen gambar
    const thumbnail = document.createElement('img');
    thumbnail.classList.add('post-item__thumbnail');
    thumbnail.src = `https://restaurant-api.dicoding.dev/images/small/${restaurant.pictureId}`;
    thumbnail.alt = restaurant.name;
    postItem.appendChild(thumbnail);

    // Buat elemen konten
    const content = document.createElement('div');
    content.classList.add('post-item__content');

    // Tambahkan tanggal dan penulis
    const dateAuthor = document.createElement('p');
    dateAuthor.classList.add('post-item__date');
    dateAuthor.innerHTML = `About 10 Hours Ago By <a href="#" class="post-item__date__author">Dicoding Intern</a>`;
    content.appendChild(dateAuthor);

    // tambahkan kota
    const city = document.createElement('h3');
    city.classList.add('city');
    city.innerHTML = 'City :  ' + restaurant.city;
    content.appendChild(city);

    // tambahkan rating
    const rating = document.createElement('h2');
    rating.classList.add('rating');
    rating.innerHTML = 'Rating :  ' + restaurant.rating;
    content.appendChild(rating);

    // Tambahkan judul
    const title = document.createElement('h1');
    title.classList.add('post-item__title');
    const restaurantId = restaurant.id;
    const titleLink = document.createElement('a');
    titleLink.href = `${restaurantId}`;
    titleLink.innerHTML = restaurant.name;
    title.appendChild(titleLink);
    content.appendChild(title);

    // Tambahkan deskripsi
    const description = document.createElement('p');
    description.classList.add('post-item__description');
    description.innerHTML = restaurant.description;
    content.appendChild(description);


    // Masukkan konten ke dalam elemen artikel
    postItem.appendChild(content);

    // Masukkan elemen artikel ke dalam container
    postsData.appendChild(postItem);
  });
}

fetchData();