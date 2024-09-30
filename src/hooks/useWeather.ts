import axios from "axios";
import { z } from "zod";
import { SearchType } from "../types";
import { useMemo, useState } from "react";

// TYPE GUARD OR ASSERTION

// const isWeatherResponse = (weather: unknown): weather is Weather => {
//   return (
//     Boolean(weather) &&
//     typeof weather === "object" &&
//     typeof (weather as Weather).name === "string" &&
//     typeof (weather as Weather).main.temp === "number" &&
//     typeof (weather as Weather).main.temp_max === "number" &&
//     typeof (weather as Weather).main.temp_min === "number"
//   );
// };

// ZOD

const WeatherSchema = z.object({
  name: z.string(),
  main: z.object({
    temp: z.number(),
    temp_max: z.number(),
    temp_min: z.number(),
  }),
});

export type Weather = z.infer<typeof WeatherSchema>;

export const useWeather = () => {
  const [weather, setWeather] = useState<Weather>({
    name: "",
    main: {
      temp: 0,
      temp_max: 0,
      temp_min: 0,
    },
  });

  const fetchWeather = async (search: SearchType) => {
    try {
      const appID = import.meta.env.VITE_API_KEY;
      const geoUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${search.city},${search.country}&appid=${appID}`;

      const { data } = await axios(geoUrl);
      const lat = data[0].lat;
      const lon = data[0].lon;

      const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appID}`;

      // Castear el Type

      // const { data: weatherResult } = await axios<Weather>(weatherUrl);
      // console.log(weatherResult.name);
      // console.log(weatherResult.main.temp);

      // TYPE GUARD OR ASSERTION

      // const result = isWeatherResponse(weatherResult);
      // if (result) {
      //   console.log(weatherResult.name);
      //   console.log(weatherResult.main.temp);
      // } else {
      //   console.log("incorrectlt formed schema");
      // }

      // ZOD

      const { data: weatherResult } = await axios(weatherUrl);
      const result = WeatherSchema.safeParse(weatherResult);
      if (result.success) {
        setWeather(result.data);
      } else {
        console.log("incorrectly formed response");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const hasWeatherData = useMemo(() => weather.name, [weather]);

  return {
    fetchWeather,
    weather,
    hasWeatherData,
  };
};
