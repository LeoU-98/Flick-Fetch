import { useQuery } from "@tanstack/react-query";
import MovieList from "./MovieList";
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

  const [selectedMovieID, setSelectedMovieID] = useState("");
  const selectedMovie = data?.description.find(
    (movie) => movie["#IMDB_ID"] === selectedMovieID,
  );

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout setQueryText={setQueryText} />}>
          <Route
            index
            path="/"
            element={
              <MovieList
                data={data}
                isLoading={isLoading}
                error={error}
                onSelect={setSelectedMovieID}
              />
            }
          />
          <Route
            path="/show/:showId"
            element={<MovieDetails selectedMovie={selectedMovie} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

// function App() {
//   const [queryText, setQueryText] = useState("");
//   const { data, isLoading, error } = useQuery<QueryData>({
//     queryKey: ["movies", queryText],
//     queryFn: () => getShows(queryText),
//   });

//   const [selectedMovieID, setSelectedMovieID] = useState("");

//   // const { data, isLoading, error } = useQuery<QueryData>({
//   //   queryKey: ["moivedetails", queryText],
//   //   queryFn: () => getShows(queryText),
//   // });

//   console.log(data?.description);

//   const selectedMovie = data?.description.find(
//     (movie) => movie["#IMDB_ID"] === selectedMovieID,
//   );

//   return (
//     <div className="p-4">
//       <Navbar onQueryText={setQueryText} />
//       <main className="container mx-auto">
//         {queryText ? (
//           <MovieList
//             data={data}
//             isLoading={isLoading}
//             error={error}
//             onSelect={setSelectedMovieID}
//           />
//         ) : null}

//         {selectedMovie ? <MovieDetails selectedMovie={selectedMovie} /> : null}
//       </main>

//       {/* <main className="container mx-auto flex gap-4">
//         <div className="basis-1/2">
//           <MovieList
//             data={data}
//             isLoading={isLoading}
//             error={error}
//             onSelect={setSelectedMovieID}
//           />
//         </div>
//         <div className="basis-1/2">
//           {selectedMovie ? (
//             <MovieDetails selectedMovie={selectedMovie} />
//           ) : null}
//         </div>
//       </main> */}
//     </div>
//   );
// }

export default App;
