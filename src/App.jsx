import { createBrowserRouter, RouterProvider } from "react-router"
import RootLayOut from "./components/RootLayOut";
import UserList from "./features/users/UserList";
import UserForm from "./features/users/UserForm";


export default function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayOut />,
      children: [
        {
          index: true,
          element: <UserList />
        },
        {
          path: 'add-user',
          element: <UserForm />
        }

      ]
    },


  ]);





  return <RouterProvider router={router} />
}
