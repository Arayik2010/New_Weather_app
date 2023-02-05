import { IProduct, WeatherInfoData } from "@/Types/Common";
import styles from "@/styles/weatherInfo.module.css";

export const WeatherInfo = ({ weatherData }: WeatherInfoData) => {
  return (
    <div className="">
      {weatherData?.map((el: IProduct) => (
        <div key={el.id}>
          <h2 className={styles.textsize}>{el.name}</h2>
          <div className={styles.celsius}>
            <h1 className={styles.numbersize}>{Math.floor(el.main.temp)}</h1>
            <p>o</p>
            <h1 className={styles.numbersize}>C</h1>
          </div>
          <div className={styles.fahrenheit}>
            <h1 className={styles.numbersize}>
              {Math.floor((el.main.temp * 9) / 5 + 32)}
            </h1>
            <p>o</p>
            <h1 className={styles.numbersize}>F</h1>
          </div>
        </div>
      ))}
    </div>
  );
};
