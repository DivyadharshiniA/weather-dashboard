function getWeather() {
    const cityInput = document.getElementById('cityInput').value.trim();

    if (cityInput === '') {
        alert('Please enter a city name');
        return;
    }

    // Simulated weather data
    const simulatedData = {
        name: cityInput,
        main: {
            temp: Math.floor(Math.random() * 30) + 15, // Random temperature between 15°C and 45°C
            humidity: Math.floor(Math.random() * 100),  // Random humidity between 0% and 100%
        },
        weather: [
            {
                description: 'Clear sky' // Fixed description
            }
        ],
        wind: {
            speed: Math.floor(Math.random() * 15) + 1 // Random wind speed between 1 m/s and 15 m/s
        }
    };

    // Update the DOM with the simulated weather data
    document.getElementById('City Name').textContent = `Weather in ${simulatedData.name}`;
    document.getElementById('WeatherTemperature').textContent = `Temperature: ${simulatedData.main.temp}°C`;
    document.getElementById('Weatherdescription').textContent = `Weather: ${simulatedData.weather[0].description}`;
    document.getElementById('Humidity').textContent = `Humidity: ${simulatedData.main.humidity}%`;
    document.getElementById('Windspeed').textContent = `Wind Speed: ${simulatedData.wind.speed} m/s`;
}
