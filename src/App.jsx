import React from 'react'
import Home from './pages/Home'
import { HomeContainer } from './pages/Home.styles';

import {createBrowserRouter, RouterProvider} from "react-router-dom";

const rotas = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  }
]);

export default function () {
  return (
    <RouterProvider router={rotas}/>
  )
}
