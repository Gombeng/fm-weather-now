import { create } from "zustand";

interface WeatherState {
  locationResults: any[];
  loadingLocation: boolean;
  location: any | null;
  weather: any | null;
  loadingWeather: boolean;

  setLocationResults: (results: any[]) => void;
  setLoadingLocation: (v: boolean) => void;
  setLocation: (loc: any) => void;
  setWeather: (data: any) => void;
  setLoadingWeather: (v: boolean) => void;
}

export const useWeatherStore = create<WeatherState>((set) => ({
  locationResults: [],
  loadingLocation: false,
  location: {
    current_weather: true,
    temperature_unit: "celsius",
    wind_speed_unit: "mph",
    precipitation_unit: "inch",
    latitude: -6.1818,
    longitude: 106.8223,
    hourly: "temperature_2m",
  },
  weather: null,
  loadingWeather: false,

  setLocationResults: (results) => set({ locationResults: results }),
  setLoadingLocation: (v) => set({ loadingLocation: v }),
  setLocation: (location) => set({ location }),
  setWeather: (weather) => set({ weather }),
  setLoadingWeather: (v) => set({ loadingWeather: v }),
}));
