import { Link } from "react-router";
import { PersonProps } from "../Alltypes";

function Person({ list, type }: PersonProps) {
  return (
    <div className="flex gap-3 rounded-lg bg-gradient-to-r from-black to-slate-900 p-2 text-nowrap">
      <p className="">{type} : </p>
      <ul className="flex gap-4">
        {list?.map((person, index) => (
          <li key={index}>
            <Link
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
