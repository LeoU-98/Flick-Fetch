import { MovieListProps } from "../Alltypes";
import Movie from "./Movie";

import { motion } from "motion/react";

const containerVariants = {
  hidden: {
    x: "-100vw",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 2.5,
      opacity: { duration: 2 },
      staggerchildren: 2,
    },
  },

  exit: {
    x: "100vw",
    opacity: 0,
  },
};

function MovieList({ data, isLoading, error }: MovieListProps) {
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error instanceof Error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <motion.ul
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="bg-genoa-500/90 grid grid-cols-2 gap-5 rounded-4xl px-8 py-14"
    >
      {data?.description?.map((movie) => (
        <Movie key={movie["#IMDB_ID"]} movie={movie} />
      ))}
    </motion.ul>
  );
}

export default MovieList;
