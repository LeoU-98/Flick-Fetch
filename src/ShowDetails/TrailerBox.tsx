import { TrailerBoxProps } from "../Alltypes";
import { motion } from "motion/react";
import { getDurationTime } from "../utils/extractTimeDate";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { IoClose } from "react-icons/io5";

const pathVairants = {
  initial: { pathLength: 0 },
  animated: {
    pathLength: 1,

    transition: {
      delay: 1.5,
      duration: 1,
    },
  },
};

function TrailerBox({ data }: TrailerBoxProps) {
  const [showModal, setShowModal] = useState(false);
  const [showThumbnail, setShowThumbnail] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);

  function handleOpenModal() {
    setShowModal(true);
    setIsPlaying(false);
  }

  function handleCloseModal() {
    setShowModal(false);
    setIsPlaying(true);
  }

  useEffect(() => {
    async function checkVideoExistence() {
      const videoUrl = `https://imdb.iamidiotareyoutoo.com/media/${data?.imdbId}`;
      try {
        const response = await fetch(videoUrl, { method: "HEAD" });
        if (response.ok) {
          setIsPlaying(true);
          setShowThumbnail(false);
          console.log("vidoe exist ");
        }
      } catch (error) {
        console.error("Error checking video:", error);
      }
    }
    checkVideoExistence();
  }, [data?.imdbId]);

  return (
    <div className="relative mx-auto min-h-96 w-full overflow-hidden rounded-2xl text-center md:mx-0 md:h-[480px] lg:w-[820px] xl:w-[800px]">
      <div
        className="absolute top-0 left-0 flex size-full items-center justify-center bg-black/40"
        onClick={handleOpenModal}
      >
        <ReactPlayer
          url={`https://imdb.iamidiotareyoutoo.com/media/${data?.imdbId}`}
          // url="https://www.w3schools.com/html/mov_bbb.mp4"
          playing={isPlaying}
          light={showThumbnail ? data?.short?.trailer?.thumbnailUrl : false}
          muted
          loop
          className="react-player !h-full !w-full max-w-none"
        />

        <div className="bg-opacity-40 absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition hover:opacity-100">
          <motion.svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
            className="size-20 cursor-pointer opacity-80"
            whileHover={{
              scale: 1.2,
            }}
          >
            <motion.path
              strokeWidth={32}
              fill="none"
              strokeMiterlimit="10"
              d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"
              variants={pathVairants}
              initial="initial"
              animate="animated"
            ></motion.path>
            <motion.path
              strokeWidth={1}
              variants={pathVairants}
              initial="initial"
              animate="animated"
              d="m216.32 334.44 114.45-69.14a10.89 10.89 0 0 0 0-18.6l-114.45-69.14a10.78 10.78 0 0 0-16.32 9.31v138.26a10.78 10.78 0 0 0 16.32 9.31z"
            ></motion.path>
          </motion.svg>
        </div>

        <span className="absolute right-4 bottom-3 text-lg">
          {getDurationTime(data?.short?.trailer?.duration, "trailer")}
        </span>
      </div>

      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
          onClick={handleCloseModal}
        >
          <div
            className="relative w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute top-5 right-5 z-20 flex size-8 cursor-pointer items-center justify-center rounded-xl bg-black/70 p-1">
              <IoClose
                className="size-6 text-white duration-300 hover:rotate-180"
                onClick={handleCloseModal}
              />
            </div>

            <ReactPlayer
              url={`https://imdb.iamidiotareyoutoo.com/media/${data?.imdbId}`}
              // url="https://www.w3schools.com/html/mov_bbb.mp4"
              playing
              controls
              width="100%"
              height="auto"
              className="overflow-hidden rounded-2xl"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default TrailerBox;
