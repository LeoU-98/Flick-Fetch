import { Link } from "react-router";
import { PersonProps } from "../Alltypes";

function Person({ list, type }: PersonProps) {
  return (
    <div
      className={`flex ${type === "Stars" ? "flex-col" : ""} rounded-lg bg-gradient-to-r from-black to-slate-900 p-2 text-nowrap sm:flex-row md:gap-3 xl:px-4`}
    >
      <p className="mb-2 xl:mb-0">{type} : </p>
      <ul className="flex flex-col gap-4 pl-4 sm:flex-row xl:items-center">
        {list?.map((person, index) => (
          <li key={index}>
            <Link
              target="_blank"
              to={person.url}
              className="capitalize duration-150 hover:text-yellow-500"
            >
              {person.name}{" "}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Person;
