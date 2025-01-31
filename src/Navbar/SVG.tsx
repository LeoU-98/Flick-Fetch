import { motion } from "motion/react";

const pathVairants = {
  initial: { pathLength: 0 },
  animate: {
    pathLength: 1,

    transition: {
      duration: 1,
    },
  },
};

export default function SVG() {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 96 96"
      id="movie-reel"
      className="xsss:size-18 xs:size-[75px] size-12"
    >
      <motion.path
        variants={pathVairants}
        initial="initial"
        animate="animate"
        stroke="#fff"
        strokeWidth="5"
        d="M15 86H81C83.7614 86 86 83.7614 86 81V15C86 12.2386 83.7614 10 81 10H15C12.2386 10 10 12.2386 10 15V81C10 83.7614 12.2386 86 15 86Z"
      ></motion.path>
      <motion.path
        variants={pathVairants}
        initial="initial"
        animate="animate"
        stroke="#fff"
        strokeWidth="5"
        d="M23 86H73V10H23V86Z"
      ></motion.path>
      <motion.path
        variants={pathVairants}
        initial="initial"
        animate="animate"
        stroke="#fff"
        strokeLinecap="round"
        strokeWidth="5"
        d="M12 24H23M74 24H85M12 36H23M74 36H85M12 48H23M74 48H85M12 60H23M74 60H85M12 72H23M74 72H85"
      ></motion.path>
      <motion.path
        variants={pathVairants}
        initial="initial"
        animate="animate"
        stroke="#fff"
        strokeWidth="5"
        d="M58.7859 45.0119C61.5087 46.5403 61.5087 50.4597 58.7859 51.9881L43.9579 60.3112C41.2915 61.8079 38 59.8808 38 56.8231L38 40.1769C38 37.1192 41.2915 35.1921 43.9579 36.6888L58.7859 45.0119Z"
      ></motion.path>
    </motion.svg>
  );
}
