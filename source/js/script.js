const swiper = new Swiper('.swiper', {
  loop: true,
  watchSlidesProgress: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.promo__button-control--next',
    prevEl: '.promo__button-control--prev',
  },
});

const map = L.map('map')
  .setView({
    lat: 59.968516,
    lng: 30.317768
  }, 20);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },)
  .addTo(map);

  const mainPinIcon = L.icon({
    iconUrl: '../img/map-pin.svg',
    iconSize: [38, 50],
    iconAnchor: [19, 50]
  });

  const mainPinMarker = L.marker(
    {
      lat: 59.968516,
      lng: 30.317768
    },
    {
      draggable: false,
      icon: mainPinIcon
    })
    .addTo(map);
