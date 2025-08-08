import { useState } from "react";

export function useWatchList(itemId: string) {
  const [watchListItems, setWatchListItems] = useState(() => {
    try {
      const stored = localStorage.getItem("watchListItems");
      const parsed = JSON.parse(stored || "[]");
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  });

  const isWatched = watchListItems?.includes(itemId);

  function handleAddToWatch(ID: string) {
    if (!watchListItems.includes(ID)) {
      const updatedList = [...watchListItems, ID];
      localStorage.setItem("watchListItems", JSON.stringify(updatedList));
      setWatchListItems(updatedList);
    }
  }

  function handleRemoveFromWatch(ID: string) {
    const updatedList = watchListItems.filter((id: string) => id !== ID);
    localStorage.setItem("watchListItems", JSON.stringify(updatedList));
    setWatchListItems(updatedList);
  }

  return { isWatched, handleAddToWatch, handleRemoveFromWatch };
}
