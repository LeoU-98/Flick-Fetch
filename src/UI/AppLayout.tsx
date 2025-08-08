import { Outlet, useNavigation } from "react-router";
import Navbar from "../Navbar/Navbar";
import ShowListSkeleton from "./ShowListSkeleton";
import WatchListSkeleton from "./WatchListSkeleton";
import ShowDetailsSkeleton from "./ShowDetailsSkeleton";

function AppLayout() {
  const navigation = useNavigation();
  const pathName = navigation.location?.pathname;
  const state = navigation.state;

  return (
    <>
      <Navbar />
      <main className="container mx-auto overflow-clip p-4 lg:px-20">
        {state === "loading" && pathName?.startsWith("/show") && (
          <ShowListSkeleton />
        )}
        {state === "loading" && pathName?.startsWith("/watch-list") && (
          <WatchListSkeleton />
        )}
        {state === "loading" && pathName?.startsWith("/show-details") && (
          <ShowDetailsSkeleton />
        )}
        {state === "idle" && <Outlet />}
      </main>
    </>
  );
}

export default AppLayout;
