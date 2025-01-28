export function getDurationTime(pattern: string): string {
  const match = pattern.match(/PT(?:(\d+)H)?(?:(\d+)M)?/);
  if (match) {
    const hours = match[1] ? parseInt(match[1]) : 0;
    const minutes = match[2] ? parseInt(match[2]) : 0;

    return `${hours ? hours + "h" : ""} ${minutes ? minutes + "m" : ""}`;
  } else {
    return "Invalid duration format";
  }
}

export function getYearFromDate(pattern: string): string {}
