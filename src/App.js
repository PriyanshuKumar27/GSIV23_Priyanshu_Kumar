import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ListPage from "./pages/ListPage";
import Home from "./components/Home";
import ErrorPage from "./pages/ErrorPage";
import DetailsPage from "./pages/DetailsPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <ListPage /> },
        { path: ":movieId", element: <DetailsPage /> },
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
