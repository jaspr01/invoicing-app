import React from 'react'
import ReactDOM from 'react-dom/client'
import Login from './pages/login/Login.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './styles/index.css'
import { Routes } from '@/routes.ts'
import Overview from '@/pages/invoices/Overview.tsx'
import ProtectedRoute from "@/components/protectedRoute/ProtectedRoute.tsx";

const router = createBrowserRouter([
  // Auth routes
  { path: Routes.LOGIN, element: <Login /> },

  // Protected routes
  {
    path: '/',
    element: <ProtectedRoute />,
    children: [
      // Invoices
      { path: Routes.INVOICES, element: <Overview /> }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider {...{ router }} />
  </React.StrictMode>
)
