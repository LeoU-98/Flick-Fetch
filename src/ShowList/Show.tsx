import { Link } from "react-router";
import { MovieProps } from "../Alltypes";
import { motion } from "motion/react";
import { useState } from "react";

const containerVariants = {
  initial: {
    scale: 1,
  },

  hover: {
    scale: 1.05,
    transition: {
      type: "spring",
      mass: 1,
      damping: 1,
      stiffness: 200,
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
};

function Show({ show }: MovieProps) {
  const {
    "#IMG_POSTER": poster,
    "#TITLE": title,
    "#YEAR": year,
    "#ACTORS": actors,
    "#RANK": rank,
  } = show;
  const [isFocused, setIsFocused] = useState(false);

  console.log(show);

  return (
    <motion.li
      variants={containerVariants}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      initial="initial"
      whileHover="hover"
      animate={isFocused ? containerVariants.hover : containerVariants.initial}
      className="w-full cursor-pointer rounded-4xl bg-black text-white focus:outline-none"
    >
      <Link
        to={`/show/show-details/?tt=${show["#IMDB_ID"]}`}
        className="flex size-full min-h-24 gap-5 p-2 px-10 focus:outline-none"
      >
        {poster ? (
          <img
            src={poster}
            alt={title}
            className="block h-[100px] w-[85px] overflow-hidden rounded-lg"
          />
        ) : (
          <div className="flex h-[100px] w-[85px] items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-red-500 to-black text-center">
            <p className="text-sm text-white">Sorry, No Poster Found</p>
          </div>
        )}

        <div className="flex w-full items-center justify-between">
          <div>
            <p>{title}</p>
            <p>{year}</p>
            <p>{actors}</p>
          </div>
          <div className="text-center">
            <p>Rank</p>
            <p>#{rank}</p>
          </div>
        </div>
      </Link>
    </motion.li>
  );
}
export default Show;
