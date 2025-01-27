import { MovieDetailsProps } from "./Alltypes";

function MovieDetails({ selectedMovie }: MovieDetailsProps) {
  return (
    <div>
      <div className="flex w-full justify-between p-3">
        <div className="flex flex-col gap-8 pt-20 pl-8">
          <p className="text-2xl">
            Title : <span className="text-xl">{selectedMovie?.["#TITLE"]}</span>
          </p>
          <p className="text-2xl">
            Actors :
            <span className="text-xl">{selectedMovie?.["#ACTORS"]}</span>
          </p>
          <p className="text-2xl">
            Year : <span className="text-xl">{selectedMovie?.["#YEAR"]}</span>
          </p>
          <p className="text-2xl">
            Rank : <span className="text-xl">#{selectedMovie?.["#RANK"]}</span>
          </p>
        </div>
        <img
          src={selectedMovie?.["#IMG_POSTER"]}
          alt={selectedMovie?.["#TITLE"]}
          className="w-80"
        />
      </div>

      <div>
        <button>More Details </button>
        <a href={selectedMovie?.["#IMDB_URL"]} className=" ">
          IMDB View
        </a>
      </div>

      <p>{selectedMovie?.["#IMDB_IV"]}</p>
    </div>
  );
}

export default MovieDetails;
