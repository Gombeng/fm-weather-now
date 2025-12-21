export function formatWeatherDate(isoTime: string): string {
  if (!isoTime) return "";

  return new Date(`${isoTime}Z`).toLocaleDateString("en-US", {
    weekday: "long",
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export * from "./getWeatherIcon";

export function formatShortNumber(n: number, decimals = 2) {
  return Number(n.toFixed(decimals)).toString();
}
