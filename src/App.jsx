import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";

import Home from "./pages/Home";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
};

export default App;
