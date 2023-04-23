import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import RootLayout from './RootLayout';
import ErrorPage from '../pages/ErrorPage';
import Home from '../pages/Home';
import Products from '../pages/Products';
import Portofolio from '../pages/Portofolio';
import AboutUs from '../pages/AboutUs';
import User from '../pages/User';
import authActions from '../auth/actionsAuth';
import userActions from '../auth/actionsUser';
import logoutAction from '../auth/actionLogout';
import Auth from '../pages/Auth';
import { checkUserIsAuthentificated, getUserData } from '../auth/user';

/**
 * The router component responsible for all the route configuration functionality
 * The router contains a RootLayout element that behaves a place holder where each route will be displayed.
 * createBrowser and createRoutesFromElements were used  instead of JSX Route/Routes elements because enables new Router 6.4 features
 */
const router = createBrowserRouter(
    //Create routes from JSX ELEMENTS
    createRoutesFromElements(
        //Route layout uses the Outlet component, which will act like a placeholder entry point where all routes will be added
        //Loader used to look at the cookie and extract it, automatically re-evalaute if the logout
        //The id is given in order to be easily accessed in other child elements with by using useRouteLoaderData() hook.
        <Route path="/" errorElement={<ErrorPage />} loader={getUserData} id="root">
            <Route element={<RootLayout />}>
                {/* turn the so called route into an index route making it the default route */}
                <Route index={true} element={<Home />} />
                <Route path="about" element={<AboutUs />} />
                <Route path="portofolio" element={<Portofolio />} />
                <Route path="products" element={<Products />} />
                {/* RESTRICTING ACCESS FOR THE USER ROUTE AND ITS CHILDREN FOR THE LOGGEN IN US */}
                <Route path="user" element={<User />} loader={checkUserIsAuthentificated} action={userActions} />
            </Route>
            {/* All the forms used with Form tag submission handling will be redirect to authAction*/}
            <Route path="auth" element={<Auth />} action={authActions} />
            <Route path="logout" action={logoutAction} />
        </Route>
    )
);

const Router = () => {
    return <RouterProvider router={router} />;
};

export default Router;
