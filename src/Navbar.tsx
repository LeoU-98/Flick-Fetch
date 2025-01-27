import { useRef } from "react";
import SVG from "./SVG";
import { NavBarProps } from "./Alltypes";
import { CiSearch } from "react-icons/ci";

function Navbar({ onQueryText }: NavBarProps) {
  const searchRef = useRef<HTMLInputElement>(null);

  function searchButtonHandler() {
    onQueryText(searchRef.current?.value || "");

    console.log(searchRef.current?.value);
    console.log(searchRef.current);
  }

  return (
    <div className="bg-genoa-500/80 mb-6 flex items-center justify-between rounded-lg px-4 text-white">
      <div className="flex items-center gap-1">
        <SVG />
        <h1 className="text-3xl">Flick Fetch</h1>
      </div>
      <div>
        <input
          type="text"
          placeholder="search"
          className="w-96 rounded-full bg-white p-2 px-4 text-gray-950 outline-none"
          ref={searchRef}
        />
        <button>
          <CiSearch className="size-8" onClick={searchButtonHandler} />
        </button>
      </div>
      <div>Later will see his </div>
    </div>
  );
}

export default Navbar;
