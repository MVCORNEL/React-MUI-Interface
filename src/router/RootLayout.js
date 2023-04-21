import { Outlet, useSubmit } from 'react-router-dom';
import React from 'react';
import Navbar from '../layout/navigation/Navbar';
import Footer from '../layout/footer/Footer';
import { useEffect } from 'react';
import { getTokenDuration, getUserData } from '../auth/user';
import { CssBaseline } from '@mui/material';

import PushFooterBottomBox from '../ui/PushFooterBottomBox';
/**
 * The root component where all the child routes are render, within the OUTLET element.
 * The RootLayout will be used as a place holder for all its children componenets.
 * Every single page of the appliaction will respect this structure.
 * Within this layout will be managed user authentification state as being logged in or not, based on the expire token time.
 * When to token expired, the user data will be wipped out the system, and a request to the server will be made, on order to delete the JWT token from the http cookie.
 *
 */
function RootLayout() {
    //Manage TOKEN EXPIRATION, by setting a timer when the application is first run
    const user = getUserData();
    //Used to programatically submit a form
    const submit = useSubmit();
    //Function that executes only once, and only when one of the one its dependecy variables is changed
    //Very important that a cleanup function to be used, otherwise this function might execute multiple times.
    //When the user logges in and out multiple times, the timer will be kept, has to be remove otherwise will excute based on the old expiration time token.
    useEffect(() => {
        //There is not user to be logged out, skip
        if (!user) {
            return;
        }
        //There is a user but its token validation date expired
        if (user === 'EXPIRED') {
            submit(null, { action: '/logout', method: 'post' });
            return;
        }
        const tokenDuration = getTokenDuration();
        //There is a user and the token is still valid, set a logout timer based on the user token's expriation time left.
        const timeout = setTimeout(() => {
            //Automatically post the submit form logic if the token expired.
            submit(null, { action: '/logout', method: 'post' });
        }, tokenDuration);

        //cleanup function, this will work as a cleanup effect before use effect executes this function
        //expects for the very first time when it runs
        return () => {
            clearTimeout(timeout);
        };
    }, [user, submit]);

    return (
        <PushFooterBottomBox
            sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
                '& > *:last-child': {
                    marginTop: 'auto',
                },
            }}
        >
            <CssBaseline />
            <Navbar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </PushFooterBottomBox>
    );
}

export default RootLayout;
