import { createBrowserRouter, RouterProvider } from "react-router";
import AppLayout from "./UI/AppLayout";
import HydrationFallback from "./UI/HydrationFallback";
import ErrorComponent from "./Error/ErrorComponent";
import Welcome from "./UI/Welcome";
import ShowList from "./ShowList/ShowList";
import {
  showDetailsLoader,
  showListLoader,
  watchListLoader,
} from "./Utils/loaders";
import ShowDetails from "./ShowDetails/ShowDetails";
import WatchList from "./WatchList/WatchList";
import PageNotFound from "./UI/PageNotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    HydrateFallback: HydrationFallback,
    errorElement: <ErrorComponent />,
    children: [
      {
        index: true,
        element: <Welcome />,
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
