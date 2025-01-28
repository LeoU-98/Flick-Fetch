import Navbar from "./Navbar/Navbar";
import { Outlet } from "react-router";

type AppLayoutProps = {
  setQueryText: React.Dispatch<React.SetStateAction<string>>;
};

function AppLayout({ setQueryText }: AppLayoutProps) {
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
