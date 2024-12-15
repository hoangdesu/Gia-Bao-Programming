const cityName = 'Ha Noi';
const API_KEY = '88a27f54021ec751dbdb0d7000e59f4f';

const endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`;

fetch(endpoint).then(res => res.json()).then(data => {
    console.log(data)
})


// TODO: implement mapbox
// click on location to find city and display info

map.on('click', (e) => {
    // new mapboxgl.Popup()
    // .setLngLat(e.lngLat)
    // .setHTML(e.features[0].properties.name)
    // .addTo(map);
    console.log(e);
    });