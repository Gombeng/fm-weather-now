import { create } from "zustand";

type UnitSystem = "metric" | "imperial";
type TemperatureUnit = "celsius" | "fahrenheit";
type WindSpeedUnit = "kmh" | "mph";
type PrecipitationUnit = "mm" | "inch";

interface INavbarStore {
  system: UnitSystem;
  units: {
    temprature: TemperatureUnit;
    windSpeed: WindSpeedUnit;
    precipitation: PrecipitationUnit;
  };
  setUnit: (key: string, value: string) => void;
  setSystem: (system: UnitSystem) => void;
}

const useNavbarStore = create<INavbarStore>((set) => ({
  system: "metric",
  units: {
    temprature: "celsius",
    windSpeed: "kmh",
    precipitation: "mm",
  },

  setUnit: (key, value) =>
    set((state) => ({
      units: {
        ...state.units,
        [key]: value,
      },
    })),

  setSystem: (system) =>
    set(() => {
      if (system === "imperial") {
        return {
          system,
          units: {
            temprature: "fahrenheit",
            windSpeed: "mph",
            precipitation: "inch",
          },
        };
      }

      return {
        system,
        units: {
          temprature: "celsius",
          windSpeed: "kmh",
          precipitation: "mm",
        },
      };
    }),
}));

export default useNavbarStore;
