import { useQuery } from "@tanstack/react-query";
import MovieList from "./MovieList";
import { getShows } from "./utils/fetchData";
import { QueryData } from "./Alltypes";
import SVG from "./SVG";
import { useState } from "react";
import MovieDetails from "./MovieDetails";

function App() {
  const [queryText, setQueryText] = useState("fight club");
  const { data, isLoading, error } = useQuery<QueryData>({
    queryKey: ["movies", queryText],
    queryFn: () => getShows(queryText),
  });

  const [selectedMovieID, setSelectedMovieID] = useState("");
  console.log(data?.description);

  const selectedMovie = data?.description.find(
    (movie) => movie["#IMDB_ID"] === selectedMovieID,
  );

  return (
    <div className="p-4">
      <div className="bg-cello-500 mb-6 flex items-center justify-between px-2">
        <div className="flex items-center">
          <SVG />
          <h1>Flick Fetch</h1>
        </div>
        <div>
          <input
            type="text"
            placeholder="search"
            className="rounded-full bg-amber-300 p-2"
            onChange={(event) => setQueryText(event.target.value)}
          />
        </div>
        <div>13 Result Found </div>
      </div>
      <main className="container mx-auto flex gap-4 bg-green-500">
        <div className="basis-1/2 bg-blue-600">
          <MovieList
            data={data}
            isLoading={isLoading}
            error={error}
            onSelect={setSelectedMovieID}
          />
        </div>
        <div className="basis-1/2 bg-violet-600">
          {selectedMovieID ? (
            <MovieDetails selectedMovie={selectedMovie} />
          ) : null}
        </div>
      </main>
    </div>
  );
}

export default App;
