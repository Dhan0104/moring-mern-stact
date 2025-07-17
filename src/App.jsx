import { createBrowserRouter, RouterProvider } from "react-router"
import UserList from "./app/features/user/UserList";
import RootLayOut from "./components/RootLayOut";
import Home from "./app/features/user/Userform";


export default function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayOut />,
      children: [
        {
          index: true,
          element: <Userform />
        },
        {
          path: 'add-user',
          element: <Userform />
        }
      
      ]
    },


  ]);





  return <RouterProvider router={router} />
}