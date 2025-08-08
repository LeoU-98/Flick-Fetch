import { FaRegStarHalfStroke, FaStar } from "react-icons/fa6";
import { RatingBoxProps } from "../Alltypes";
import { motion } from "motion/react";
import { formatNumber } from "../tempUtils/helpers";
import { BiAddToQueue } from "react-icons/bi";
import { MdOutlinePlaylistRemove } from "react-icons/md";
import { IoIosPerson } from "react-icons/io";
import { useWatchList } from "../Hooks/useWatchList";

const buttonVairants = {
  initial: {
    scale: 1,
  },
  animate: {
    scale: 1.2,
  },
};

function RatingBox({ data, onOpen, yourRate }: RatingBoxProps) {
  const { isWatched, handleAddToWatch, handleRemoveFromWatch } = useWatchList(
    data?.imdbId,
  );

  return (
    <div className="flex flex-wrap justify-center gap-5 self-stretch rounded-2xl bg-gradient-to-b from-black to-slate-900 to-65% py-4 text-nowrap sm:w-full sm:gap-20 lg:gap-28 xl:w-auto xl:flex-col xl:px-4">
      <div className="flex flex-col items-center gap-1">
        <span className="">IMDB Rating</span>
        <div className="">
          <div className="flex items-center gap-1">
            <FaStar className="text-xl text-amber-400" />
            <p className="text-base">
              {data?.short?.aggregateRating?.ratingValue}/10
            </p>
          </div>
          <div className="flex items-center gap-1">
            <IoIosPerson className="text-xl text-[#cbd5e1]" />
            <p className="text-sm">
              {formatNumber(data?.short?.aggregateRating?.ratingCount)}
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-2">
        <span className="">Your Rating</span>
        <motion.button
          onClick={onOpen}
          variants={buttonVairants}
          initial="initial"
          whileHover="animate"
          className="flex cursor-pointer items-center justify-center gap-2 text-base"
        >
          <FaRegStarHalfStroke className="size-8" />

          {yourRate === 0 ? <span>Rate</span> : <span>{yourRate}</span>}
        </motion.button>
      </div>
      <div className="flex flex-col items-center gap-2">
        <span className="">Watch List</span>
        {isWatched ? (
          <motion.button
            onClick={() => handleRemoveFromWatch(data?.imdbId)}
            variants={buttonVairants}
            initial="initial"
            whileHover="animate"
            className="flex cursor-pointer items-center justify-center gap-1 text-base xl:h-9 xl:w-24"
          >
            <MdOutlinePlaylistRemove className="size-9" /> <span>Remove</span>
          </motion.button>
        ) : (
          <motion.button
            onClick={() => handleAddToWatch(data?.imdbId)}
            variants={buttonVairants}
            initial="initial"
            whileHover="animate"
            className="flex cursor-pointer items-center justify-center gap-2 text-base xl:h-9 xl:w-24"
          >
            <BiAddToQueue className="size-8" /> <span>Add</span>
          </motion.button>
        )}
      </div>
    </div>
  );
}

export default RatingBox;
