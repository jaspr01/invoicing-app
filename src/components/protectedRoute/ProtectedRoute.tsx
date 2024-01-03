import {Navigate, Outlet, useLocation, useNavigate} from "react-router-dom"
import {isAuthenticated} from "@/lib/auth.ts";
import {useEffect} from "react";
import {Routes} from "@/routes.ts";

const ProtectedRoute = () => {
  // React router
  const location = useLocation()
  const navigate = useNavigate()

  // Constants
  const authenticated = isAuthenticated()

  /**
   * Triggered everytime authenticated, location or navigate changes
   * Redirects to invoices if user is authenticated & pathname is '/'
   */
  useEffect(() => {
    if (authenticated && location.pathname === '/') {
      navigate(Routes.INVOICES)
    }
  }, [authenticated, location, navigate])

  return authenticated
    ? <Outlet />
    : <Navigate to={Routes.LOGIN} state={{ from: location }} replace />
}

export default ProtectedRoute
