import styles from "./App.module.css";
import Form from "./components/Form/Form";
import { useWeather } from "./hooks/useWeather";

function App() {
  const { fetchWeather } = useWeather();
  return (
    <>
      <div className={styles.title}>Weather App</div>

      <div className={styles.container}>
        <Form fetchWeather={fetchWeather} />
        <p>2</p>
      </div>
    </>
  );
}

export default App;
