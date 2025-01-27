import { MovieListProps, MovieProps } from "./Alltypes";

function MovieList({ data, isLoading, error, onSelect }: MovieListProps) {
  // const { data, isLoading, error } = queryResult;

  // Handle loading and error states
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error instanceof Error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <ul className="flex flex-col gap-2 p-4">
      {data?.description?.map((movie) => (
        <Movie key={movie["#IMDB_ID"]} movie={movie} onSelect={onSelect} />
      ))}
    </ul>
  );
}

function Movie({ movie, onSelect }: MovieProps) {
  // Destructuring the necessary fields
  const { "#IMG_POSTER": poster, "#TITLE": title, "#YEAR": year } = movie;

  return (
    <li
      className="flex w-full gap-5 rounded-4xl bg-green-600 p-2 px-10"
      onClick={() => onSelect(movie["#IMDB_ID"])}
    >
      <img src={poster} alt={title} className="block w-14" />
      <div className="flex w-full items-center justify-between">
        <p>{title}</p>
        <p>{year}</p>
      </div>
    </li>
  );
}

export default MovieList;
