import { motion } from "motion/react";

import { getShows } from "../utils/fetchData";
import Movie from "./Show";
import { Showtype } from "../Alltypes";
import { LoaderFunctionArgs, useLoaderData } from "react-router";

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

function ShowList() {
  const data = useLoaderData();

  return (
    <motion.ul
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="bg-genoa-500/90 grid grid-cols-2 gap-5 rounded-4xl px-8 py-14"
    >
      {data?.description?.map((show: Showtype) => (
        <Movie key={show["#IMDB_ID"]} show={show} />
      ))}
    </motion.ul>
  );
}

export default ShowList;

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const url = new URL(request.url);
  const query = url.searchParams.get("q") || "";
  const show = await getShows(query, "q");

  return show;
};
