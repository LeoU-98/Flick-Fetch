export type Showtype = {
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

export type PersonListProps = {
  list: {
    name: string;
    url: string;
  }[];
};

export type ShowProps = {
  show: Showtype;
};

export type PersonProps = {
  list: { url: string; name: string }[];
  type: string;
};

export type Data = {
  imdbId: string;
  short: {
    datePublished: string;
    image: string;
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
  onOpen: () => void;
  yourRate: number;
};

export type RateModalProp = {
  isOpen: boolean;
  onClose: () => void;
  onRate: React.Dispatch<React.SetStateAction<number>>;
  data: Data;
  yourRate: number;
};

export type WatchShowProps = {
  show: Data;
  onRemove: (id: string) => void;
};

export interface CustomError extends Error {
  status: number;
}
