import Navbar from "./Navbar";
import { Outlet } from "react-router";

function AppLayout({
  setQueryText,
}: {
  setQueryText: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <>
      <Navbar onQueryText={setQueryText} />
      <main className="container mx-auto p-4 px-20">
        <Outlet />
      </main>
    </>
  );
}

export default AppLayout;
