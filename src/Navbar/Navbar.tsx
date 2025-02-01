import { useState } from "react";
import SVG from "./SVG";
import { Link, useNavigate } from "react-router";
import { motion } from "motion/react";

function Navbar() {
  const [searchText, setSearchText] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const navigate = useNavigate();
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      navigate(`show/?q=${searchText}`);
    }
  };

  return (
    <div className="xsss:gap-6 mb-6 grid grid-cols-2 gap-x-2 gap-y-6 rounded-lg bg-gradient-to-r from-[#000851] to-[#1CB5E0] px-2 py-4 text-white lg:grid-cols-3">
      <Link
        className="col-start-1 row-start-1 flex items-center gap-1"
        to={"/"}
      >
        <SVG />
        <h1 className="xsss:text-xl text-lg text-nowrap lg:text-3xl">
          Flick Fetch
        </h1>
      </Link>
      <div className="col-span-2 col-start-1 row-start-2 flex items-center justify-center md:row-start-1 lg:col-span-1 lg:col-start-2">
        <motion.input
          onFocus={() => {
            setIsFocused(true);
          }}
          onBlur={() => setIsFocused(false)}
          animate={isFocused ? { scale: 1.1 } : { scale: 1 }}
          type="text"
          placeholder="Search"
          className="xsss:px-4 xss:p-2 xss:w-60 rounded-l-full bg-white px-3 py-1 pb-1.5 text-gray-950 outline-none sm:w-[300px]"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onKeyDown={handleKeyDown}
        />

        <Link
          className="xss:h-10 xss:w-20 h-8 w-14 cursor-pointer"
          to={`show/?q=${searchText}`}
        >
          <motion.svg
            initial={{ backgroundColor: "#314158 " }}
            animate={isFocused ? { scale: 1.1 } : { scale: 1 }}
            whileHover={{
              backgroundColor: "#000851",
              transition: {
                duration: 0.3,
              },
            }}
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            version="1.1"
            id="search"
            x="0px"
            y="0px"
            viewBox="0 0 24 24"
            className="z-10 block size-full overflow-hidden rounded-r-full bg-slate-700 py-1"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path
                d="M20.031,20.79c0.46,0.46,1.17-0.25,0.71-0.7l-3.75-3.76c1.27-1.41,2.04-3.27,2.04-5.31
                c0-4.39-3.57-7.96-7.96-7.96s-7.96,3.57-7.96,7.96c0,4.39,3.57,7.96,7.96,7.96c1.98,0,3.81-0.73,5.21-1.94L20.031,20.79z
                M4.11,11.02c0-3.84,3.13-6.96,6.96-6.96c3.84,0,6.96,3.12,6.96,6.96c0,3.84-3.12,6.96-6.96,6.96C7.24,17.98,4.11,14.86,4.11,11.02
                z"
              ></path>
            </g>
          </motion.svg>
        </Link>
      </div>
      <div className="col-start-2 row-start-1 flex items-center justify-end lg:col-start-3">
        <p className="text-xm">Feature to Be added Later</p>
      </div>
    </div>
  );
}

export default Navbar;
