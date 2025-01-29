export type Show = {
  "#ACTORS": string;
  "#AKA": string;
  "#IMDB_ID": string;
  "#IMDB_IV": string;
  "#IMDB_URL": string;
  "#IMG_POSTER": string;
  "#RANK": string;
  "#TITLE": string;
  "#YEAR": string;
  photo_height: string;
  photo_width: string;
};

export type QueryData = {
  description: Show[];
  short?: object;
};

export type QueryResult = {
  data: QueryData;
  isLoading: boolean;
  error: Error;
};

export type MovieListProps = {
  data: { description: Show[] } | undefined;
  isLoading: boolean;
  error: Error | null;
};

export type MovieDetailsProps = {
  selectedMovie: Show | undefined;
};

export type MovieProps = {
  movie: Show;
};
export type NavBarProps = {
  onQueryText: React.Dispatch<React.SetStateAction<string>>;
};

export type PersonProps = {
  list: { url: string; name: string }[];
  type: string;
};

export type TrailerBoxProps = {
  data: QueryData | undefined;
};
export type RatingBoxProps = {
  data: QueryData | undefined;
};
