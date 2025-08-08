import { useRouteError } from "react-router";

import Navbar from "../Navbar/Navbar";

import ServerDown from "./ServerDown";
import BadRequest from "./BadRequest";
import { CustomError } from "../Alltypes";

export default function ErrorComponent() {
  const error = useRouteError();

  return (
    <>
      <Navbar />
      <main className="container mx-auto overflow-clip p-4 lg:px-20">
        {(error as CustomError).status === 500 && <ServerDown />}
        {(error as CustomError).status === 400 && <BadRequest />}
      </main>
    </>
  );
}
