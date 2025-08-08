import TrailerBox from "./TrailerBox";
import RatingBox from "./RatingBox";
import GenreTag from "./GenreTag";
import Person from "./Person";
import { motion } from "motion/react";
import { Link, useLoaderData } from "react-router";
import RateModal from "../UI/RateModal";
import { useEffect, useState } from "react";
import { LiaImdb } from "react-icons/lia";
import { decodeHtml, getDurationTime } from "../Utils/helpers";

const containerVariants = {
  hidden: {
    opacity: 0.1,
  },
  visible: {
    opacity: 1,
    transition: { duration: 1 },
  },
};

function ShowDetails() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [yourRate, setYourRate] = useState(0);
  const data = useLoaderData();

  useEffect(() => {
    if (Number(localStorage.getItem(String(data.imdbId))) !== 0) {
      setYourRate(Number(localStorage.getItem(String(data.imdbId))));
    }
  }, [data.imdbId]);

  return (
    <>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="rounded-4xl bg-gradient-to-r from-slate-900/80 to-slate-700/80 px-5 py-5 text-white"
      >
        <div className="mb-5 flex flex-col items-center gap-3 sm:flex-row sm:gap-3 sm:pl-5">
          <p className="text-4xl">{decodeHtml(data?.short?.name)}</p>
          <p className="text-2xl">
            ({data?.short?.datePublished?.split("-")[0]})
          </p>
          <p className="ml-auto w-full rounded-xl bg-black px-8 py-2 text-center text-lg sm:w-[126px]">
            {getDurationTime(data?.short?.duration, "show")}
          </p>
        </div>

        <div className="mb-3 flex w-full flex-col justify-between gap-5 sm:items-center xl:flex-row">
          <img
            src={data?.short?.image}
            alt={data?.short?.name}
            className="h-120 w-96 rounded-lg"
          />

          <TrailerBox data={data} />
          <RatingBox
            data={data}
            onOpen={() => setIsModalOpen(true)}
            yourRate={yourRate}
          />
        </div>

        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="w-full max-w-[800px] md:w-3/4">
            <ul className="mb-3 flex items-center gap-2">
              {data?.short?.genre?.map((tag: string, index: number) => (
                <GenreTag tag={tag} key={index} />
              ))}
            </ul>
            <div className="flex flex-col">
              <p className="mb-3 text-base">
                {decodeHtml(data?.short?.description)}
              </p>
              <div className="flex flex-col gap-4 xl:flex-row">
                <Person list={data?.short?.director} type="Director" />
                <Person list={data?.short?.actor} type="Stars" />
              </div>
            </div>
          </div>

          <div className="flex w-[90%] items-center justify-center md:w-1/4">
            <Link
              to={data?.short?.url}
              target="_blank"
              className=".glow-on-hover glow-on-hover flex items-center justify-center gap-2 rounded-full px-15 py-4 md:px-10"
            >
              Go to <LiaImdb className="size-8" />
            </Link>
          </div>
        </div>
      </motion.div>

      <RateModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onRate={setYourRate}
        data={data}
        yourRate={yourRate}
      />
    </>
  );
}

export default ShowDetails;
