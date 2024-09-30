import styles from "./App.module.css";
import Alert from "./components/Alert/Alert";
import Form from "./components/Form/Form";
import Spinner from "./components/Spinner/Spinner";
import WeatherCard from "./components/WeatherCard/WeatherCard";
import { useWeather } from "./hooks/useWeather";

function App() {
  const { fetchWeather, weather, hasWeatherData, loading, notFound } =
    useWeather();
  return (
    <>
      <div className={styles.title}>Weather App</div>

      <div className={styles.container}>
        <Form fetchWeather={fetchWeather} />
        {loading && <Spinner />}
        {hasWeatherData && <WeatherCard weather={weather} />}
        {notFound && <Alert>City not found</Alert>}
      </div>
    </>
  );
}

export default App;
