import { Showtype } from "../Alltypes";
import { useLoaderData } from "react-router";
import { motion } from "motion/react";
import Show from "./Show";

const containerVariants = {
  hidden: {
    opacity: 0.1,
  },
  visible: {
    opacity: 1,
    transition: { duration: 1 },
  },
};

function ShowList() {
  const data = useLoaderData();

  return (
    <motion.ul
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="3xl:py-15 grid grid-cols-1 gap-3 rounded-4xl bg-gradient-to-r from-slate-900/80 to-slate-700/80 px-4 py-14 xl:grid-cols-2 xl:gap-5 xl:px-8 xl:py-10"
    >
      {data?.description?.map((show: Showtype) => (
        <Show key={show["#IMDB_ID"]} show={show} />
      ))}
    </motion.ul>
  );
}

export default ShowList;
