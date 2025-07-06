import { createBrowserRouter, RouterProvider } from "react-router"
import Home from "./pages/home/Home"
import RootLayOut from "./components/RootLayOut";
import MealItems from "./pages/meal_items/MealItems";


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
          path: 'mealCategory/:category',
          element: <MealItems />
        }
      ]
    },


  ]);





  return <RouterProvider router={router} />
}
