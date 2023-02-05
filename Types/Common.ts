export type Istate = {
  weatherData: [];
  forecastData: IForecast;
};

export interface IWeatherData {
  weatherData: any[];
  chartInfoData: IForecast | null;
  loading: boolean;
  error: string | null;
  fetchWeather: (place: string) => void;
  fetchForecastData: (place: string) => void;
  
}
export type WeatherInfoData = {
  weatherData: any[];
};

export type IProduct = {
  coord: {
    lon: number;
    lat: number;
  };
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    }
  ];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
};

export type IForecast = {
  city: {
    coord: {
      lon: number;
      lat: number;
    };
    id: number;
    name: string;
  };
  list?: List[];
};

export type List = {
  dt: number;
  dt_txt: number;
  main: {
    feels_like: number;
    grnd_level: number;
    humidity: number;
    pressure: number;
    sea_level: number;
    temp: number;
    temp_kf: number;
    temp_max: number;
    temp_min: number;
  };
  weather: [
    {
      description: string;
      icon: string;
      id: number;
      main: string;
    }
  ];
};
