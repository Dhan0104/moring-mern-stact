import { createBrowserRouter } from "react-router"
import { RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Page1 from "./pages/home/nested/Page1";
import Page2 from "./pages/home/nested/Page2";

export default function App() {


  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
      children: [
        {
          index: true,
          element: <Page1 />
        },
        {
          path: 'page-2',
          element: <Page2 />
        }
      ]
    },
    {
      path: 'about',
      element: <About />
    },
    {
      path: 'contact',
      element: <Contact />
    }


  ]);



  return <RouterProvider router={router} />
}
