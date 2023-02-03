import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

import PrivateRoute from './PrivateRoute/PrivateRoute';
import PublicRoute from './PublicRoute/PublicRoute';

import { SharedLayout } from './SharedLayout/SharedLayout';
import NotFound from '../pages/NotFound/NotFound';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSidSelector } from 'redux/auth/auth-selectors';
import { refresh } from 'redux/auth/auth-operations';
import { Suspense } from 'react';
import Loader from './Loader/Loader';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = lazy(() => import('pages/Home/Home'));
const Login = lazy(() => import('pages/Login/Login'));
const Registration = lazy(() => import('pages/Registration/Registration'));
// const Main = lazy(() => import('pages/Main/Main'));
const DairyPage = lazy(() => import('pages/DairyPage/DairyPage'));
const Calculator = lazy(() => import('pages/Calculator/Calculator'));

export const App = () => {
  const dispatch = useDispatch()
  const sesId = useSelector(getSidSelector);

  useEffect(() => {
    dispatch(refresh({sid: sesId}))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch])

  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            {/* <Route path="/main" element={<Main />} /> */}
            <Route path="/" element={<PrivateRoute />}>
              <Route path="/diary" element={<DairyPage />} />
              <Route path="/calculator" element={<Calculator />} />
            </Route>
            <Route path="/" element={<PublicRoute />}>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Registration />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
        <ToastContainer/>
      </Suspense>
    </>
  );
};
