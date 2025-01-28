import { RatingBoxProps } from "../Alltypes";

function RatingBox({ data }: RatingBoxProps) {
  return (
    <div className="bg-violet-500">
      <div>
        {" "}
        <span>IMDB Rating</span>
        <p className="text-base"></p>
        {data?.short?.aggregateRating?.ratingValue}⭐ (
        {data?.short?.aggregateRating?.ratingCount})
      </div>
      <div>
        {" "}
        <span>Your Rating</span>
        <p className="text-base">Your Rating </p>
      </div>
      <div>
        {" "}
        <span>IMDB Rating</span>
        <p className="text-base">{data?.short?.contentRating}</p>
      </div>
    </div>
  );
}

export default RatingBox;
