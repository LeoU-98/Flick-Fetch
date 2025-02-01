import { LoaderFunctionArgs } from "react-router";

import { getShows } from "./fetchData";

export const showListLoader = async ({ request }: LoaderFunctionArgs) => {
  const url = new URL(request.url);
  const query = url.searchParams.get("q") || "";
  const show = await getShows(query, "q");

  return show;
};

export const showDetailsLoader = async ({ request }: LoaderFunctionArgs) => {
  const url = new URL(request.url);
  const query = url.searchParams.get("tt") || "";
  const show = await getShows(query, "tt");

  return show;
};
