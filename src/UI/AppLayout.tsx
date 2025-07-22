import { Outlet, useNavigation } from "react-router";
import Navbar from "../Navbar/Navbar";
import ShowListSkeleton from "./ShowListSkeleton";
import ShowDetailsSkeleton from "./ShowDetailsSkeleton";

function AppLayout() {
  const navigation = useNavigation();

  const pathName = navigation.location?.pathname;
  const State = navigation.state;

  return (
    <>
      <Navbar />
      <main className="container mx-auto p-4 lg:px-20">
        {State === "loading" && pathName === "/show/" && <ShowListSkeleton />}
        {State === "loading" && pathName === "/show/show-details/" && (
          <ShowDetailsSkeleton />
        )}
        {State === "idle" && <Outlet />}
      </main>
    </>
  );
}

export default AppLayout;
