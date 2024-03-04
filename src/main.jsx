import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import FarmerDashboard from './pages/farmer/FarmerDashboard.jsx'
import FarmerPork from './pages/farmer/FarmerPork.jsx'
import FarmerAddProduct from './pages/farmer/FarmerAddProduct.jsx'



const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
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

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <RouterProvider router={router} />
    
  </React.StrictMode>,
);