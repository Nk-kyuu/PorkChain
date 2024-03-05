import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import AdminDashboard from './pages/admin/adminDashboard.jsx'
import AdminAddUser from './pages/admin/adminAddUser.jsx'
import Register from './pages/register/register.jsx'
import ConsumerDetail from './pages/consumerDetail/consumerDetail.jsx'
import FarmerAccount from './pages/farmerAccount/farmerAc.jsx'
import RetailerAccount from './pages/retailerAccount/retailerAcc.jsx'
import SlaughterhouseAccount from './pages/slaughterhouseAccount/slaughterhouseAcc.jsx'
import FarmerDashboard from './pages/farmer/FarmerDashboard.jsx'
import FarmerPork from './pages/farmer/FarmerPork.jsx'
import FarmerAddProduct from './pages/farmer/FarmerAddProduct.jsx'
import SlaughterhouseDashboard from './pages/slaughterhouse/slaughterhouseDashboard.jsx'
import SlaughterhousePork from './pages/slaughterhouse/slaughterhousePork.jsx'
import SlaughterhouseAddProduct from './pages/slaughterhouse/slaughterhouseAddProduct.jsx'
import RetailerDashboard from './pages/retailer/retailerDashboard.jsx'
import Pork from './pages/retailer/Pork.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/adminDashboard',
    element: <AdminDashboard/>
  },
  {
    path: '/adminAddUser',
    element: <AdminAddUser/>
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


  
  {
    path: '/farmerDashboard',
    element: <FarmerDashboard />,
  },
  {
    path: '/farmerPork',
    element: <FarmerPork />,
  },
  {
    path: '/farmerAddProduct',
    element: <FarmerAddProduct />,
  },
  {
    path: '/slaughterDashboard',
    element: <SlaughterhouseDashboard />,
  },
  {
    path: '/slaughterhousePork',
    element: <SlaughterhousePork />,
  },
  {
    path: '/slaughterhouseAddProduct',
    element: <SlaughterhouseAddProduct />,
  },
  {
    path: '/retailerDashboard',
    element: <RetailerDashboard />,
  },
  {
    path: '/pork',
    element: <Pork/>,
  },
 
  
  

  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <RouterProvider router={router} />
    
  </React.StrictMode>,
);