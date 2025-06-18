
import { createBrowserRouter, Router } from 'react-router'
import { RouterProvider } from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/about/about';
import Contact from './pages/contact/contact';
import Page2 from './pages/home/Nested/Page2';
import Page1 from './pages/home/Nested/page1';
import RootLayout from './components/RootLayout';

export default function App() {
   const router=createBrowserRouter([


{
  path: '/',
element : <RootLayout/>,
children: [
  {
    index: true,
    element: <Home />,
  },
  {
    path: 'page1',
    element:<Page1 />
},
 {
    path: 'Page2',
    element:<Page2 />
},
{path: 'about',
element: <About />,
},
{path: 'contact',
element: <Contact />,
}
]},


   ]);
   return<RouterProvider router={router}/>
    }
