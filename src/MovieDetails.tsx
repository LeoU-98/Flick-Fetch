import { Link, useParams } from "react-router";
import { MovieDetailsProps, QueryData } from "./Alltypes";
import { getShows } from "./utils/fetchData";
import { useQuery } from "@tanstack/react-query";
import { IoPlayCircleOutline } from "react-icons/io5";
import { motion } from "motion/react";
import { getDurationTime } from "./utils/extractTimeDate";

const pathVairants = {
  initial: { pathLength: 0 },
  animate: {
    pathLength: 1,

    transition: {
      duration: 1,
    },
  },
};
function MovieDetails({ selectedMovie }: MovieDetailsProps) {
  const { showId } = useParams();

  console.log(showId);
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

  console.log(data?.short);

  function getActors(arr: { name: string }[]): string[] {
    return arr?.map((actor) => actor?.name);
  }

  return (
    <div className="bg-genoa-500/50 h-[650px] rounded-4xl p-5 text-white">
      <div className="bg-red-500 text-center">
        <p className="mb-2 text-4xl">{data?.short?.name}</p>
        <div className="flex items-center justify-center gap-10">
          <p className="text-sm">{data?.short?.datePublished?.split("-")[0]}</p>
          <p className="text-sm">{data?.short?.contentRating}</p>
          <p className="text-sm">{getDurationTime(data?.short?.duration)}</p>
        </div>
      </div>

      <div className="mb-10 flex w-full justify-between bg-yellow-500">
        <img
          src={data?.short?.image}
          alt={selectedMovie?.["#TITLE"]}
          className="h-[480px] w-96"
        />

        <div className="relative mx-auto h-[480px] max-w-[800px] text-center">
          <img
            className="size-full cursor-pointer rounded-lg shadow-lg"
            src={data?.short?.trailer?.thumbnailUrl}
            alt={`${"fight club"} Thumbnail`}
            onClick={() => window.open(data?.short?.trailer?.url, "_blank")}
          />
          <button
            className="absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center text-3xl text-white outline-none"
            onClick={() => window.open(data?.short?.trailer?.url, "_blank")}
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
              className="size-20 opacity-80"
            >
              <motion.path
                fill="none"
                stroke-miterlimit="10"
                stroke-width="32"
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
            </svg>
          </button>
          <span className="absolute right-3 bottom-2 text-lg">{"1:15"}</span>
        </div>

        {/* /////////////////////////////////////////////////////////////////////////// */}
        {/*         
        <div className="flex flex-col gap-2 bg-green-500 pt-20 pl-8">
          <p className="text-2xl">
            Actors :
            <span className="text-base">
              {...getActors(data?.short?.actor)}
            </span>
          </p>
          <p className="text-2xl">
            Directors :
            <span className="text-base">
              {...getActors(data?.short?.director)}
            </span>
          </p>
          <p className="text-2xl">
            Genre :<span className="text-base">{...data?.short?.genre}</span>
          </p>
          <p className="text-2xl">
            Tags :<span className="text-base">{...data?.short?.keywords}</span>
          </p>

          <p className="text-2xl">
            Descryption :
            <span className="text-base">{data?.short?.description}</span>
          </p>
          <p className="text-2xl">Rating : </p>
        </div> */}
        {/* /////////////////////////////////////////////////////////////////////////// */}
        <div className="bg-violet-500">
          <div>
            {" "}
            <span>IMDB Rating</span>
            <p className="text-base"></p>
            {data?.short?.aggregateRating?.ratingValue}⭐ (
            {data?.short?.aggregateRating?.ratingCount})
          </div>
          <div>
            {" "}
            <span>Your Rating</span>
            <p className="text-base">Your Rating </p>
          </div>
          <div>
            {" "}
            <span>IMDB Rating</span>
            <p className="text-base">{data?.short?.contentRating}</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-10">
        <Link
          to={data?.short?.url}
          className="rounded-full bg-black px-5 py-3 text-white"
        >
          Go To IMDB
        </Link>
      </div>

      {/* <p>{selectedMovie?.["#IMDB_IV"]}</p> */}
    </div>
  );
}

export default MovieDetails;
