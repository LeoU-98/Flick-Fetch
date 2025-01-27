import { MovieDetailsProps } from "./Alltypes";

function MovieDetails({ selectedMovie }: MovieDetailsProps) {
  return (
    <div>
      <img src={selectedMovie?.["#IMG_POSTER"]} />
      <p>{selectedMovie?.["#TITLE"]}</p>
      <p>{selectedMovie?.["#ACTORS"]}</p>
      <p>{selectedMovie?.["#AKA"]}</p>
      <p>{selectedMovie?.["#IMDB_IV"]}</p>
      <p>{selectedMovie?.["#IMDB_URL"]}</p>
      <p>{selectedMovie?.["#RANK"]}</p>
      <p>{selectedMovie?.["#YEAR"]}</p>
    </div>
  );
}

export default MovieDetails;
