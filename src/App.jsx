import { createBrowserRouter, RouterProvider } from "react-router"
import Home from "./pages/home/Home"
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import RootLayOut from "./components/RootLayOut";
import Product from "./pages/products/Product";

export default function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayOut />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: 'about',
          element: <About />
        },
        {
          path: 'contact',
          element: <Contact />
        }
      ]
    },


  ]);





  return <RouterProvider router={router} />
}
