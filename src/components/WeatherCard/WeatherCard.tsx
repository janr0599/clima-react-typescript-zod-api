import { Weather } from "../../hooks/useWeather";
import { formatTemperature } from "../../helpers";
import styles from "./WeatherCard.module.css";

type WeatherCardProps = {
  weather: Weather;
};

function WeatherCard({ weather }: WeatherCardProps) {
  return (
    <div className={styles.container}>
      <h2>Weather in: {weather.name}</h2>
      <p className={styles.current}>
        {formatTemperature(weather.main.temp)}&deg;C
      </p>
      <div className={styles.temperatures}>
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
