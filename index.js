function getWeather() {
    const city = document.getElementById("city").value;
    const weatherInfo = document.getElementById("weatherInfo");
    const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.4050&current_weather=true`; // A fixed URL for testing

    if (!city) {
        weatherInfo.innerHTML = "<p>Please enter a city name.</p>";
        return;
    }

    // Use Open-Meteo's API to get weather data for a city.
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data && data.current_weather) {
                const { temperature, wind_speed, weathercode } = data.current_weather;
                weatherInfo.innerHTML = `
                    <p><strong>City:</strong> ${city}</p>
                    <p><strong>Temperature:</strong> ${temperature}°C</p>
                    <p><strong>Wind Speed:</strong> ${wind_speed} km/h</p>
                `;
            } else {
                weatherInfo.innerHTML = "<p>Weather data not found for this city.</p>";
            }
        })
        .catch(error => {
            weatherInfo.innerHTML = "<p>Error fetching weather data.</p>";
            console.error("Error fetching data: ", error);
        });
}
