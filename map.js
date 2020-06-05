//   Задаём стартовую позицию карты
var mymap = L.map("mapid", { crs: L.CRS.EPSG3395 }).setView(
  [66.036036, 60.109374],
  14
);
// Расставляем маркеры
var marker1 = L.marker([66.032838, 60.088255])
  .addTo(mymap)
  .on("click", function openSide() {
    document.getElementById("sideCard").style.width = "250px";
    document.getElementById("markerDescription").innerHTML =
      "Маркер Первый Маркер Первый Маркер Первый Маркер Первый Маркер Первый ";
  });
var marker2 = L.marker([66.030559, 60.093376])
  .addTo(mymap)
  .on("click", function openSide() {
    document.getElementById("sideCard").style.width = "250px";
    document.getElementById("markerDescription").innerHTML =
      "Маркер Второй Маркер Второй Маркер Второй Маркер Второй Маркер Второй ";
  });
// Заполняем карту tile'
L.tileLayer(
  "http://vec{s}.maps.yandex.net/tiles?l=map&v=4.55.2&z={z}&x={x}&y={y}&scale=2&lang=ru_RU",
  {
    subdomains: ["01", "02", "03", "04"],
    attribution: '<a http="yandex.ru" target="_blank">Яндекс</a>',
    reuseTiles: true,
    updateWhenIdle: false,
  }
).addTo(mymap);
function closeSide() {
  document.getElementById("sideCard").style.width = "0";
}
