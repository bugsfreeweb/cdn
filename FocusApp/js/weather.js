
const API_KEY = "ec5777d7c5c18929d5058e2791238579";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log("You live in", lat, lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}6&lon=${lon}&appid=${API_KEY}&units=metric`;
    // console.log(url);
    fetch(url).then(response => response.json())
    .then(data => {
        const weather_icon = document.querySelector('.weather-icon');
        const weather_main = document.querySelector('.weather-main');

        const id = data.weather[0].id;
        const main = data.weather[0].main; 
        const temp = Math.floor(data.main.temp);
        const city = data.name; 

        // select weather icon
        const icon = document.createElement('img');
        // Select image file
        if (200 <= id && id < 300) {
            icon.src = 'https://bugsfreecdn.netlify.app/FocusApp/img/weather/200.png'
        };
        if (300 <= id && id < 400) {
            icon.src = 'https://bugsfreecdn.netlify.app/FocusApp/img/weather/300.png'
        };
        if (500 <= id && id < 600) {
            icon.src = 'https://bugsfreecdn.netlify.app/FocusApp/img/weather/500.png'
        };
        if (600 <= id && id < 700) {
            icon.src = 'https://bugsfreecdn.netlify.app/FocusApp/img/weather/600.png'
        };
        if (700 <= id && id < 800) {
            icon.src = 'https://bugsfreecdn.netlify.app/FocusApp/img/weather/700.png'
        };
        if (id == 800) {
            icon.src = 'https://bugsfreecdn.netlify.app/FocusApp/img/weather/800.png'
        };
        if ( 800 < id ) {
            icon.src = 'https://bugsfreecdn.netlify.app/FocusApp/img/weather/801.png'
        };
        weather_icon.appendChild(icon);

        // Add weather content
        weather_main.innerText = `${main} / ${temp} ${city}`;
    });
}

function onGeoError(){
    alert("Can't find you. No weather for you.")
}


navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
