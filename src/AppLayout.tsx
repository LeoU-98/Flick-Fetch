import { Outlet } from "react-router";
import Navbar from "./Navbar/Navbar";

function AppLayout() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto p-4 lg:px-20">
        <Outlet />
      </main>
    </>
  );
}

export default AppLayout;
