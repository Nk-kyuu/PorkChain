import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Home from './pages/home/home.jsx'
import AdminDashboard from './pages/admin/adminDashboard.jsx'
import AdminAddUser from './pages/admin/adminAddUser.jsx'
import FarmerDashboard from './pages/FarmerDashboard.jsx'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/home',
    element: <Home />
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
    path: '/farmer',
    element: <FarmerDashboard/>
  }
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);