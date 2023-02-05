import { weatherApi } from "@/pages/api/ApiInstance";
import { IWeatherData } from "@/Types/Common";
import { create } from "zustand";

export const useStore = create<IWeatherData>()((set) => ({
  weatherData: [],
  chartInfoData: null,
  loading: false,
  error: null,

  fetchWeather: async (place) => {
    set({ loading: true });
    try {
      const response = await fetch(
        weatherApi.baseWeatherUrl +
          `/weather?q=${place}&units=metric&appid=2ffaf26e758681e3ac2117754a0190cd`
      );

      if (!response.ok) throw new Error();
      const responseData = await response.json();

      set((state) => {
        return { weatherData: [...state.weatherData, responseData] };
      });
    } catch (error: any) {
      alert("No correct place name");
      set({ error: error.message });
    } finally {
      set({ loading: false });
    }
  },
  fetchForecastData: async (place) => {
    set({ loading: true });
    try {
      const responseForecast = await fetch(
        weatherApi.baseWeatherUrl +
          `/forecast?q=${place}&units=metric&appid=2ffaf26e758681e3ac2117754a0190cd`
      );
      const responseForecastData = await responseForecast.json();

      set({ chartInfoData: responseForecastData });
    } catch (error) {
    } finally {
      set({ loading: false });
    }
  },
}));
