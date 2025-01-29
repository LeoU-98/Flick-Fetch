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

export type MovieProps = {
  show: Showtype;
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
