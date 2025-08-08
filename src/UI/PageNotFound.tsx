import { motion } from "framer-motion";
import { FaHome } from "react-icons/fa";

const containerVariants = {
  hidden: {
    x: "100vw",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
  },
};

const buttonVairants = {
  initial: {
    scale: 1,
  },
  animate: {
    scale: 1.2,
  },
};

const PageNotFound: React.FC = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      transition={{ type: "spring", visualDuration: 1, bounce: 0.4 }}
      className="flex flex-col items-center justify-center rounded-4xl bg-gradient-to-r from-slate-900/80 to-slate-700/80 px-4 py-10 text-center text-white lg:py-16"
    >
      <img
        src="/notFound.jpg"
        className="xss:size-80 mb-6 size-70 rounded-4xl lg:size-100"
      />

      <motion.a
        href="/"
        variants={buttonVairants}
        initial="initial"
        whileHover="animate"
        className="flex cursor-pointer items-center justify-center gap-2 rounded-full bg-black px-4 py-2 text-base"
      >
        <FaHome className="size-8" />
        Go Home
      </motion.a>
    </motion.div>
  );
};

export default PageNotFound;
