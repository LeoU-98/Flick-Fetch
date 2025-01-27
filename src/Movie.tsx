import { Link } from "react-router";

import { MovieProps } from "./Alltypes";

function Movie({ movie }: MovieProps) {
  const { "#IMG_POSTER": poster, "#TITLE": title, "#YEAR": year } = movie;

  return (
    <li className="bg-genoa-950/95 w-full cursor-pointer rounded-4xl text-white">
      <Link
        to={`/show/${movie["#IMDB_ID"]}`}
        className="flex size-full min-h-24 gap-5 p-2 px-10"
      >
        <img src={poster} alt={title} className="block w-20" />
        <div className="flex w-full items-center justify-between">
          <p>{title}</p>
          <p>{year}</p>
        </div>
      </Link>
    </li>
  );
}
export default Movie;
