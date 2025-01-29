import { useQuery } from "@tanstack/react-query";
import MovieList from "./MovieList/MovieList";
import { getShows } from "./utils/fetchData";
import { QueryData } from "./Alltypes";
import { useState } from "react";
import MovieDetails from "./MovieDetails/MovieDetails";
import { BrowserRouter, Route, Routes } from "react-router";
import AppLayout from "./AppLayout";

function App() {
  const [queryText, setQueryText] = useState("");
  const { data, isLoading, error } = useQuery<QueryData>({
    queryKey: ["movies", queryText],
    queryFn: () => getShows(queryText, "q"),
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout setQueryText={setQueryText} />}>
          <Route
            index
            path="/"
            element={
              <MovieList data={data} isLoading={isLoading} error={error} />
            }
          />
          <Route path="/show/:showId" element={<MovieDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
