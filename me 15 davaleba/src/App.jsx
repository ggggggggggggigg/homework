import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { useState } from 'react'
import { RootLayout,Home,Css,Django,Git,GitHub,Html,Python,NotFound } from "./pages";
import './App.css'


function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="/css" element={<Css />} />
        <Route path="/django" element={<Django />} />
        <Route path="/git" element={<Git />} />
        <Route path="/gitHub" element={<GitHub />} />
        <Route path="/html" element={<Html />} />
        <Route path="/python" element={<Python />} />
        <Route path="*" element={<NotFound />} />
      </Route>,
    ),
  );

  return <RouterProvider router={router} />;

}

export default App








    



