export async function getShows(queryText: string, queryType: "q" | "tt") {
  const url = `https://imdb.iamidiotareyoutoo.com/search?${queryType}=${queryText}`;

  if (queryText.length < 3) return;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error: unknown) {
    // Type assertion for error
    if (error instanceof Error) {
      console.error("Error fetching shows:", error.message);
      throw error; // Rethrow the error to be handled by react-query
    } else {
      console.error("Unknown error occurred");
      throw new Error("Unknown error occurred");
    }
  }
}
