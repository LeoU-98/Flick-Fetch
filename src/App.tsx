import ShowList from "./ShowList/ShowList";
import AppLayout from "./AppLayout";
import Wellcome from "./Wellcome";
import { showListLoader } from "./utils/loaders";
import { showDetailsLoader } from "./utils/loaders";
import ShowDetails from "./ShowDetails/ShowDetails";
import { createBrowserRouter, RouterProvider } from "react-router";
import PageNotFound from "./PageNotFound";

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
        path: "show/*",
        element: <ShowList />,
        loader: showListLoader,
      },
      {
        path: "show/show-details/*",
        element: <ShowDetails />,
        loader: showDetailsLoader,
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
