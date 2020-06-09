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

// Вешаем открытие боковой карточки с нужным содержанием на маркеры.
marker1.on("click", function () {
  if (sideCard.classList.contains("active")) {
    reopen();
  }
  clickZoom(this);
  openSide();
  document.getElementById("markerDescription").innerHTML =
    "Маркер Первый Маркер Первый Маркер Первый Маркер Первый Маркер Первый ";
});

marker2.on("click", function () {
  sideCard.classList.add("active");
  clickZoom(this);
  openSide();
  document.getElementById("markerDescription").innerHTML =
    "Маркер 22222222 Маркер 22222222 Маркер 22222222 Маркер 22222222 Маркер 22222222 ";
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
  sideCard.style.transform = "translateX(-100%)";
}

function reopen() {
    document.querySelector("#markerWrapper").className = "";
    window.requestAnimationFrame(function(time) {
      window.requestAnimationFrame(function(time) {
        document.querySelector("#markerWrapper").className = "reopen";
      });
    });
  }

function clickZoom(marker) {
  mymap.setView(marker.getLatLng(), zoomLevel);
}

