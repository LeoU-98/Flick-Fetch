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
  onSelect: React.Dispatch<React.SetStateAction<string>>;
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
