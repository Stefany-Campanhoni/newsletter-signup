import "./App.css"

import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import Signup from "./pages/Signup";
import Success from "./pages/Success";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Signup />,
  },
  {
    path: "/success",
    element: <Success  />,
  },
  {
    path: "*",
    element: <Navigate to={"/"} />
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
