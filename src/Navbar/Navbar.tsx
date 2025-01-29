import { useState } from "react";
import SVG from "./SVG";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router";

function Navbar() {
  const [searchText, setSearchText] = useState("");

  return (
    <div className="bg-genoa-500/80 mb-6 flex items-center justify-between rounded-lg px-4 text-white">
      <div className="flex items-center gap-1">
        <SVG />
        <h1 className="text-3xl">Flick Fetch</h1>
      </div>
      <div className="relative flex items-center">
        <input
          type="text"
          placeholder="search"
          className="w-96 rounded-full bg-white p-2 px-4 text-gray-950 outline-none"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />

        <Link
          className="absolute right-0 z-10 block h-full w-20 cursor-pointer overflow-hidden rounded-r-full"
          to={`show/?q=${searchText}`}
        >
          <CiSearch className="bg-genoa-800 size-full py-1" />
        </Link>
      </div>
      <div>Later will see his </div>
    </div>
  );
}

export default Navbar;
