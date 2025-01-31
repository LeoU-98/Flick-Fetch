import { FaRegStarHalfStroke } from "react-icons/fa6";
import { RatingBoxProps } from "../Alltypes";
import { FaListAlt } from "react-icons/fa";

function formatNumber(number: number) {
  if (number >= 1000000) {
    return (number / 1000000)?.toFixed(1) + "M";
  } else {
    return number?.toString();
  }
}

function RatingBox({ data }: RatingBoxProps) {
  return (
    <div className="flex flex-col justify-center gap-28">
      <div>
        <span>IMDB Rating</span>
        <p className="text-base"></p>
        {data?.short?.aggregateRating?.ratingValue}⭐
        {formatNumber(data?.short?.aggregateRating?.ratingCount)}
      </div>
      <div className="flex flex-col items-center">
        <span>Your Rating</span>
        <button className="flex items-center justify-center gap-1 text-base">
          <FaRegStarHalfStroke className="size-8" /> <span>Rate</span>
        </button>
      </div>
      <div className="flex flex-col items-center">
        <span>Watched List</span>
        <button className="flex items-center justify-center gap-1 text-base">
          <FaListAlt className="size-8" /> <span>Add</span>
        </button>
      </div>
    </div>
  );
}

export default RatingBox;
