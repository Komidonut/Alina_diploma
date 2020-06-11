var zoomLevel = 14;

//   Задаём геопозицию нужного участка карты
var mymap = L.map("mapid", { crs: L.CRS.EPSG3395 }).setView(
  [66.036036, 60.109374],
  zoomLevel
);

// Вешаем закрытие боковой карточки на клик по любому месту на карте
mymap.on("click", closeSide);

// Расставляем маркеры
var marker1 = L.marker([66.032838, 60.088255]).addTo(mymap);
var marker2 = L.marker([66.030559, 60.093376]).addTo(mymap);

// Укорачиваем вызов нужного элемента
var sideCard = document.getElementById("sideCard");
var isActive = document.getElementsByClassName("active");
var clicked = "";
// Вешаем открытие боковой карточки с нужным содержанием на маркеры.
marker1.on("click", function () {
  if (clicked !== this.getLatLng()) {
    opacity();
    clickZoom(this);
    openSide();
    setTimeout(function () {
      document.getElementById("markerHeader").innerHTML = "Название Маркера 1";
      document.getElementById("markerDescription").innerHTML =
        "Look, just because I don't be givin' no man a foot massage don't make it right for Marsellus to throw Antwone into a glass motherfuckin' house, fuckin' up the way the nigger talks. Motherfucker do that shit to me, he better paralyze my ass, 'cause I'll kill the motherfucker, know what I'm sayin'?";
      document  ``.getElementById("markerImage").src = "img/marker1.jpg";
    }, 200);
    clicked = this.getLatLng();
  }
});

marker2.on("click", function () {
  if (clicked !== this.getLatLng()) {
    opacity();
    clickZoom(this);
    openSide();
    setTimeout(function () {
      document.getElementById("markerHeader").innerHTML = "Название Маркера 2";
      document.getElementById("markerDescription").innerHTML =
        "Spicy jalapeno bacon ipsum dolor amet exercitation biltong t-bone non pork deserunt. Commodo consectetur enim officia nulla dolore. Pork chop aliqua aute officia. Sint tempor drumstick ribeye burgdoggen, non aliqua laboris tenderloin officia spare ribs corned beef ex pork belly. Qui ball tip fatback, ham velit reprehenderit et ea swine picanha. Swine irure chislic elit, eiusmod ham hock nisi landjaeger.";
      document.getElementById("markerImage").src = "img/marker2.jpg";
    }, 100);
    clicked = this.getLatLng();
  }
});

// Покрываем карту тайлами от Яндекс Карт.
L.tileLayer(
  "http://vec{s}.maps.yandex.net/tiles?l=map&v=4.55.2&z={z}&x={x}&y={y}&scale=2&lang=ru_RU",
  {
    subdomains: ["01", "02", "03", "04"],
    attribution: '<a http=>"yandex.ru" target="_blank">Яндекс</a>',
    reuseTiles: true,
    updateWhenIdle: false,
  }
).addTo(mymap);

// Определяем функции
function openSide() {
  sideCard.style.transform = "translateX(0%)";
}
function closeSide() {
  sideCard.style.transform = "translateX(100%)";
  clicked = "";
}

function opacity() {
  document.querySelector("#markerWrapper").className = "";
  window.requestAnimationFrame(function (time) {
    window.requestAnimationFrame(function (time) {
      document.querySelector("#markerWrapper").className = "opacity";
    });
  });
}

function clickZoom(marker) {
  mymap.setView(marker.getLatLng(), zoomLevel);
}
