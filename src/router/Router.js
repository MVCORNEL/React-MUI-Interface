import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import RootLayout from './RootLayout';
import ErrorPage from '../pages/ErrorPage';
import Home from '../pages/Home';
import DoubleGlazed from '../pages/DoubleGlazed';
import Portofolio from '../pages/Portofolio';
import AboutUs from '../pages/AboutUs';
import UserLayout from '../pages/User/UserLayout';
import UserMessages from '../pages/User/UserMessages';
import UserProfile from '../pages/User/UserSettings';
import Logout from '../pages/Auth/Logout';
import Auth from '../pages/Auth/Auth';

/**
 * The router component responsible for all tge route configuration functionality
 * The router contains a RootLayout element that behaves a place holder where each route will be displayed within
 *
 */
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
            <Route path="windows" element={<DoubleGlazed />} />
            <Route path="user" element={<UserLayout />}>
                <Route path="messages" element={<UserMessages />} />
                <Route path="profile" element={<UserProfile />} />
            </Route>
            <Route path="logout" element={<Logout />} />
            <Route path="auth" element={<Auth />} />
        </Route>
    )
);

const Router = () => {
    return <RouterProvider router={router} />;
};

export default Router;
