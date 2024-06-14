/* eslint-disable no-undef */
Feature('Liking Movies');

Before(({ I }) => {
  I.amOnPage('/#/like');
});

Scenario('showing empty liked restaurants', ({ I }) => {
  I.seeElement('#query');
  I.see('Tidak ada film untuk ditampilkan', '.restaurant-item__not__found');
});
