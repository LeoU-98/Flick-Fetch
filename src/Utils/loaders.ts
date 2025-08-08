import { LoaderFunctionArgs } from "react-router";
import { CustomError, Data } from "../Alltypes";

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

export async function watchListLoader() {
  try {
    const stored = localStorage.getItem("watchListItems");
    const parsed = JSON.parse(stored || "[]");

    if (!Array.isArray(parsed)) return [];

    const data = await Promise.allSettled(
      parsed.map((id: string) =>
        fetch(`https://imdb.iamidiotareyoutoo.com/search?tt=${id}`).then(
          (res) => res.json(),
        ),
      ),
    );

    return data
      .filter(
        (res): res is PromiseFulfilledResult<Data> =>
          res.status === "fulfilled",
      )
      .map((res) => res.value);
  } catch {
    return [];
  }
}

///////////////////////////////////
////////////// Data Fetchers

export async function getShows(queryText: string, queryType: "q" | "tt") {
  const url = `https://imdb.iamidiotareyoutoo.com/search?${queryType}=${queryText}`;

  try {
    if (queryText.length === 0) {
      const error = new Error("Invalid Parameters");
      (error as CustomError).status = 400;
      throw error;
    }

    const response = await fetch(url);

    if (response.status === 500) {
      const error = new Error("Internal Server Error");
      (error as CustomError).status = 500;
      throw error;
    }

    if (response.status === 400) {
      const error = new Error("Invalid Parameters");
      (error as CustomError).status = 400;
      throw error;
    }

    const data = await response.json();

    if (
      queryType === "q" &&
      data.description.length === 0 &&
      response.status === 200
    ) {
      const error = new Error("Invalid Parameters");
      (error as CustomError).status = 400;
      throw error;
    }

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
