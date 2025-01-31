import { motion } from "framer-motion";
import notFound from "./assets/notFound.jpg";
import { Link } from "react-router";

const containerVariants = {
  hidden: {
    x: "100vw",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
  },

  exit: {
    x: "100vw",
  },
};

const PageNotFound: React.FC = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      transition={{ type: "spring", visualDuration: 1, bounce: 0.4 }}
      className="flex flex-col items-center justify-center rounded-4xl bg-gradient-to-r from-slate-900/80 to-slate-700/80 px-4 py-10 text-center text-white lg:py-16"
    >
      <img
        src={notFound}
        className="xss:size-80 mb-6 size-70 rounded-4xl lg:size-100"
      />

      <Link
        to="/"
        className="rounded-4xl bg-[#1e1a78] px-8 py-4 duration-300 hover:bg-black"
      >
        Go Home Page
      </Link>
    </motion.div>
  );
};

export default PageNotFound;
