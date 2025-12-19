import { create } from "zustand";

type UnitSystem = "metric" | "imperial";
type TemperatureUnit = "c" | "f";
type WindSpeedUnit = "km/h" | "mph";
type PrecipitationUnit = "mm" | "in";

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
    temprature: "c",
    windSpeed: "km/h",
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
            temprature: "f",
            windSpeed: "mph",
            precipitation: "in",
          },
        };
      }

      return {
        system,
        units: {
          temprature: "c",
          windSpeed: "km/h",
          precipitation: "mm",
        },
      };
    }),
}));

export default useNavbarStore;
