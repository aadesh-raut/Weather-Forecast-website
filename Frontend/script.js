const cityInput = document.getElementById("cityInput");

const searchButton = document.getElementById("searchButton");

const weatherResult = document.getElementById("weatherResult");

searchButton.addEventListener("click",async function(){

    const city = cityInput.value.trim();

    if (city == "")
    {
        weatherResult.innerText = "Please enter a city name";
        return;
    }

    weatherResult.innerText = "Fetching weather data......";

    try {
        const res = await fetch(`http://127.0.0.1:5000/weather?city=${encodeURIComponent(city)}`);

        const data = await res.json();

        if(!res.ok){
            weatherResult.innerText = data.error;
            return;
        }

        const forecast = data.forecast[0];

        weatherResult.innerText = 
        "City: " + data.city +
        "\nDate and Time: " + forecast.Date_Time +
        "\nTemperature: " + forecast.Temperature +
        "\nFeels Like: " + forecast.Feels_Like +
        "\nHumidity: " + forecast.Humidity + "%" +
        "\nWeather: " + forecast.Description;

    }
    catch(error){
        weatherResult.innerText = "Unable to connect to the flask server. ";
        console.log(error);
    }
});