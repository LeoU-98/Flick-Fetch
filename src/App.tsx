import ShowList from "./ShowList/ShowList";

import Wellcome from "./UI/Wellcome";
import { showListLoader } from "./utils/loaders";
import { showDetailsLoader } from "./utils/loaders";
import ShowDetails from "./ShowDetails/ShowDetails";
import { createBrowserRouter, RouterProvider } from "react-router";
import PageNotFound from "./UI/PageNotFound";
import AppLayout from "./UI/AppLayout";
import ServerDown from "./UI/ServerDown";
import WatchedList from "./WatchedList/WatchedList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,

    children: [
      {
        index: true,
        element: <Wellcome />,
      },

      {
        path: "show/watchedList",
        element: <WatchedList />,
      },
      {
        path: "show/*",
        element: <ShowList />,
        loader: showListLoader,
        errorElement: <ServerDown />,
      },
      {
        path: "show/show-details/*",
        element: <ShowDetails />,
        loader: showDetailsLoader,
        errorElement: <ServerDown />,
      },
      {
        path: "*",
        element: <PageNotFound />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
