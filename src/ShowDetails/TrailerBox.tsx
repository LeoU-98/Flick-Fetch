import { TrailerBoxProps } from "../Alltypes";
import { motion } from "motion/react";
import { getDurationTime } from "../utils/extractTimeDate";

const pathVairants = {
  initial: { pathLength: 0 },
  animate: {
    pathLength: 1,

    transition: {
      delay: 1.5,
      duration: 1,
    },
  },
};

function TrailerBox({ data }: TrailerBoxProps) {
  return (
    <div className="relative mx-auto h-[480px] max-w-[800px] text-center">
      <img
        className="size-full cursor-pointer rounded-lg shadow-lg"
        src={data?.short?.trailer?.thumbnailUrl}
        alt={`${data?.short?.name} Thumbnail`}
        onClick={() => window.open(data?.short?.trailer?.url, "_blank")}
      />
      <button
        className="absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center text-3xl text-white outline-none"
        onClick={() => window.open(data?.short?.trailer?.url, "_blank")}
      >
        <motion.svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 512 512"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
          className="size-20 opacity-80"
          whileHover={{
            scale: 1.2,
          }}
        >
          <motion.path
            fill="none"
            strokeMiterlimit="10"
            strokeWidth="32"
            d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"
            variants={pathVairants}
            initial="initial"
            animate="animate"
          ></motion.path>
          <motion.path
            variants={pathVairants}
            initial="initial"
            animate="animate"
            d="m216.32 334.44 114.45-69.14a10.89 10.89 0 0 0 0-18.6l-114.45-69.14a10.78 10.78 0 0 0-16.32 9.31v138.26a10.78 10.78 0 0 0 16.32 9.31z"
          ></motion.path>
        </motion.svg>
      </button>
      <span className="absolute right-3 bottom-2 text-lg">
        {getDurationTime(data?.short?.trailer?.duration, "trailer")}
      </span>
    </div>
  );
}

export default TrailerBox;
