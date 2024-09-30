import { Weather } from "../../hooks/useWeather";
import { formatTemperature } from "../../helpers";

type WeatherCardProps = {
  weather: Weather;
};

function WeatherCard({ weather }: WeatherCardProps) {
  return (
    <div>
      <h2>Weather in: {weather.name}</h2>
      <p>Current temperature: {formatTemperature(weather.main.temp)}&deg;C</p>
      <div className="">
        <p>
          Min. temperature:{" "}
          <span>{formatTemperature(weather.main.temp_min)}&deg;C</span>
        </p>
        <p>
          Max. temperature:{" "}
          <span>{formatTemperature(weather.main.temp_max)}&deg;C</span>
        </p>
      </div>
    </div>
  );
}

export default WeatherCard;
