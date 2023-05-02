import { redirect } from 'react-router-dom';

/**
 * Function used to check if there is any user data stored within the local storage, and if the current token expire date is still valid.
 * If there is data related with the user within the local storage return true, otherwise null.
 * This function will be used to automatically update UI based on the user Auth status.
 *
 * @returns the user object if the user credential are still valid, "EXPIRED string" if the user exists but not valid, and null if the user data is not saved into the local storage.
 *
 */
export const getUserData = () => {
    getTokenDuration();
    const user = localStorage.getItem('user');
    const tokenDuration = getTokenDuration();

    //NOT SET
    if (!user) {
        return null;
    }
    //TOKEN EXPIRED
    if (tokenDuration < 0) {
        return 'EXPIRED';
    }
    //NOT EXPIRED
    return JSON.parse(user);
};

/**
 * Function used in together with router loader routes to provide an additional layer of protection for the website by
 * restricting access to some resources to only logged-in users.
 * Not logged in users tryng to access proteced resources will be redirect to log in.
 */
export const isUserAuthentificated = () => {
    const user = getUserData();
    console.log('HERE');
    if (!user) {
        return false;
    }
    return true;
};

/**
 * Function used in together with router loader routes to provide an additional layer of protection for the website by
 * restricting access to some resources to only logged-in users.
 * Not logged in users tryng to access proteced resources will be redirect to log in.
 */
export const redirectUserTo = (link) => {
    return redirect(link);
};

/**
 * Function used in together with router loader routes to provide an additional layer of protection for the website by
 * restricting access to some resources to only admin typed users.
 * Not admin in users tryng to access proteced resources will be redirectto the home page
 */
export const isUserAdmin = () => {
    const user = getUserData();

    if (user?.role === 'admin') {
        return true;
    }
    return false;
};

/**
 * Function used to deduct the current toimestampp from the token expiration timestamp, that is storen within the localstorage.
 * If the expiration time is still in the future, the result will be a positive value, oterwise a negative value
 * @returns {number}
 */
export const getTokenDuration = () => {
    //TOKEN TIME MILLISECONDS
    const tokenExpiringDate = localStorage.getItem('tokenExpiringDate');
    //CURRENT TIME MILLISECONDS
    const currentDateMilliseconds = new Date().getTime();
    //TOKEN TIME LEFT
    const tokenDuration = tokenExpiringDate - currentDateMilliseconds;
    return tokenDuration;
};
