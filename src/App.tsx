import styles from "./App.module.css";
import Form from "./components/Form/Form";
import WeatherCard from "./components/WeatherCard/WeatherCard";
import { useWeather } from "./hooks/useWeather";

function App() {
  const { fetchWeather, weather, hasWeatherData } = useWeather();
  return (
    <>
      <div className={styles.title}>Weather App</div>

      <div className={styles.container}>
        <Form fetchWeather={fetchWeather} />
        {hasWeatherData && <WeatherCard weather={weather} />}
      </div>
    </>
  );
}

export default App;
