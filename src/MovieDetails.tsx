import { useParams } from "react-router";
import { MovieDetailsProps, QueryData } from "./Alltypes";
import { getShows } from "./utils/fetchData";
import { useQuery } from "@tanstack/react-query";

function MovieDetails({ selectedMovie }: MovieDetailsProps) {
  const { showId } = useParams();

  console.log(showId);
  const { data, isLoading, error } = useQuery<QueryData>({
    queryKey: ["movies", showId],
    queryFn: () => getShows(showId || "", "tt"),
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error instanceof Error) {
    return <div>Error: {error.message}</div>;
  }

  console.log(data?.short);

  function getActors(arr: { name: string }[]): string[] {
    return arr.map((actor) => actor?.name);
  }

  return (
    <div className="bg-genoa-500/50 h-[650px] rounded-4xl p-5 text-white">
      <div className="mb-10 flex w-full justify-between">
        <div className="flex flex-col gap-2 pt-20 pl-8">
          <p className="text-2xl">
            Title : <span className="text-base">{data?.short?.name}</span>
          </p>
          <p className="text-2xl">
            Publish Date :{" "}
            <span className="text-base">{data?.short?.datePublished}</span>
          </p>
          {/* <p className="text-2xl">
            Author :{" "}
            <span className="text-base">
              {data?.short?.review?.author?.name}
            </span>
          </p> */}
          <p className="text-2xl">
            Actors :
            <span className="text-base">
              {...getActors(data?.short?.actor)}
            </span>
          </p>
          <p className="text-2xl">
            Directors :
            <span className="text-base">
              {...getActors(data?.short?.director)}
            </span>
          </p>
          <p className="text-2xl">
            Contect Rating :
            <span className="text-base">{data?.short?.contentRating}</span>
          </p>
          <p className="text-2xl">
            Genre :<span className="text-base">{...data?.short?.genre}</span>
          </p>
          {/* <p className="text-2xl">
            Language :
            <span className="text-base">{data?.short?.review?.inLanguage}</span>
          </p> */}
          <p className="text-2xl">
            Descryption :
            <span className="text-base">{data?.short?.description}</span>
          </p>
          {/* <p className="text-2xl">
            Date Created :
            <span className="text-base">
              {data?.short?.review?.dateCreated}
            </span>
          </p> */}
          <p className="text-2xl">
            Rating :{" "}
            <span className="text-base">
              {data?.short?.aggregateRating?.ratingValue}⭐ (
              {data?.short?.aggregateRating?.ratingCount})
            </span>
          </p>
        </div>
        <img
          src={data?.short?.image}
          alt={selectedMovie?.["#TITLE"]}
          className="h-[480px] w-80"
        />
      </div>

      <div className="flex justify-center gap-10">
        <button className="rounded-full bg-black px-5 py-3 text-white">
          More Details{" "}
        </button>
        <a
          href={selectedMovie?.["#IMDB_URL"]}
          className="rounded-full bg-black px-5 py-3 text-white"
        >
          IMDB View
        </a>
      </div>

      {/* <p>{selectedMovie?.["#IMDB_IV"]}</p> */}
    </div>
  );
}

//   return (
//     <div className="bg-genoa-500/50 h-[650px] rounded-4xl p-5 text-white">
//       <div className="mb-10 flex w-full justify-between">
//         <div className="flex flex-col gap-8 pt-20 pl-8">
//           <p className="text-2xl">
//             Title : <span className="text-xl">{selectedMovie?.["#TITLE"]}</span>
//           </p>
//           <p className="text-2xl">
//             Actors :
//             <span className="text-xl">{selectedMovie?.["#ACTORS"]}</span>
//           </p>
//           <p className="text-2xl">
//             Year : <span className="text-xl">{selectedMovie?.["#YEAR"]}</span>
//           </p>
//           <p className="text-2xl">
//             Rank : <span className="text-xl">#{selectedMovie?.["#RANK"]}</span>
//           </p>
//         </div>
//         <img
//           src={selectedMovie?.["#IMG_POSTER"]}
//           alt={selectedMovie?.["#TITLE"]}
//           className="h-[480px] w-80"
//         />
//       </div>

//       <div className="flex justify-center gap-10">
//         <button className="rounded-full bg-black px-5 py-3 text-white">
//           More Details{" "}
//         </button>
//         <a
//           href={selectedMovie?.["#IMDB_URL"]}
//           className="rounded-full bg-black px-5 py-3 text-white"
//         >
//           IMDB View
//         </a>
//       </div>

//       {/* <p>{selectedMovie?.["#IMDB_IV"]}</p> */}
//     </div>
//   );
// }

export default MovieDetails;
