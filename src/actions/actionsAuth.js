import { redirect } from 'react-router-dom';

/**
 * The current action router function is used to process the data and send the desired request after the loginForm,signupForm or forgotPassword form have been submitted.
 * Instead of using the standard form tag, the Form router element prevents the browser's default behaviour of automatically sending a request to the backend.
 * However, the current action function is used to process all form data and create the desired request configurations before sending a server request.
 * The route definition where the form exists also needs to include the action, which will contain all the data that was specified for the relevant part of the form.
 * @returns The user is directed to the main page if the request is successful; otherwise, handle the errors.
 */
async function action({ request }) {
    //1 Get the search params of the current page, URL default constructor provided by the browser
    const searchParams = new URL(request.url).searchParams;
    const mode = searchParams.get('mode');
    //2 Handle only the following forms
    if (mode !== 'login' && mode !== 'signup' && mode !== 'forgot') {
        return 'Something went wrong';
    }
    //3 Get all the data within the forms
    const data = await request.formData();
    let userData;

    //SIGN UP
    if (mode === 'signup') {
        userData = {
            firstName: data.get('fname'),
            lastName: data.get('lname'),
            email: data.get('email'),
            phoneNumber: data.get('phone'),
            password: data.get('password'),
            passwordConfirm: data.get('rpassword'),
        };
    }
    //LOGIN
    if (mode === 'login') {
        userData = {
            email: data.get('email'),
            password: data.get('password'),
        };
    }

    //FORGOT
    if (mode === 'forgot') {
        userData = {
            email: data.get('email'),
        };
    }
    //SEND REQUEST
    const response = await fetch(`http://127.0.0.1:8000/api/v1/users/${mode}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
        credentials: 'include',
        body: JSON.stringify(userData),
    });

    //4 Parse the data into js objects.
    const responseData = await response.json();

    //5 Propagate the error further to the useActionData hook within the form, within the body are details about the errors.
    if (responseData.status === 'fail') {
        return responseData.message;
    }
    //5.1 Propagate the error into router error handler
    if (responseData.status === 'error') {
        throw new Error(`${responseData.message}`);
    }

    //6 Set user to data to the local Storage, and the token expiration time
    //  The JWT token cannot be accessed programatically by the client, because it is sent as a http cookie
    if (mode === 'signup' || mode === 'login') {
        localStorage.setItem('user', JSON.stringify(responseData.data.user));
        localStorage.setItem('tokenExpiringDate', responseData.data.tokenExpiringDate);
    }

    //7 Everything went as expected
    return redirect('/');
}

export default action;
