import { Link, useParams } from "react-router";
import { QueryData } from "../Alltypes";
import { getShows } from "../utils/fetchData";
import { useQuery } from "@tanstack/react-query";
import { getDurationTime } from "../utils/extractTimeDate";
import TrailerBox from "./TrailerBox";
import RatingBox from "./RatingBox";
import GenreTag from "./GenreTag";
import Person from "./Person";
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
};

function MovieDetails() {
  const { showId } = useParams();

  const { data, isLoading, error } = useQuery<QueryData>({
    queryKey: ["movies", showId],
    queryFn: () => getShows(showId || "", "tt"),
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error instanceof Error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="bg-genoa-950 rounded-4xl px-5 py-5 text-white"
    >
      <div className="text-center">
        <p className="mb-2 text-4xl">{data?.short?.name}</p>
        <div className="flex items-center justify-center gap-4">
          <p className="text-sm">{data?.short?.datePublished?.split("-")[0]}</p>
          <p className="text-sm">{data?.short?.contentRating}</p>
          <p className="text-sm">
            {getDurationTime(data?.short?.duration, "show")}
          </p>
        </div>
      </div>

      <div className="mb-3 flex w-full justify-between">
        <img
          src={data?.short?.image}
          alt={data?.short?.name}
          className="h-[480px] w-96 rounded-lg"
        />
        <TrailerBox data={data} />
        <RatingBox data={data} />
      </div>

      <div className="flex items-center justify-between">
        <div className="w-3/4 max-w-[800px]">
          <ul className="mb-3 flex items-center gap-2">
            {data?.short?.genre?.map((tag, index) => (
              <GenreTag tag={tag} key={index} />
            ))}
          </ul>
          <div>
            <p className="mb-3 text-base">{data?.short?.description}</p>
            <div className="flex gap-4">
              <Person list={data?.short?.director} type="Director" />
              <Person list={data?.short?.actor} type="Stars" />
            </div>
          </div>
        </div>

        <div className="w-1/4">
          <Link
            to={data?.short?.url}
            className="rounded-full bg-black px-5 py-3 text-white"
          >
            Go To IMDB
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default MovieDetails;
