import ShowList from "./ShowList/ShowList";
import Wellcome from "./UI/Wellcome";
import { showListLoader, watchListLoader } from "./Utils/loaders";
import { showDetailsLoader } from "./Utils/loaders";
import ShowDetails from "./ShowDetails/ShowDetails";
import { createBrowserRouter, RouterProvider } from "react-router";
import PageNotFound from "./UI/PageNotFound";
import AppLayout from "./UI/AppLayout";
import WatchList from "./WatchList/WatchList";
import HydrationFallback from "./UI/HydrationFallback";
import ErrorComponent from "./Error/ErrorComponent";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    HydrateFallback: HydrationFallback,
    errorElement: <ErrorComponent />,
    children: [
      {
        index: true,
        element: <Wellcome />,
      },

      {
        path: "show",
        element: <ShowList />,
        loader: showListLoader,
      },
      {
        path: "show-details",
        element: <ShowDetails />,
        loader: showDetailsLoader,
      },
      {
        path: "watch-list",
        element: <WatchList />,
        loader: watchListLoader,
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
