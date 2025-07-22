function ShowDetailsSkeleton() {
  return (
    <div className="rounded-4xl bg-gradient-to-r from-slate-900/80 to-slate-700/80 px-5 py-5 text-white">
      <div className="mb-5 flex flex-col items-center justify-between gap-3 sm:flex-row sm:gap-3 sm:pl-5">
        <div className="h-6 w-1/2 animate-pulse rounded bg-[#3ea9ff] xl:w-80"></div>
        <div className="h-6 w-1/2 animate-pulse rounded bg-[#3ea9ff] xl:w-32"></div>
      </div>

      <div className="mb-3 flex w-full flex-col justify-between gap-5 sm:items-center xl:flex-row">
        <div className="flex h-120 w-full items-center justify-center rounded-lg bg-black xl:w-96">
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

        <div className="relative mx-auto flex h-full min-h-96 w-full items-center justify-center overflow-hidden rounded-2xl bg-black text-center md:mx-0 md:h-[480px] lg:w-[820px] xl:w-[800px]">
          <svg
            className="h-10 w-10 animate-pulse text-[#3ea9ff]"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 16 20"
          >
            <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
            <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM9 13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm4 .382a1 1 0 0 1-1.447.894L10 13v-2l1.553-1.276a1 1 0 0 1 1.447.894v2.764Z" />
          </svg>
        </div>

        <div className="flex flex-wrap justify-center gap-5 self-stretch rounded-2xl bg-gradient-to-b from-black to-slate-900 to-65% py-4 text-nowrap sm:w-full sm:gap-20 lg:gap-28 xl:w-auto xl:flex-col xl:px-4">
          <div className="flex animate-pulse flex-col items-center gap-1">
            <span className="h-4 w-20 rounded bg-[#3ea9ff]/90"></span>
            <div className="flex items-center justify-center gap-2">
              <div className="h-8 w-8 rounded bg-[#3ea9ff]/90"></div>
              <div>
                <p className="mt-2 h-4 w-14 rounded bg-[#3ea9ff]/90"></p>
                <p className="mt-2 h-4 w-14 rounded bg-[#3ea9ff]/90"></p>
              </div>
            </div>
          </div>
          <div className="flex animate-pulse flex-col items-center gap-2">
            <span className="h-4 w-20 rounded bg-[#3ea9ff]/90"></span>
            <div className="mt-2 h-8 w-20 rounded bg-[#3ea9ff]/90"></div>
          </div>
          <div className="flex animate-pulse flex-col items-center gap-2">
            <span className="h-4 w-20 rounded bg-[#3ea9ff]/90"></span>
            <div className="mt-2 h-8 w-20 rounded bg-[#3ea9ff]/90"></div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
        <div className="w-full max-w-[800px] md:w-3/4">
          <ul className="mb-3 flex items-center gap-2">
            <li className="animate-pulse rounded-full bg-[#3ea9ff]/90 px-2 py-1"></li>
            <li className="animate-pulse rounded-full bg-[#3ea9ff]/90 px-2 py-1"></li>
          </ul>
          <div className="flex flex-col">
            <div className="flex flex-col gap-4 xl:flex-row">
              <div className="flex rounded-lg bg-gradient-to-r from-slate-900 to-slate-700 p-2 text-nowrap sm:flex-row md:gap-3 xl:px-4">
                <ul className="flex flex-col gap-4 pl-4 sm:flex-row xl:items-center">
                  <li>
                    <div className="h-4 w-50 animate-pulse rounded-full bg-[#3ea9ff]/90 sm:w-16"></div>
                  </li>
                </ul>
              </div>
              <div className="flex rounded-lg bg-gradient-to-r from-slate-900 to-slate-700 p-2 text-nowrap sm:flex-row md:gap-3 xl:px-4">
                <ul className="flex flex-col gap-4 pl-4 sm:flex-row xl:items-center">
                  <li>
                    <div className="h-4 w-50 animate-pulse rounded-full bg-[#3ea9ff]/90 sm:w-16"></div>
                  </li>
                  <li>
                    <div className="h-4 w-50 animate-pulse rounded-full bg-[#3ea9ff]/90 sm:w-16"></div>
                  </li>
                  <li>
                    <div className="h-4 w-50 animate-pulse rounded-full bg-[#3ea9ff]/90 sm:w-16"></div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ShowDetailsSkeleton;
