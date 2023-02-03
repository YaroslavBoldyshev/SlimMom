import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { getIsLoggedIn } from 'redux/auth/auth-selectors';

export default function PrivateRoute() {
  const IsLoggedIn = useSelector(getIsLoggedIn);
  return IsLoggedIn ? <Outlet /> : <Navigate to="/login" />;
}
