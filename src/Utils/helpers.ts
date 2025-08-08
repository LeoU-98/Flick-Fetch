export function decodeHtml(html: string) {
  const txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
}

export function formatNumber(number: number): string {
  if (number >= 1_000_000) {
    return (number / 1_000_000)?.toFixed(1)?.replace(/\.0$/, "") + "M";
  } else if (number >= 1_000) {
    return (number / 1_000)?.toFixed(1)?.replace(/\.0$/, "") + "K";
  } else {
    return number?.toString();
  }
}

export function getDurationTime(pattern: string, type: string): string {
  const match = pattern?.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);

  if (match) {
    const hours = match[1] ? parseInt(match[1]) : 0;
    const minutes = match[2] ? parseInt(match[2]) : 0;
    const seconds = match[3] ? parseInt(match[3]) : 0;

    if (type === "show")
      return `${hours ? hours + "h" : ""} ${minutes ? minutes + "m" : ""}`;
    else if (type === "trailer")
      return `${minutes ? minutes + ":" : "0:"}${seconds ? seconds : "00"}`;
    else {
      return `unknow type`;
    }
  } else {
    return "N/A";
  }
}
