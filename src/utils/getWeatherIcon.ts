import {
  SunnyIcon,
  DrizzleIcon,
  FogIcon,
  OvercastIcon,
  PartlyCloudyIcon,
  RainIcon,
  SnowIcon,
  StormIcon,
} from "./../assets/images";

export function getWeatherIcon(code: number) {
  // Clear sky
  if (code === 0) return SunnyIcon;

  // Mainly clear / partly cloudy
  if ([1, 2].includes(code)) return PartlyCloudyIcon;

  // Overcast
  if (code === 3) return OvercastIcon;

  // Fog
  if ([45, 48].includes(code)) return FogIcon;

  // Drizzle (light–dense)
  if ([51, 53, 55, 56, 57].includes(code)) return DrizzleIcon;

  // Rain / showers / freezing rain
  if ([61, 63, 65, 66, 67, 80, 81, 82].includes(code)) {
    return RainIcon;
  }

  // Snow (all forms)
  if ([71, 73, 75, 77, 85, 86].includes(code)) {
    return SnowIcon;
  }

  // Thunderstorm (with or without hail)
  if ([95, 96, 99].includes(code)) return StormIcon;

  // Safe fallback
  return OvercastIcon;
}
