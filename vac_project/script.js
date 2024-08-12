document.getElementById('get-weather').addEventListener('click', function() {
    const city = document.getElementById('city-input').value;
    const apiKey = '8f3ae138ee27979732f0e51f79d99af2'; // Replace with your OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('City not found');
            }
            return response.json();
        })
        .then(data => {
            const temperature = data.main.temp;
            const description = data.weather[0].description;
            const icon = data.weather[0].icon;
            const imageUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;

            const weatherInfo = `
                <h2>The temperature in ${city} is: ${temperature}°C</h2>
                <h3>Weather description: ${description}</h3>
                <img src="${imageUrl}" alt="Weather icon">
            `;

            document.getElementById('weather-info').innerHTML = weatherInfo;
        })
        .catch(error => {
            document.getElementById('weather-info').innerHTML = `<h3>${error.message}</h3>`;
        });
});
