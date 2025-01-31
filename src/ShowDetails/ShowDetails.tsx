import { getShows } from "../utils/fetchData";
import { getDurationTime } from "../utils/extractTimeDate";
import TrailerBox from "./TrailerBox";
import RatingBox from "./RatingBox";
import GenreTag from "./GenreTag";
import Person from "./Person";
import { motion } from "motion/react";
import { Link, LoaderFunctionArgs, useLoaderData } from "react-router";

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
  const data = useLoaderData();

  console.log(data);

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="rounded-4xl bg-gradient-to-r from-slate-900/80 to-slate-700/80 px-5 py-5 text-white"
    >
      <div className="mb-4">
        <div className="mb-1 flex items-center gap-3 pl-5">
          <p className="text-4xl">{data?.short?.name}</p>
          <p className="text-2xl">
            ({data?.short?.datePublished?.split("-")[0]})
          </p>
          <p className="ml-auto rounded-xl bg-black px-8 py-2 text-lg">
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
            {data?.short?.genre?.map((tag: string, index: number) => (
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
            target="_blank"
            className=".glow-on-hover glow-on-hover rounded-full px-15 py-2"
          >
            Go To IMDB
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default ShowDetails;

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const url = new URL(request.url);
  const query = url.searchParams.get("tt") || "";
  const show = await getShows(query, "tt");

  return show;
};
