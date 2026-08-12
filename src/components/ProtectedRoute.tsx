import { Navigate, Outlet, useLocation } from 'react-router-dom'

type Role = 'attendee' | 'organizer' | 'staff' | 'admin'

export default function ProtectedRoute({ roles }: { roles?: Role[] }) {
  const location = useLocation()
  const token = localStorage.getItem('spot_token')
  const role = (localStorage.getItem('spot_role') || 'organizer') as Role
  if (!token) return <Navigate to="/auth/" state={{ from: location.pathname }} replace />
  if (roles && !roles.includes(role)) return <Navigate to="/events/" replace />
  return <Outlet />
}
