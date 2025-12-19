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
    latitude: 52.52437,
    longitude: 13.41053,
    name: "Berlin",
    country: "Germany",
  },

  weather: null,
  loadingWeather: false,

  setLocationResults: (results) => set({ locationResults: results }),
  setLoadingLocation: (v) => set({ loadingLocation: v }),
  setLocation: (location) => set({ location }),
  setWeather: (weather) => set({ weather }),
  setLoadingWeather: (v) => set({ loadingWeather: v }),
}));
