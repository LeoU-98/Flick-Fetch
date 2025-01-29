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

export type QueryData<T> = {
  description: Show[];
  short?: T;
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

type Data = {
  short: {
    trailer: {
      thumbnailUrl: string;
      url: string;
      duration: string;
    };
    name: string;
    aggregateRating: {
      ratingValue: string;
      ratingCount: number;
    };
  };
};

export type TrailerBoxProps = {
  data: Data;
};

export type RatingBoxProps = {
  data: Data;
};
