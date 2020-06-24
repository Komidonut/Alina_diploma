var zoomLevel = 15;

// Задаём стартовую геопозицию карты
var mymap = L.map("mapid", { crs: L.CRS.EPSG3395 }).setView(
  [66.039790, 60.131689],
  zoomLevel
);

// Удаляем зумовые "+-" иконки 
mymap.zoomControl.remove();

// Вешаем закрытие боковой карточки на клик по любому месту на карте
mymap.on("click", function(e){
  if (clicked != "") {
    mymap.flyTo(e.latlng, zoomLevel, {
      animate: true,
      duration: 0.4
    });
    closeSide();
  }
});

// Укорачиваем вызов нужного DOM элемента
const mapid = document.getElementById("mapid");
const sideCard = document.getElementById("sideCard");
const markerHeader = document.getElementById("markerHeader");
const markerDescription = document.getElementById("markerDescription");
const markerImageWrapper = document.getElementById("markerImageWrapper");
const markerImage = document.getElementById("markerImage");
const markerButtonWrapper = document.getElementById("markerButtonWrapper");
const markerButton = document.getElementById("markerButton");
const markerCloseWrapper = document.getElementById("markerCloseWrapper");
const element = document.querySelector("#clouds");
const markerScroll = document.querySelector("#markerScroll");


sideCard.onscroll = function() {
  markerScroll.style.opacity=(5 - Math.floor(sideCard.scrollTop/((sideCard.scrollHeight-document.body.scrollHeight)/10)))/10;
}
/*
on scroll
  opacity of icon = (10 - Math.floor(sideCard.scrollTop/((sideCard.scrollHeight-document.body.scrollHeight)/10)))/10
*/


// Привязываем параллакс облаков к движению мыши
document.addEventListener("mousemove", parallax);



    // Задаём начальную позицию и степень подвижности облаков. Да, я здесь много чего правил на глазок 
    function parallax(e) {
        let _w = window.innerWidth/2;
        let _h = window.innerHeight/4;
        let _mouseX = e.clientX;
        let _mouseY = e.clientY;
        // 3 левых
        let _depth1 = `${0 - 10 - (_mouseX - _w) * 0.01}% ${0 -23 - (_mouseY - _h) * 0.001}%`;
        let _depth2 = `${0 - 10 - (_mouseX - _w) * 0.002}% ${0 -23 - (_mouseY - _h) * 0.03}%`;
        let _depth3 = `${0 - 10 - (_mouseX - _w) * 0.006}% ${0 -23 - (_mouseY - _h) * 0.009}%`;
        // 3 средних
        let _depth4 = `${20 - (_mouseX - _w) * 0.004}% ${130 - (_mouseY - _h) * 0.01}%`;
        let _depth5 = `${40 - (_mouseX - _w) * 0.02}% ${90 - (_mouseY - _h) * 0.02}%`;
        let _depth6 = `${20 - (_mouseX - _w) * 0.007}% ${130 - (_mouseY - _h) * 0.06}%`;
        // 3 правых
        let _depth7 = `${120 - (_mouseX - _w) * 0.01}% ${60 - (_mouseY - _h) * 0.2}%`;
        let _depth8 = `${120 - (_mouseX - _w) * 0.002}% ${60 - (_mouseY - _h) * 0.04}%`;
        let _depth9 = `${120 - (_mouseX - _w) * 0.006}% ${60 - (_mouseY - _h) * 0.08}%`;
        let x = `${_depth9},${_depth8},${_depth7},${_depth6},${_depth5},${_depth4},${_depth3}, ${_depth2}, ${_depth1}`;
        element.style.backgroundPosition = x;
    }


//Устанавливаем связь между маркерами и их иконками
var marker1Icon = L.icon({
  iconUrl: 'img/icons/marker1Vavil.svg',
  iconSize:     [38, 95], // size of the icon
  iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
  // popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

var marker2Aero = L.icon({
  iconUrl: 'img/icons/marker2Aero.svg',
  iconSize:     [38, 95], // size of the icon
  iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
  // popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

var marker3DomFizkult = L.icon({
  iconUrl: 'img/icons/marker3DomFizkult.svg',
  iconSize:     [38, 95], // size of the icon
  iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
  // popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

var marker4Klyatva = L.icon({
  iconUrl: 'img/icons/marker4Klyatva.svg',
  iconSize:     [38, 95], // size of the icon
  iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
  // popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

var marker5Lenin = L.icon({
  iconUrl: 'img/icons/marker5Lenin.svg',
  iconSize:     [38, 95], // size of the icon
  iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
  // popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

var marker6DomKult = L.icon({
  iconUrl: 'img/icons/marker6DomKult.svg',
  iconSize:     [38, 95], // size of the icon
  iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
  // popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

// Задаём координаты маркеров
var marker1Vavil = L.marker([66.041081, 60.135448], {icon: marker1Icon}).addTo(mymap);
var marker2Aero = L.marker([66.053127, 60.11825], {icon: marker2Aero}).addTo(mymap);
var marker3DomFizkult = L.marker([66.040552, 60.139855], {icon: marker3DomFizkult}).addTo(mymap);
var marker4Klyatva = L.marker([66.040479, 60.131207], {icon: marker4Klyatva}).addTo(mymap);
var marker5Lenin = L.marker([66.037283, 60.115107], {icon: marker5Lenin}).addTo(mymap);
var marker6DomKult = L.marker([66.040217, 60.149658], {icon: marker6DomKult}).addTo(mymap);


var images = [];
var buttonLabel = ["⟵ В прошлое", "В настоящее ⟶"];
var buttonAlignment = ["flex-start", "flex-end"];
var headerFontFamily = ["", ""];
var timeState = 1;
var isActive = document.getElementsByClassName("active");
var clicked = "";

// Вешаем открытие боковой карточки с нужным содержанием на маркеры.
marker1Vavil.on("click", function () {
  if (clicked !== this.getLatLng()) {
    sideCard.classList.remove("sideCardOld");
    markerImageWrapper.classList.remove("markerImageWrapperOld");
    sideCard.style.backgroundColor = "white";
    opacity();
    clickZoom(this);
    openSide();
    setTimeout(function () {
      timeState = 0;
      images = ["img/photos/marker1Vavil.jpg", "img/photos/marker1Vavil_old.jpg"];
      markerImage.src = images[0];
      markerHeader.innerHTML = "Вавилонская Башня";

      markerDescription.style.textOverflow = "ellipsis;";
      markerDescription.innerHTML =
        "<p>Трудно представить эмблему Инты, как и сам северный город без <strong>водонапорной башни</strong>. Она находится на артезианской скважине и строилась для водоснабжения населенного пункта. Башня была возведена за два строительных сезона, в 1953 – 1954 годах. В работе участвовали <em>11 с половиной тысяч человек</em> – заключенные интинских лагерей. Среди них были русские, украинцы, немцы, евреи, литовцы, эстонцы, венгры. Между собой он называли башню <strong>«вавилонской»</strong>.</p><br><p>Одним из авторов сооружения был швед по национальности – <em>Артур-Густав Тамвелиус</em>. Он же заключённый интинских лагерей, приговорённый по обвинению в шпионаже, а через десятилетия посмертно реабилитированный.</p><br><p>Утилитарную функцию башня утратила. С 2014 года здесь размещена экспозиция «Музея истории политических репрессий».</p><br><p><strong>СПРАВОЧНО</strong>: Общая высота башни со звездой 54,4 метра – это <em>около 20 этажей</em>. Фундамент постройки залегает <em>на глубине 5 метров</em>.</p>";
      markerButton.innerHTML = buttonLabel[0];
    }, 100);
    clicked = this.getLatLng();
  }
});

marker2Aero.on("click", function () {
  if (clicked !== this.getLatLng()) {
    sideCard.classList.remove("sideCardOld");
    markerImageWrapper.classList.remove("markerImageWrapperOld");
    sideCard.style.backgroundColor = "white";
    timeState = 0;
    opacity();
    clickZoom(this);
    openSide();
    setTimeout(function () {
      images = ["img/photos/marker2Aero.jpg", "img/photos/marker2Aero_old.jpg"];
      markerImage.src = images[0];
      markerHeader.innerHTML = "Аэропорт";
      markerDescription.innerHTML =
        "<p>Первые прямые рейсы из Инты в столицу Коми – Сыктывкар стали выполняться только в 1961 году – двумя самолетами АН-2. В 1963 году в Инту стали летать ИЛ-14 и ЛИ-2. Эти самолёты с момента открытия авиасообщения перевезли за первые десять лет <em>27 тысяч человек</em>. Таким образом, в те годы <strong>каждый</strong> взрослый интинец прибегал к услугам советского аэрофлота.</p><br><p>55 лет назад — 16 июня 1975 года открыта авиалиния Инта – Москва.</p><br><p>В 2013 году, аэропорт получил «второе дыхание» и смог принимать самолёты малой авиации L-410, рассчитанные на 19 пассажиров.</p>";
      markerButton.innerHTML = buttonLabel[0];
    }, 100);
    clicked = this.getLatLng();
  }
});

marker3DomFizkult.on("click", function () {
  if (clicked !== this.getLatLng()) {
    sideCard.classList.remove("sideCardOld");
    markerImageWrapper.classList.remove("markerImageWrapperOld");
    sideCard.style.backgroundColor = "white";
    timeState = 0;
    opacity();
    clickZoom(this);
    openSide();
    setTimeout(function () {
      images = ["img/photos/marker3DomFizkult.jpg", "img/photos/marker3DomFizkult_old.jpg"];
      markerImage.src = images[0];
      markerHeader.innerHTML = "Дом физкультурника";
      markerDescription.innerHTML =
        "<p>В Инте в 1946 году начала работать детская спортивная школа, а через год, на улице Кирова построен комплекс, состоящий из футбольного поля (в настоящее время стадион детско-юношеской школы «Юность») и спортивного зала с плавательным бассейном. Здание Дома физкультурника было возведено на фундаменте лагерной столовой, в 1947 году. В здании спортзала работал игровой зал, наверху которого размещались трибуны для зрителей. В бассейне использовалась <em>вода из артезианской скважины</em>, подогреваемая бойлером.</p><br><p> Плавательный бассейн в Инте был <strong>первым, построенным в Коми,</strong> на тот момент. Здание спортивного комплекса, называемое в то время «Дом физкультурника», было очень интересным в архитектурном отношении. Его вход, в центре и по бокам, <em>украшали гипсовые статуи спортсменов</em>, подчеркивая основное предназначение здания. А мощный портал <em>поддерживали оштукатуренные деревянные колонны</em>. Фотография сооружения в своё время была напечатана вжурнале «Советский Союз», который предназначался в основном для зарубежных читателей.</p><br><p>Деревянный спорткомплекс сгорел в 1967 году. Позднее, на его месте возвели бассейн для детей «Дельфин».</p>";
      markerButton.innerHTML = buttonLabel[0];
    }, 100);
    clicked = this.getLatLng();
  }
});

marker4Klyatva.on("click", function () {
  if (clicked !== this.getLatLng()) {
    sideCard.classList.remove("sideCardOld");
    markerImageWrapper.classList.remove("markerImageWrapperOld");
    sideCard.style.backgroundColor = "white";
    timeState = 0;
    opacity();
    clickZoom(this);
    openSide();
    setTimeout(function () {
      images = ["img/photos/marker4Klyatva.jpg", "img/photos/marker4Klyatva_old.jpg"];
      markerImage.src = images[0];
      markerHeader.innerHTML = "Клятва";
      markerDescription.innerHTML =
        "<p>Мемориальная композиция в память погибших северян в годы Великой Отечественной войны – «Клятва». Первый камень на месте памятника был заложен <strong>в честь тридцатилетия Победы</strong> – <em>9 мая 1975 года</em>. Высота скульптурной группы составляет <em>3 метра 80 сантиметров</em>, а общая высота памятника – <em>7 метров</em>. Скульптор Ф. Н. Бондарь и архитектор А. Клейн.</p><br><p><strong>Первое</strong> упоминание о памятнике –<em> документ «Об увековечении памяти интинцев, погибших на фронтах Великой Отечественной войны»</em>, от 13 февраля 1970 года. В нём интинские власти просят разрешить за счёт городского бюджета к 50-летию Коми АССР, в 1971 году, соорудить обелиск в память погибших интинцев в годы Великой Отечественной войны. Стоимость памятника тогда оценивалась в немалую сумму –<em>от 10 до 15 тысяч рублей</em>.</p><br><p>В юбилейный для республики год, обелиск построить <strong>не успели</strong>. Мемориал создавался <em>в течение 15 лет</em>. Впоследствии был насыпан холм и установлен постамент. Торжественное открытие памятника, когда были возведены скульптурная группа из двух солдат и два пилона из монолитного железобетона, с закреплённым орденом Отечественной войны, произошло 6 ноября 1977 года.</p><br><p>К 40-летию Победы, 9 мая 1985 года были открыты<em>7 мемориальных плит</em> с фамилиями<em>162 погибших на войне интинцев</em>, а позже добавлены фамилии ещёчетырёх бойцов, не вернувшихся из Афганистана.</p><br><p>Военкоматами Коми АССР в годы войны было призвано <em>152 483 человека</em>, из них <em>54 935</em> – Кожвинским райвоенкоматом. Это <strong>самый большой призыв в республике</strong>, так как территория района включала в себя нынешние Печорский, Интинский, Воркутинский, Вуктыльский, Сосногорский районы. Из общего числа призванных абсолютное большинство составляли <em>заключённые</em> из Печоржелдорлага, Воркутлага, Инталага, Севжелдорлага – на территории Кожвинского района были дислоцированы подразделения этих лагерей.</p>";
      markerButton.innerHTML = buttonLabel[0];
    }, 100);
    clicked = this.getLatLng();
  }
});

marker5Lenin.on("click", function () {
  if (clicked !== this.getLatLng()) {
    sideCard.classList.remove("sideCardOld");
    markerImageWrapper.classList.remove("markerImageWrapperOld");
    sideCard.style.backgroundColor = "white";
    timeState = 0;
    opacity();
    clickZoom(this);
    openSide();
    setTimeout(function () {
      images = ["img/photos/marker5Lenin.jpg", "img/photos/marker5Lenin_old.jpg"];
      markerImage.src = images[0];
      markerHeader.innerHTML = "Ленин";
      markerDescription.innerHTML =
        "<p>Монумент Владимиру Ленину, вначале был открыт <strong>6 ноября 1959 года</strong> в сквере Театральный, между улицами Горной (Кулешова) и Театральной (Халеева), за Домом культуры угольщиков. Фигура Ленина была изготовлена в полный рост <em>из платинированной меди</em>, <em>высотой 3 метра 20 сантиметров</em>. Авторы памятника: московский скульптор Самуил Осипович Махтин и архитектор Владимир Кузьмич Доброноженко.</p><br><p> Известно, что памятники Ленину часто являлись «серийной продукцией» и изготовлялись фабричным способом в Московской области. По данным, приводимым газетой «Московский комсомолец», на 2003 год в России насчитывалось около <em>1 800 памятников</em> Ленину и <em>до 20 000 бюстов</em>. Во многих городах его скульптуры возвышаются на центральных площадях.</p><br><p> Почти через 23 года, 29 сентября 1982 года, Совет Министров Коми АССР постановил присвоить центральной городской площади Инты имя Владимира Ильича Ленина. Долгое время горожане её называли <strong>«новой»</strong>, но тогда она получила другое и уже официальное название: <strong>«Площадь имени В. И. Ленина»</strong>. </p><br><p>Скульптуру В.И. Ленина из сквера за Домом культуры перенесли на новый пьедестал, в центр Инты. Открытие памятника произошло <strong>7 октября 1982 года</strong> – в день Конституции СССР.";
      markerButton.innerHTML = buttonLabel[0];
    }, 100);
    clicked = this.getLatLng();
  }
});

marker6DomKult.on("click", function () {
  if (clicked !== this.getLatLng()) {
    sideCard.classList.remove("sideCardOld");
    markerImageWrapper.classList.remove("markerImageWrapperOld");
    sideCard.style.backgroundColor = "white";
    timeState = 0;
    opacity();
    clickZoom(this);
    openSide();
    setTimeout(function () {
      images = ["img/photos/marker6DomKult.jpg", "img/photos/marker6DomKult_old.jpg"];
      markerImage.src = images[0];
      markerHeader.innerHTML = "Дом Культуры";
      markerDescription.innerHTML =
        "<p>При Доме культуры шахтеров открыт народный драматический театр, первым руководителем которого был В. С. Миронов. Коллективом поставлено <strong>более 20 спектаклей</strong>.</p><br><p>Первое деревянное одноэтажное здание клуба в Инте построили в 1944 году. В 1952-1953 годах его реконструировали. А окончательный, современный вид Дом культуры шахтёров получил в 1965 году. Убрали колонны, но старый зрительный зал с его художественной лепкой был сохранён полностью.</p><br><p>Здание получило впечавпечатляющий фасад, похожий на <em>гигантский выпуклый телеэкран</em> из стекла и стали, так называемую «линзу». За образец был взят фасад ДК Московского автозавода им. Лихачёва. В России только <strong>два подобных сооружения.</strong></p>";
      markerButton.innerHTML = buttonLabel[0];
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
  sideCard.classList.remove("sideCardOld");
  markerCloseWrapper.classList.remove("markerCloseWrapperOld");
  markerImageWrapper.classList.remove("markerImageWrapperOld");
  sideCard.style.backgroundColor = "white";
  markerCloseWrapper.style.backgroundColor = "white";
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
  mymap.setView(marker.getLatLng(), zoomLevel+3);
}

function changeTime() {
  timeState = (timeState + 1) % 2;
  // opacity();
  if (timeState === 1) {
    sideCard.classList.add("sideCardOld");
    sideCard.style.backgroundColor = "rgb(240, 240, 216)";
    markerCloseWrapper.style.backgroundColor = "rgb(240, 240, 216)";
    markerImageWrapper.classList.add("markerImageWrapperOld");
    markerCloseWrapper.classList.add("markerCloseWrapperOld");
  } else {
    sideCard.classList.remove("sideCardOld");
    sideCard.style.backgroundColor = "white";
    markerCloseWrapper.style.backgroundColor = "white";
    markerImageWrapper.classList.remove("markerImageWrapperOld");
    markerCloseWrapper.classList.remove("markerCloseWrapperOld");
  }
  // markerButtonWrapper.style.justifyContent=buttonAlignment[timeState];
  markerButton.innerHTML = buttonLabel[timeState];
  markerImage.src = images[timeState];
}
