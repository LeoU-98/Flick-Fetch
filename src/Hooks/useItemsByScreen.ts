import { useState, useEffect } from "react";

export function useItemsByScreen() {
  const [count, setCount] = useState(getCount());

  function getCount() {
    const width = window.innerWidth;
    if (width >= 1536) return 10;
    if (width >= 1280) return 8;
    if (width >= 768) return 6;
    if (width >= 640) return 8;
    return 5;
  }

  useEffect(() => {
    const onResize = () => setCount(getCount());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return count;
}
