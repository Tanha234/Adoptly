import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import Root from './Root';
import About from './components/About/About';
import Pets from './components/Pets/Pets';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
 
    children: [
      {
        path: "/",
        element: <Home />,
      
      },
      {
        path: "/about",
        element: <About />,
      
      },
      {
        path: "/pets",
        element: <Pets />,
      
      },
    ],
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
