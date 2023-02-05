import { useStore } from "@/Store/store";
import { IProduct } from "@/Types/Common";
import Link from "next/link";
import { useCallback, useState } from "react";
import moment from "moment";
import styles from "@/styles/weatherChartInfo.module.css";
import { Chart } from "../Chart/Chart";

export const WeatherChartInfo = () => {
  const { weatherData } = useStore();
  const [detals, setDetals] = useState(false);

  const showItemDetals = () => {
    setDetals((prev) => !prev);
  };
  const timestampToTime = useCallback((timestamp: number) => {
    const time = moment.unix(timestamp).format("HH:mm:ss");
    return time;
  }, []);

  return (
    <div>
      <div className={styles.navcontainer}>
        <Link className={styles.navbarlink} href="/">
          Home
        </Link>
      </div>
      <div className={styles.weatherchart}>
        <div className={styles.weatherdata}>
          {weatherData.map((el: IProduct) => (
            <div className={styles.containerinfodata} key={el.id}>
              <div className={styles.moretempinfo}>
                <h2 className={styles.numbersize}>
                  {el.name}, {el.sys.country}
                </h2>

                <h3>{el.weather[0].main}</h3>
                <div className={styles.tempmax}>
                  <h1 className={styles.numbersize}>
                    Temp-Max: {Math.floor(el.main.temp_max)}
                  </h1>
                  <p>o</p>
                  <h1 className={styles.numbersize}>C</h1>
                </div>
                <div className={styles.tempmin}>
                  <h1 className={styles.numbersize}>
                    Temp-Min: {Math.floor(el.main.temp_min)}
                  </h1>
                  <p>o</p>
                  <h1 className={styles.numbersize}>C</h1>
                </div>
              </div>

              <div className={styles.showdetals}>
                <button
                  className={styles.buttondetals}
                  onClick={showItemDetals}
                >
                  {detals ? "Hide" : "...more"}
                </button>
                {detals && (
                  <div>
                    <p>Wind: {el.wind.speed} m/s</p>
                    <p>Humidity: {el.main.humidity} %</p>
                    <p>Pressure: {el.main.pressure} hPa</p>
                    <div>
                      <p>Sunrise: {timestampToTime(el.sys.sunrise)}</p>
                      <p>Sunset: {timestampToTime(el.sys.sunset)}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className={styles.weatherchartdata}>
          <Chart />
        </div>
      </div>
    </div>
  );
};
