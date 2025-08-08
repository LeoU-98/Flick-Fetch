import { motion } from "framer-motion";

const containerVariants = {
  hidden: {
    x: "-100vw",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
  },
};

const Welcome: React.FC = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      transition={{ type: "spring", visualDuration: 1, bounce: 0.4 }}
      className="3xl:py-40 flex flex-col items-center justify-center rounded-4xl bg-gradient-to-r from-slate-900/80 to-slate-700/80 py-10 text-center text-white lg:py-[8.8rem]"
    >
      <WelcomePageSVG />
      <motion.h1
        className="mb-4 text-3xl font-bold sm:text-5xl"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
      >
        Welcome to Flick Fetch
      </motion.h1>
      <motion.p
        className="mb-6 max-w-md text-sm text-balance sm:text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Your go-to spot for the latest movies, TV shows, and series. Stay
        updated, explore recommendations, and find your next favorite watch—all
        in one place!
      </motion.p>
    </motion.div>
  );
};

export default Welcome;

function WelcomePageSVG() {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width="150"
      height="150"
      viewBox="0 0 24 24"
      fill="none"
      animate={{ x: [-20, 20, 0] }}
      transition={{
        type: "spring",
        stiffness: 500,
        repeatType: "reverse",
        repeat: Infinity,
      }}
    >
      <path
        fill="url(#paint0_linear_2535_6884)"
        d="M12 2C13.8452 2 15.3293 2 16.5401 2.08783L13.0986 7.25002H8.40139L11.9014 2H12Z"
      />
      <path
        fill="url(#paint2_linear_2535_6884)"
        fillRule="evenodd"
        d="M2 12C2 10.7633 2 9.68875 2.02644 8.75002H21.9736C22 9.68875 22 10.7633 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12ZM13.014 12.5852C14.338 13.4395 15 13.8666 15 14.5C15 15.1334 14.338 15.5605 13.014 16.4148C11.6719 17.2807 11.0008 17.7137 10.5004 17.3958C10 17.0779 10 16.2186 10 14.5C10 12.7814 10 11.9221 10.5004 11.6042C11.0008 11.2863 11.6719 11.7193 13.014 12.5852Z"
        clipRule="evenodd"
      />
      <path
        fill="url(#paint1_linear_2535_6884)"
        d="M3.46447 3.46447C4.71683 2.2121 6.62194 2.03072 10.0957 2.00445L6.59861 7.25002H2.10418C2.25143 5.48593 2.6068 4.32213 3.46447 3.46447Z"
      />
      <path
        fill="url(#paint3_linear_2535_6884)"
        d="M21.8958 7.25002C21.7486 5.48593 21.3932 4.32213 20.5355 3.46447C19.9382 2.86714 19.1924 2.51345 18.1987 2.30403L14.9014 7.25002H21.8958Z"
      />

      <defs>
        <linearGradient
          id="paint0_linear_2535_6884"
          x1="12"
          x2="12"
          y1="2"
          y2="22"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#000851" />
          <stop offset="1" stopColor="#1CB5E0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_2535_6884"
          x1="12"
          x2="12"
          y1="2"
          y2="22"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#000851" />
          <stop offset="1" stopColor="#1CB5E0" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_2535_6884"
          x1="12"
          x2="12"
          y1="2"
          y2="22"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#000851" />
          <stop offset="1" stopColor="#1CB5E0" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_2535_6884"
          x1="12"
          x2="12"
          y1="2"
          y2="22"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#000851" />
          <stop offset="1" stopColor="#1CB5E0" />
        </linearGradient>
      </defs>
    </motion.svg>
  );
}
