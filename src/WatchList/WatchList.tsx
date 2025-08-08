import { useState } from "react";
import ReactPaginate from "react-paginate";
import { decodeHtml } from "../Utils/helpers";
import { useItemsByScreen } from "../Hooks/useItemsByScreen";
import { Data, WatchShowProps } from "../Alltypes";
import { Link, useLoaderData } from "react-router";
import { motion } from "motion/react";
import EmptyWatchList from "../UI/EmptyWatchList";
import { FaStar } from "react-icons/fa6";
import { MdOutlinePlaylistRemove } from "react-icons/md";

const containerVariants = {
  hidden: {
    opacity: 0.1,
  },
  visible: {
    opacity: 1,
    transition: { duration: 1 },
  },
};

const buttonVairants = {
  initial: {
    scale: 1,
  },
  animate: {
    scale: 1.2,
  },
};

export default function WatchList() {
  const data = useLoaderData();
  const [watchedShows, setWatchedShows] = useState(data);

  const [itemOffset, setItemOffset] = useState(0);
  const count = useItemsByScreen();

  const itemsPerPage = count;
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = watchedShows?.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(watchedShows?.length / itemsPerPage);
  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * itemsPerPage) % watchedShows?.length;

    setItemOffset(newOffset);
  };

  function handleRemoveShow(id: string) {
    const stored = localStorage.getItem("watchListItems");
    const parsed = JSON.parse(stored || "[]");
    const updatedList = parsed.filter((ID: string) => ID !== id);
    localStorage.setItem("watchListItems", JSON.stringify(updatedList));
    setWatchedShows(watchedShows.filter((show: Data) => show.imdbId !== id));
  }

  return currentItems.length !== 0 ? (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="3xl:py-10 rounded-4xl bg-gradient-to-r from-slate-900/80 to-slate-700/80 p-5 2xl:px-40"
    >
      <div className="grid grid-rows-2 items-center gap-5 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {currentItems?.map((show: Data) => (
          <WatchShow
            key={show.imdbId}
            show={show}
            onRemove={handleRemoveShow}
          />
        ))}
      </div>

      <ReactPaginate
        pageRangeDisplayed={2}
        marginPagesDisplayed={1}
        breakLabel="..."
        nextLabel="Next →"
        onPageChange={handlePageClick}
        pageCount={pageCount}
        previousLabel="← Prev"
        renderOnZeroPageCount={null}
        className="mt-3 flex items-center justify-center gap-1 rounded-3xl border-[1px] border-gray-300 bg-white py-1 sm:gap-4"
        pageClassName="rounded-full overflow-hidden  hover:text-[#1CB5E0]        cursor-pointer     "
        pageLinkClassName="size-8 sm:size-10 sm:p-1 flex justify-center items-center text-xs"
        activeClassName="bg-[#1CB5E0]        cursor-pointer      text-white hover:text-white"
        previousClassName="text-[#1CB5E0]        cursor-pointer      hover:bg-[#1CB5E0]        cursor-pointer   whitespace-nowrap   hover:text-white rounded-full text-xs font-bold duration-200 select-none"
        nextClassName="text-[#1CB5E0]        cursor-pointer      hover:bg-[#1CB5E0]        cursor-pointer   whitespace-nowrap   hover:text-white rounded-full text-xs font-bold duration-200 select-none"
        previousLinkClassName="sm:px-6 sm:py-3 py-2 px-2 block uppercase"
        nextLinkClassName="sm:px-6 sm:py-3 py-2  px-2 block uppercase"
      />
    </motion.div>
  ) : (
    <EmptyWatchList />
  );
}

function WatchShow({ show, onRemove }: WatchShowProps) {
  return (
    <Link
      to={`/show-details?tt=${show.imdbId}`}
      className="flex items-center justify-center"
    >
      <motion.div
        layout
        className="group 3xl:h-70 h-80 w-full max-w-70 [perspective:1000px] 2xl:h-60"
      >
        <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
          <div className="absolute inset-0">
            <img
              className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
              src={show?.short?.image}
              alt={show?.short?.name}
            />
          </div>
          <div className="absolute inset-0 h-full w-full [transform:rotateY(180deg)] rounded-xl bg-black/80 px-3 text-center text-slate-200 [backface-visibility:hidden]">
            <div className="flex min-h-full flex-col items-center py-15">
              <h2 className="line-clamp-3 text-xl font-bold">
                {decodeHtml(show?.short?.name)}
              </h2>
              <div className="mb-8 flex items-center gap-5">
                <p className="text-lg">
                  {show?.short?.datePublished?.split("-")[0]}
                </p>
                <p className="flex items-center justify-center gap-1">
                  <FaStar className="text-xl text-amber-400" />
                  {show?.short?.aggregateRating?.ratingValue}/10
                </p>
              </div>
              <motion.button
                onClick={(e) => {
                  e.preventDefault();
                  onRemove(show?.imdbId);
                }}
                variants={buttonVairants}
                initial="initial"
                whileHover="animate"
                className="absolute bottom-10 flex cursor-pointer items-center justify-center gap-1 text-base xl:h-9 xl:w-24"
              >
                <MdOutlinePlaylistRemove className="size-9" />{" "}
                <span>Remove</span>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
