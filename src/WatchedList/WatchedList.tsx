import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const WATCHED_LIST_KEY = "watchedMovies"; // Key for local storage

function List() {
  const [watchedMovies, setWatchedMovies] = useState<string[]>([]);

  // Load watched list from local storage when the component mounts
  useEffect(() => {
    const storedList = localStorage.getItem(WATCHED_LIST_KEY);
    if (storedList) {
      setWatchedMovies(JSON.parse(storedList)); // Parse JSON string to array
    }
  }, []);

  // Save watched list to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem(WATCHED_LIST_KEY, JSON.stringify(watchedMovies));
  }, [watchedMovies]);

  // Function to add a movie
  function addToWatched(movie: string) {
    if (!watchedMovies.includes(movie)) {
      setWatchedMovies([...watchedMovies, movie]); // Add new movie
    }
  }

  // Function to remove a movie
  function removeFromWatched(movie: string) {
    setWatchedMovies(watchedMovies.filter((m) => m !== movie));
  }

  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold">Watched List</h2>
      <ul className="mt-2 space-y-2">
        {watchedMovies.map((movie, index) => (
          <li
            key={index}
            className="flex items-center justify-between rounded bg-gray-200 p-2"
          >
            {movie}
            <button
              onClick={() => removeFromWatched(movie)}
              className="rounded bg-red-500 px-2 py-1 text-white"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      <button
        onClick={() => addToWatched("Inception")}
        className="mt-4 rounded bg-blue-500 px-4 py-2 text-white"
      >
        Add Inception
      </button>
    </div>
  );
}

const containerVariants = {
  hidden: {
    x: "-100vw",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
  },
};

const WatchedList: React.FC = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      transition={{ type: "spring", visualDuration: 1, bounce: 0.4 }}
      className="flex flex-col items-center justify-center rounded-4xl bg-gradient-to-r from-slate-900/80 to-slate-700/80 py-10 text-center text-white lg:py-40"
    >
      <List />
    </motion.div>
  );
};

export default WatchedList;
