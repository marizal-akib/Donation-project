import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Roots from './Components/Roots/Roots.jsx';
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx';
import Home from './Components/Home/Home.jsx';
import Donation from './Components/Donation/Donation.jsx';
import Statistics from './Components/Statistics/Statistics.jsx';
import DonationDetails from './Components/DonationCards/DonationDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots></Roots>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader: () => fetch('../public/donation.json')
      },
      {
        path:'/donation',
        element:<Donation></Donation>,
        loader: () => fetch('../public/donation.json')
      },
      {
        path:'/statistics',
        element:<Statistics></Statistics>,
        loader: () => fetch('../public/donation.json')
        
      },
      {
        path:'/donationD/:id',
        element:<DonationDetails></DonationDetails>,
        loader: () => fetch('../public/donation.json')

      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
