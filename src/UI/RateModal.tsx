import { motion } from "framer-motion";
import { useState } from "react";
import { formatNumber } from "../tempUtils/helpers";
import { GoStarFill } from "react-icons/go";
import { HiXMark } from "react-icons/hi2";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { RateModalProp } from "../Alltypes";

export default function RateModal({
  isOpen,
  onClose,
  onRate,
  data,
  yourRate,
}: RateModalProp) {
  const [rating, setRating] = useState(0);
  const [hovered, setHovered] = useState(0);

  if (!isOpen) return null;

  function handleSubmit() {
    onRate(rating);
    localStorage.setItem(String(data.imdbId), String(rating));
    onClose();
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm"
      onClick={onClose} // click outside closes
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        onClick={(e) => e.stopPropagation()}
        className="relative max-h-[100vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-gradient-to-b from-black to-slate-900 px-4 py-10 md:p-8"
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 cursor-pointer text-white duration-300 hover:rotate-180"
        >
          <HiXMark className="size-6" />
        </button>

        <div className="flex flex-col justify-center gap-4 sm:flex-row sm:gap-8">
          <div className="rounded-2xl bg-white px-4 py-5">
            <img
              src={data?.short?.image}
              alt={data?.short?.name}
              className="mx-auto mb-2 w-34 rounded-2xl object-cover sm:mb-5 sm:w-40"
            />
            <p className="text-center">{data?.short?.name}</p>
          </div>

          <div className="flex flex-col justify-between">
            <div className="mb-4 flex flex-col items-center gap-2 rounded-2xl bg-white p-2 sm:mb-6">
              <span className="">IMDB Rating</span>
              <div className="flex items-center justify-center gap-2">
                <GoStarFill className="size-5 text-amber-300" />

                <div>
                  <span className="text-base">
                    {data?.short?.aggregateRating?.ratingValue}/10
                  </span>{" "}
                  <span className="text-sm">
                    ({formatNumber(data?.short?.aggregateRating?.ratingCount)})
                  </span>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-white px-5 py-3 sm:py-5">
              <h2 className="my-3 text-xl font-semibold sm:my-6">Rate this</h2>
              <div className="mb-3 flex justify-center gap-1">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((star) => {
                  const isActive = (hovered || rating) >= star;
                  return (
                    <span
                      key={star}
                      onClick={() => setRating(star)}
                      onMouseEnter={() => setHovered(star)}
                      onMouseLeave={() => setHovered(0)}
                      className="cursor-pointer text-yellow-400 transition-transform duration-150 hover:scale-110"
                    >
                      {isActive ? (
                        <AiFillStar size={24} />
                      ) : (
                        <AiOutlineStar size={24} />
                      )}
                    </span>
                  );
                })}
              </div>
              <p className="mb-6 text-center text-sm text-gray-500">
                {yourRate > 0 ? `You rated: ${yourRate}/10` : "Click to rate"}
              </p>
              <button
                onClick={handleSubmit}
                className="w-full cursor-pointer rounded-xl bg-yellow-500 py-2 font-semibold text-black transition-colors duration-300 hover:bg-black hover:text-white"
                disabled={rating === 0}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
