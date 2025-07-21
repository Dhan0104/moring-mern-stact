import { createBrowserRouter, RouterProvider } from "react-router"
import RootLayOut from "./components/RootLayOut";
import NowPlaying from "./features/now_playing/NowPlaying";

export default function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayOut />,
      children: [
        {
          index: true,
          element: <NowPlaying />

        },
      ]
    },


  ]);





  return <RouterProvider router={router} />
}
