import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Register from './pages/register/register.jsx'
import ConsumerDetail from './pages/consumerDetail/consumerDetail.jsx'
import FarmerAccount from './pages/farmerAccount/farmerAc.jsx'
import RetailerAccount from './pages/retailerAccount/retailerAcc.jsx'
import SlaughterhouseAccount from './pages/slaughterhouseAccount/slaughterhouseAcc.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },

  {
    path: '/register',
    element: <Register />,
  },

  {
    path: '/consumerDetail',
    element: <ConsumerDetail />,
  },
  {
    path: '/farmerAccount',
    element: <FarmerAccount />,
  },

  {
    path: '/retailerAccount',
    element: <RetailerAccount />,
  },

  {
    path: '/slaughterhouseAccount',
    element: <SlaughterhouseAccount />,
  },


  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);