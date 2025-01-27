import { MovieListProps } from "./Alltypes";
import Movie from "./Movie";

function MovieList({ data, isLoading, error }: MovieListProps) {
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error instanceof Error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <ul className="bg-genoa-500/90 grid grid-cols-2 gap-5 rounded-4xl px-8 py-14">
      {data?.description?.map((movie) => (
        <Movie key={movie["#IMDB_ID"]} movie={movie} />
      ))}
    </ul>
  );
}

export default MovieList;
