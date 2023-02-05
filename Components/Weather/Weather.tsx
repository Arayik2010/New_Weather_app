import { useStore } from "@/Store/store";
import { log } from "console";
import { useEffect, useState } from "react";
import { WeatherInfo } from "../WeatherInfo/WeatherInfo";
import styles from "@/styles/weather.module.css";
import Image from "next/image";

export const Weather = () => {
  const [value, setValue] = useState("");

  const { weatherData, fetchWeather, fetchForecastData } = useStore();

  let placeGetFunc = (place: string) => {
    fetchWeather(place), fetchForecastData(place);
  };

  useEffect(() => {
    setValue("");
  }, [weatherData]);
  return (
    <>
      <div className={styles.home}>
        <div className={styles.homeContainer}>
          <div className={styles.homeForm}>
            <input
              className={styles.homeinput}
              placeholder="Search..."
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <button
              className={styles.button}
              onClick={() => value && placeGetFunc(value)}
            >
              <Image
                className={styles.iconimg}
                src="/images/icon.jpg"
                height={19}
                width={19}
                alt="Your Name"
              />
            </button>
          </div>
          <WeatherInfo weatherData={weatherData} />
        </div>
      </div>
    </>
  );
};
