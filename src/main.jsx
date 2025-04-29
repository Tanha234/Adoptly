import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import Root from './Root';
import About from './components/About/About';
import Pets from './components/Pets/Pets';
import PetDetails from './components/PetDetails/PetDetails';
import ContactUs from './components/ContactUs/ConatctUs';
import PetDonationForm from './components/PetDonation/PetDonation';
import VolunteerSection from './components/Volunteer/Volunteer';
import BlogCategories from './components/Blogs/Blogs';
import AdoptionForm from './components/AdoptionForm/AdoptionForm';
import AdoptionEvent from './components/Events/Events';
import Login from './components/Login/Login';



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
      
      {
        path: "/pet/:id",
        element: <PetDetails />,
      
      },
      {
        path: "/contact",
        element: <ContactUs />,
      
      },
      {
        path: "/donation",
        element: <PetDonationForm />,
      
      },
      {
        path: "/volunteer",
        element: <VolunteerSection />,
      
      },
      {
        path: "/adopt/:id",
        element: <AdoptionForm />,
      
      },
      
      {
        path: "/blogs",
        element: <BlogCategories />,
      
      },
      {
        path: "/events",
        element: <AdoptionEvent/>,
      
      },
      {
        path: "/login",
        element: <Login/>,
      
      },
     
    ],
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
