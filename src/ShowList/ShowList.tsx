import { getShows } from "../utils/fetchData";
import Movie from "./Show";
import { Showtype } from "../Alltypes";
import { LoaderFunctionArgs, useLoaderData } from "react-router";

function ShowList() {
  const data = useLoaderData();

  return (
    <ul className="grid grid-cols-2 gap-5 rounded-4xl bg-gradient-to-r from-slate-900/80 to-slate-700/80 px-8 py-14">
      {/* <ul className="grid grid-cols-2 gap-5 rounded-4xl bg-gray-950 px-8 py-14"> */}
      {/* <ul className="grid grid-cols-2 gap-5 rounded-4xl bg-gradient-to-r from-slate-900 to-slate-700 px-8 py-14"> */}
      {data?.description?.map((show: Showtype) => (
        <Movie key={show["#IMDB_ID"]} show={show} />
      ))}
    </ul>
  );
}

export default ShowList;

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const url = new URL(request.url);
  const query = url.searchParams.get("q") || "";
  const show = await getShows(query, "q");

  return show;
};
