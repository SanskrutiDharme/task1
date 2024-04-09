import React from "react";
import { useRoutes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Foremployers from "./pages/Foremployers";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Foremployers />},
    { path: "*", element: <NotFound /> },
   
  ]);

  return element;
};

export default ProjectRoutes;
