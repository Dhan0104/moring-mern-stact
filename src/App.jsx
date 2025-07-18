import { createBrowserRouter, RouterProvider } from "react-router"
import RootLayOut from "./components/RootLayOut";
import BlogList from "./features/blogs/BlogList";
import BlogForm from "./features/blogs/BlogForm";


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
        {
          path: 'add-form',
          element: <BlogForm />
        }
      ]
    },


  ]);





  return <RouterProvider router={router} />
}
