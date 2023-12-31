import React from 'react'
import ReactDOM from 'react-dom/client'
import Login from './pages/login/Login.tsx'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import './styles/index.css'
import { Routes } from '@/routes.ts'
import Overview from '@/pages/invoices/Overview.tsx'

const router = createBrowserRouter([
  // Default redirect to login page
  // TODO: redirect to invoices overview if authenticated
  { path: '/', element: <Navigate to={Routes.LOGIN} /> },

  // Auth routes
  { path: Routes.LOGIN, element: <Login /> },

  // TODO: add authenticated check on all routes except login
  // Invoices
  { path: Routes.INVOICES, element: <Overview /> }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider {...{ router }} />
  </React.StrictMode>
)
