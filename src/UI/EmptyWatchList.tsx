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

export default function EmptyWatchList() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      transition={{ type: "spring", visualDuration: 1, bounce: 0.3 }}
      className="3xl:py-16 flex flex-col items-center justify-center rounded-4xl bg-gradient-to-r from-slate-900/80 to-slate-700/80 py-10 text-center text-white lg:py-11"
    >
      <img
        src="/watchListImage.jpg"
        className="w-70 overflow-hidden rounded-lg md:w-2xl lg:w-xl"
      />

      <motion.h1
        className="my-4 text-xl font-bold md:text-3xl lg:text-5xl"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
      >
        Your watch list is empty for now.
      </motion.h1>
      <motion.p
        className="mb-6 max-w-[90%] text-sm text-balance sm:text-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Start exploring. Add movies you’ve watched or plan to watch!
      </motion.p>
    </motion.div>
  );
}
