import { FaRegStarHalfStroke } from "react-icons/fa6";
import { RatingBoxProps } from "../Alltypes";
import { FaListAlt } from "react-icons/fa";
import { motion } from "motion/react";

const buttonVairants = {
  initial: {
    scale: 1,
  },
  animate: {
    scale: 1.2,
  },
};

function RatingBox({ data }: RatingBoxProps) {
  return (
    <div className="flex flex-wrap justify-center gap-5 self-stretch rounded-2xl bg-gradient-to-b from-black to-slate-900 to-65% py-4 text-nowrap sm:w-full sm:gap-20 lg:gap-28 xl:w-auto xl:flex-col xl:px-4">
      <div className="flex flex-col items-center gap-1">
        <span className="">IMDB Rating</span>
        <p className="text-base"></p>
        {data?.short?.aggregateRating?.ratingValue}⭐
        {formatNumber(data?.short?.aggregateRating?.ratingCount)}
      </div>
      <div className="flex flex-col items-center gap-2">
        <span className="">Your Rating</span>
        <motion.button
          variants={buttonVairants}
          initial="initial"
          whileHover="animate"
          className="flex cursor-pointer items-center justify-center gap-2 text-base"
        >
          <FaRegStarHalfStroke className="size-8" /> <span>Rate</span>
        </motion.button>
      </div>
      <div className="flex flex-col items-center gap-2">
        <span className="">Watched List</span>
        <motion.button
          variants={buttonVairants}
          initial="initial"
          whileHover="animate"
          className="flex cursor-pointer items-center justify-center gap-2 text-base"
        >
          <FaListAlt className="size-8" /> <span>Add</span>
        </motion.button>
      </div>
    </div>
  );
}

export default RatingBox;

function formatNumber(number: number) {
  if (number >= 1000000) {
    return (number / 1000000)?.toFixed(1) + "M";
  } else {
    return number?.toString();
  }
}
