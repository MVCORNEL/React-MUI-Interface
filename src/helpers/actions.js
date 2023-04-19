import { redirect } from 'react-router-dom';

/**
 * After a form is submitted, an action router function is used to process the data and forward the desired request.
 * By using the router Form tag, you can prevent the browser from sending a request to the backend by default * but it will still give the request to the function that will be directly in charge of the subsequent actions.
 * Additionally, the action needs to be added to the route definition. * action will include all the data as specified for the part of the form.
 * @param {object} request object containing all the details related with the submitted form.
 * @returns an error string that will be displayed within the used form coming from the server. If the request is successful redirect to the main page.
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
        headers: { 'Content-Type': 'application/json', Authorization: 'my-auth-token' },
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

    //6 Everything went as expected
    return redirect('/');
}

export default action;
