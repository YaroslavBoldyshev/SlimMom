import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

import PrivateRoute from './PrivateRoute/PrivateRoute';
import PublicRoute from './PublicRoute/PublicRoute';

import { SharedLayout } from './SharedLayout/SharedLayout';
import NotFound from '../pages/NotFound/NotFound';
// import Container from './Container/Container';

const Home = lazy(() => import('pages/Home/Home'));
const Login = lazy(() => import('pages/Login/Login'));
const Registration = lazy(() => import('pages/Registration/Registration'));
const Main = lazy(() => import('pages/Main/Main'));
const Dairy = lazy(() => import('pages/Dairy/Dairy'));
const Calculator = lazy(() => import('pages/Calculator/Calculator'));

export const App = () => (
  <>
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/main" element={<Main />} />
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/diary" element={<Dairy />} />
          <Route path="/calculator" element={<Calculator />} />
        </Route>
        <Route path="/" element={<PublicRoute />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </>
);
