import { createBrowserRouter, RouterProvider } from "react-router"
import RootLayOut from "./components/RootLayOut";
import BlogList from "./features/blogs/BlogList";


export default function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayOut />,
      children: [
        {
          index: true,
          element: <BlogList />
        },


      ]
    },


  ]);





  return <RouterProvider router={router} />
}
