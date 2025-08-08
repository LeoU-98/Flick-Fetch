import { motion } from "framer-motion";

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

const ServerDown: React.FC = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      transition={{ type: "spring", visualDuration: 1, bounce: 0.3 }}
      className="flex flex-col items-center justify-center rounded-4xl bg-gradient-to-r from-slate-900/80 to-slate-700/80 py-10 text-center text-white lg:py-32"
    >
      <img
        src="/ServerDown.jpg"
        className="size-60 overflow-hidden rounded-lg lg:size-70"
      />

      <motion.h1
        className="my-4 text-3xl font-bold sm:text-5xl"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
      >
        Server is Down
      </motion.h1>
      <motion.p
        className="mb-6 text-sm text-balance sm:text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Sorry, The server is down right now , Try again later
      </motion.p>
    </motion.div>
  );
};

export default ServerDown;
