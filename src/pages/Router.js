import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import RootLayout from './RootLayout';
import ErrorPage from './ErrorPage';
import Home from './Home';
import CurvingWindows from './CurvingWindows';
import Portofolio from './Portofolio';
import AboutUs from './AboutUs';
import Auth from './Auth';

//createBrowser and createRoutesFromElements were used  instead of JSX Route/Routes elements because enables new Router 6.4 features
const router = createBrowserRouter(
  //Create routes from JSX ELEMENTS
  createRoutesFromElements(
    //Route layout uses the Outlet component, which will act like a placeholder entry point where all routes will be added
    <Route path="/" element={<RootLayout />} errorElement={<ErrorPage />}>
      {/* turn the so called route into an index route making it the default route */}
      <Route index={true} element={<Home />} />
      <Route path="about" element={<AboutUs />} />
      <Route path="auth" element={<Auth />} />
      <Route path="portofolio" element={<Portofolio />} />
      <Route path="windows" element={<CurvingWindows />} />
    </Route>
  )
);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
