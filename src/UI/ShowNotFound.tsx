import { motion } from "framer-motion";
import { useSearchParams } from "react-router";

const containerVariants = {
  hidden: {
    y: "-100vw",
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const ShowNotFound: React.FC = () => {
  const [searchParams] = useSearchParams();

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      transition={{ type: "spring", visualDuration: 1, bounce: 0.3 }}
      className="flex flex-col items-center justify-center rounded-4xl bg-gradient-to-r from-slate-900/80 to-slate-700/80 py-10 text-center text-white lg:py-40"
    >
      <NoSearchResultSVG />
      <motion.h1
        className="my-4 text-3xl font-bold sm:text-5xl"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
      >
        {searchParams.get("q") === ""
          ? "Empty Search Field"
          : "No Result Found "}
      </motion.h1>
      <motion.p
        className="mb-6 text-sm text-balance sm:text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        {searchParams.get("q") === ""
          ? "The Search Field is Empty , Please Enter a Valid Show Name 😊"
          : "Sorry , No Shows Found With Such Name 😅 , Try Something else !"}
      </motion.p>
    </motion.div>
  );
};

export default ShowNotFound;

function NoSearchResultSVG() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 120 120"
      className="size-[140px] lg:size-45"
    >
      <rect
        width="15"
        height="62.367"
        x="76.95"
        y="57.266"
        opacity=".35"
        transform="rotate(-45.001 84.45 88.451)"
      ></rect>
      <rect
        width="15"
        height="62.367"
        x="76.95"
        y="53.266"
        fill="#0037ff"
        transform="rotate(-45.001 84.45 84.451)"
      ></rect>
      <circle cx="49" cy="53" r="37" opacity=".35"></circle>
      <circle cx="49" cy="49" r="37" fill="#0075ff"></circle>
      <circle cx="49" cy="53" r="28" opacity=".35"></circle>
      <circle cx="49" cy="49" r="28" fill="#a4e2f1"></circle>
    </svg>
  );
}
