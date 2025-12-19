export function formatWeatherDate(isoTime: string): string {
  if (!isoTime) return "";

  return new Date(`${isoTime}Z`).toLocaleDateString("en-US", {
    weekday: "long",
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}
