import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import RootLayout from './RootLayout';
import ErrorPage from '../pages/ErrorPage';
import Home from '../pages/Home';
import Products from '../pages/Products';
import Portofolio from '../pages/Portofolio';
import AboutUs from '../pages/AboutUs';
import UserLayout from '../pages/User/UserLayout';
import UserMessages from '../pages/User/UserMessages';
import UserProfile from '../pages/User/UserSettings';
import Logout from '../pages/Auth/Logout';
import authActions from '../helpers/actions';
import Auth from '../pages/Auth';

/**
 * The router component responsible for all the route configuration functionality
 * The router contains a RootLayout element that behaves a place holder where each route will be displayed.
 * createBrowser and createRoutesFromElements were used  instead of JSX Route/Routes elements because enables new Router 6.4 features
 */
const router = createBrowserRouter(
    //Create routes from JSX ELEMENTS
    createRoutesFromElements(
        <Route path="/" errorElement={<ErrorPage />} loader={null} id="root">
            <Route element={<RootLayout />}>
                {/* turn the so called route into an index route making it the default route */}
                <Route index={true} element={<Home />} />
                <Route path="about" element={<AboutUs />} />
                <Route path="portofolio" element={<Portofolio />} />
                <Route path="products" element={<Products />} />
                <Route path="user" element={<UserLayout />}>
                    <Route path="messages" element={<UserMessages />} />
                    <Route path="profile" element={<UserProfile />} />
                </Route>
                <Route path="logout" element={<Logout />} />
            </Route>
            {/* All the forms used with Form tag submission handling will be redirect to authAction*/}
            <Route path="auth" element={<Auth />} action={authActions} />
        </Route>
    )
);

const Router = () => {
    return <RouterProvider router={router} />;
};

export default Router;
