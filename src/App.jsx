
import { createBrowserRouter, Router } from 'react-router'
import { RouterProvider } from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/about/about';
import Contact from './pages/contact/contact';

import RootLayout from './components/RootLayout';
import Menu from './pages/Menu/Menu';

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
  
{path: 'about',
element: <About />,
},
{path: 'contact',
element: <Contact />,
},
{path: 'menu',
element: <Menu/>,
},
]},


   ]);
   return<RouterProvider router={router}/>
    }
