import { Link } from "react-router";
import { motion } from "motion/react";
import { ShowProps } from "../Alltypes";

const containerVariants = {
  initial: {
    scale: 1,
  },

  hovered: {
    scale: 1.06,
    transition: {
      type: "spring",
    },
  },
};

function Show({ show }: ShowProps) {
  const {
    "#IMG_POSTER": poster,
    "#TITLE": title,
    "#YEAR": year,
    "#ACTORS": actors,
    "#RANK": rank,
  } = show;

  return (
    <motion.li
      variants={containerVariants}
      initial="initial"
      whileHover="hovered"
      className="w-full cursor-pointer rounded-4xl bg-black text-white focus:outline-none"
    >
      <Link
        to={`/show/show-details/?tt=${show["#IMDB_ID"]}`}
        className="grid size-full min-h-24 grid-cols-[90px_1fr_1fr] items-center gap-5 p-2 px-10 ring-1 ring-transparent focus:ring-white focus:outline-none sm:grid-cols-[90px_auto_90px]"
      >
        {poster ? (
          <img
            src={poster}
            alt={title}
            className="col-start-1 row-start-1 block h-[100px] w-[85px] overflow-hidden rounded-lg"
          />
        ) : (
          <div className="col-start-1 row-start-1 flex h-[100px] w-[85px] items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-red-500 to-black text-center">
            <p className="text-sm text-white">Sorry, No Poster Found</p>
          </div>
        )}

        <div className="col-span-2 col-start-1 row-start-2 text-nowrap sm:col-span-1 sm:col-start-2 sm:row-start-1">
          <p>{title}</p>
          <p>{year}</p>
          <p>{actors}</p>
        </div>
        <div className="col-span-2 col-start-2 row-start-1 text-center sm:col-span-1 sm:col-start-3">
          <p>Rank</p>
          <p>#{rank}</p>
        </div>
      </Link>
    </motion.li>
  );
}

export default Show;
