import requests
import os
from dotenv import load_dotenv

load_dotenv(".env")

API_KEY = os.getenv("OPENWEATHER_API_KEY")

url = "https://api.openweathermap.org/data/2.5/forecast"

def get_city(city):
    params = {
        "q" : city,
        "appid" : API_KEY,
        "units" : "metrics"
    }

    res = requests.get(url, params = params)

    print("Status Code: ",res.status_code)
    print("Responce: ",res.json())

    if(res.status_code != 200):
        return none
    
    data = res.json()

    Forecast_Data = []

    for item in data["list"]:
        forecast = {
            "Date_Time" : item["dt_txt"],
            "Temperature" : item["main"]["temp"],
            "Humidity" : item["main"]["humidity"],
            "Feels_like" : item["main"]["feels_like"]
        }
        Forecast_Data.append(forecast)

    return Forecast_Data