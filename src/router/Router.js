import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import RootLayout from './RootLayout';
import ErrorPage from '../pages/ErrorPage';
import Home from '../pages/Home';
import Products from '../pages/Products';
import Portofolio from '../pages/Portofolio';
import AboutUs from '../pages/AboutUs';
import User from '../pages/User';
import Product from '../pages/Product';
import authActions from '../actions/actionsAuth';
import actionProfileController from '../actions/actionProfileController';
import actionWriteReview from './../actions/actionWriteReview';
import logoutAction from '../actions/actionLogout';
import deleteAction from '../actions/actionDeleteMe';
import productLoader from '../actions/loaderProduct';
import profileLoader from '../actions/loaderProfile';
import Auth from '../pages/Auth';
import { getUserData } from '../auth/user';
import { isUserAuthentificated, isUserAdmin, redirectUserTo } from '../auth/user';

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
                <Route path="product/:productSlug" loader={productLoader} action={actionWriteReview} element={<Product />} />
                {/* RESTRICTING ACCESS FOR THE USER ROUTE AND ITS CHILDREN FOR THE LOGGEN IN US */}
                <Route
                    path="user"
                    element={<User />}
                    loader={({ request, params }) => {
                        const isAuth = isUserAuthentificated();
                        //non-auth user cannpt access this route
                        if (isAuth) {
                            const isAdmin = isUserAdmin();
                            const searchParams = new URL(request.url).searchParams;
                            const tab = searchParams.get('tab');
                            //ADMIN ROUTES CA CAN ACCESSED ONLY BY ADMINISTRATOR
                            if (tab === 'products' || tab === 'users') {
                                if (!isAdmin) {
                                    return redirectUserTo('/auth?mode=login');
                                }
                            }
                            return profileLoader({ params });
                        } else {
                            return redirectUserTo('/auth?mode=login');
                        }
                    }}
                    action={actionProfileController}
                />
            </Route>
            {/* All the forms used with Form tag submission handling will be redirect to authAction*/}
            <Route path="auth" element={<Auth />} action={authActions} />
            <Route path="logout" action={logoutAction} />
            <Route path="deleteMe" action={deleteAction} />
        </Route>
    )
);

const Router = () => {
    return <RouterProvider router={router} />;
};

export default Router;
