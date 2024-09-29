import axios from "axios";
import { SearchType } from "../types";

export const useWeather = () => {
  const fetchWeather = async (search: SearchType) => {
    try {
      const appID = import.meta.env.VITE_API_KEY;
      const geoURL = `http://api.openweathermap.org/geo/1.0/direct?q=${search.city},${search.country}&appid=${appID}`;

      const { data } = await axios(geoURL);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    fetchWeather,
  };
};
