function ShowListSkeleton() {
  const showPlaceholder = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <ul className="grid grid-cols-1 gap-3 rounded-4xl bg-gradient-to-r from-slate-900/80 to-slate-700/80 px-4 py-14 xl:grid-cols-2 xl:gap-5 xl:px-8">
      {showPlaceholder.map((showNum) => (
        <ShowSkeleton key={showNum} />
      ))}
    </ul>
  );
}

export default ShowListSkeleton;

function ShowSkeleton() {
  return (
    <li className="w-full cursor-pointer rounded-4xl bg-black text-white">
      <a className="grid size-full min-h-24 grid-cols-[90px_1fr_1fr] items-center gap-5 p-2 px-10 ring-1 ring-transparent focus:ring-white focus:outline-none sm:grid-cols-[90px_auto_90px]">
        <div className="col-start-1 row-start-1 flex h-[100px] w-[85px] items-center justify-center overflow-hidden rounded-lg bg-black text-center">
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

        <div className="col-span-2 col-start-1 row-start-2 text-nowrap sm:col-span-1 sm:col-start-2 sm:row-start-1">
          <div className="mb-1 h-4 w-3/4 animate-pulse rounded bg-[#3ea9ff]/90"></div>
          <div className="mb-1 h-4 w-1/2 animate-pulse rounded bg-[#3ea9ff]/90"></div>
          <div className="h-4 w-1/4 animate-pulse rounded bg-[#3ea9ff]/90"></div>
        </div>
        <div className="col-span-2 col-start-2 row-start-1 text-center sm:col-span-1 sm:col-start-3">
          <div className="mb-1 h-4 w-1/2 animate-pulse rounded bg-[#3ea9ff]/90"></div>
          <div className="h-4 w-1/4 animate-pulse rounded bg-[#3ea9ff]/90"></div>
        </div>
      </a>
    </li>
  );
}
