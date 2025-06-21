import { createBrowserRouter, RouterProvider } from "react-router"
import Home from "./pages/home/Home"
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import RootLayOut from "./components/RootLayOut";


export default function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayOut />,
      children: [
        {
          index: true,
          element: <Home />
        }
      ]
    },


  ]);





  return <RouterProvider router={router} />
}
