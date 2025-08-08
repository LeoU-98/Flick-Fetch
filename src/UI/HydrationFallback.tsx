import Navbar from "../Navbar/Navbar";
import ShowDetailsSkeleton from "./ShowDetailsSkeleton";
import ShowListSkeleton from "./ShowListSkeleton";
import WatchListSkeleton from "./WatchListSkeleton";

export default function HydrationFallback() {
  const pathname = window.location.pathname;

  return (
    <>
      <Navbar />
      <main className="container mx-auto overflow-clip p-4 lg:px-20">
        {pathname.startsWith("/show") && <ShowListSkeleton />}
        {pathname.startsWith("/show-details") && <ShowDetailsSkeleton />}
        {pathname.startsWith("/watch-list") && <WatchListSkeleton />}
      </main>
    </>
  );
}
