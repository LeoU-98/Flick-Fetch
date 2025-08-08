import { TrailerBoxProps } from "../Alltypes";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { IoClose } from "react-icons/io5";
import { getDurationTime } from "../tempUtils/helpers";

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

  const [videoState, setVideoState] = useState({
    showThumbnail: true,
    isPlaying: false,
    isVideoExist: true,
  });

  function handleOpenModal() {
    setShowModal(true);
    setVideoState({ ...videoState, isPlaying: false });
  }

  function handleCloseModal() {
    setShowModal(false);
    setVideoState({ ...videoState, isPlaying: true });
  }

  useEffect(() => {
    async function checkVideoExistence() {
      const videoUrl = `https://imdb.iamidiotareyoutoo.com/media/${data?.imdbId}`;

      try {
        const response = await fetch(videoUrl, { method: "HEAD" });

        if (response.ok) {
          setVideoState({
            showThumbnail: false,
            isPlaying: true,
            isVideoExist: true,
          });
        }
      } catch (error) {
        console.log("Error Checking The Video : ", error);
        setVideoState({
          ...videoState,
          isVideoExist: false,
        });
      }
    }
    checkVideoExistence();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data?.imdbId]);

  return (
    <div className="relative mx-auto min-h-96 w-full overflow-hidden rounded-2xl text-center md:mx-0 md:h-120 lg:w-205 xl:w-200">
      <div
        className="absolute top-0 left-0 flex size-full items-center justify-center bg-black/40"
        onClick={handleOpenModal}
      >
        {videoState.isVideoExist ? (
          <>
            <ReactPlayer
              url={`https://imdb.iamidiotareyoutoo.com/media/${data?.imdbId}`}
              playing={videoState.isPlaying}
              light={
                videoState.showThumbnail
                  ? data?.short?.trailer?.thumbnailUrl
                  : false
              }
              muted
              loop
              className="react-player !h-full !w-full max-w-none cursor-pointer"
            />

            <div className="bg-opacity-40 absolute inset-0 flex cursor-pointer items-center justify-center bg-black/50 opacity-0 transition hover:opacity-100">
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
          </>
        ) : (
          <div className="relative mx-auto flex h-full min-h-96 w-full items-center justify-center overflow-hidden rounded-2xl bg-black text-center select-none md:mx-0 md:h-[480px] lg:w-[820px] xl:w-[800px]">
            <div className="">
              <svg
                className="mx-auto mb-4 h-10 w-10 animate-pulse text-[#3ea9ff]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 20"
              >
                <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM9 13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm4 .382a1 1 0 0 1-1.447.894L10 13v-2l1.553-1.276a1 1 0 0 1 1.447.894v2.764Z" />
              </svg>
              <p>Trailer Video Not Available</p>
            </div>
          </div>
        )}
        <span className="absolute right-4 bottom-3 text-lg">
          {getDurationTime(data?.short?.trailer?.duration, "trailer")}
        </span>
      </div>

      {showModal && videoState.isVideoExist && (
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
