import { useItemsByScreen } from "../Hooks/useItemsByScreen";

function WatchListSkeleton() {
  const count = useItemsByScreen();

  const numbers = Array.from({ length: count }, (_, i) => i);

  return (
    <div>
      <div className="rounded-4xl bg-gray-900 p-5">
        <div className="grid grid-rows-2 items-center gap-5 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          {numbers.map((ItemNum) => (
            <WatchListItemSkeleton key={ItemNum} />
          ))}
        </div>
        <div className="mt-3 flex items-center justify-center gap-1 rounded-3xl bg-black py-1 sm:gap-4">
          <div className="h-8 w-8 animate-pulse cursor-pointer overflow-hidden rounded-full bg-[#3ea9ff]/90"></div>
          <div className="h-8 w-8 animate-pulse cursor-pointer overflow-hidden rounded-full bg-[#3ea9ff]/90"></div>
          <div className="h-8 w-8 animate-pulse cursor-pointer overflow-hidden rounded-full bg-[#3ea9ff]/90"></div>
        </div>
      </div>
    </div>
  );
}

export default WatchListSkeleton;

function WatchListItemSkeleton() {
  return (
    <div className="h-80 rounded-2xl bg-black/40 p-2 text-center">
      <div className="mx-auto mb-2 flex h-60 w-45 items-center justify-center rounded-lg bg-black sm:h-60 sm:w-40">
        <svg
          className="h-10 w-10 animate-pulse text-[#3ea9ff]"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 16 20"
        >
          <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
          <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
        </svg>
      </div>
      <div className="mx-auto h-4 w-3/4 animate-pulse rounded bg-[#3ea9ff]/90"></div>
    </div>
  );
}
