import { Route, Routes } from 'react-router-dom';
// import { lazy } from 'react';

// import PrivateRoute from './PrivateRoute/PrivateRoute';
// import PublicRoute from './PublicRoute/PublicRoute';

import { SharedLayout } from './SharedLayout/SharedLayout';
import NotFound from '../pages/NotFound/NotFound';
import { Home } from 'pages/Home/Home';
import Login from 'pages/Login/Login';
import Registration from 'pages/Registration/Registration';
import Main from 'pages/Main/Main';
import Dairy from 'pages/Dairy/Dairy';
import Calculator from 'pages/Calculator/Calculator';

// const Home = lazy(() => import('pages/Home/Home'));
// const Login = lazy(() => import('pages/Login/Login'));
// const Registration = lazy(() => import('pages/Registration/Registration'));
// const Main = lazy(() => import('pages/Main/Main'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          {/* <Route path="/" element={<PrivateRoute />}> */}
          <Route path="/main" element={<Main />} />
          {/* </Route> */}
          {/* <Route path="/" element={<PublicRoute />}> */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/diary" element={<Dairy />} />
          <Route path="/calculator" element={<Calculator />} />
          {/* </Route> */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};
