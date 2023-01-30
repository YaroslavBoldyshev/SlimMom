import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { getIsLoggedIn } from 'redux/auth/auth-selectors';

export default function PublicRoute() {
  const IsLoggedIn = useSelector(getIsLoggedIn);
  return IsLoggedIn ? <Navigate to="/diary" /> : <Outlet />;
}
