import ShowList from "./ShowList/ShowList";
import AppLayout from "./AppLayout";
import Wellcome from "./Wellcome";
import { loader as showListLoader } from "./ShowList/ShowList";
import { loader as showLoader } from "./ShowDetails/ShowDetails";
import ShowDetails from "./ShowDetails/ShowDetails";
import { createBrowserRouter, RouterProvider } from "react-router";

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
        loader: showLoader,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
