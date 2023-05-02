import { redirect } from 'react-router-dom';
import URL from '../consts/URL';
/**
 * The current action router function is used to process the data and send the desired request after the deteleMe form has been submitted.
 * Instead of using the standard form tag, the Form router element prevents the browser's default behaviour of automatically sending a request to the backend.
 * However, the current action function is used to process all form data and create the desired request configurations before sending a server request.
 * The route definition where the form exists also needs to include the action, which will contain all the data that was specified for the relevant part of the form.
 * @returns The user is directed to the main page if the request is successful; otherwise, handle the errors.
 */
const action = async () => {
    localStorage.removeItem('user');
    localStorage.removeItem('tokenExpiringDate');

    //1 SEND DELETE REQUEST
    const response = await fetch(`${URL}/api/v1/users/deleteMe`, {
        method: 'DELETE',
        withCredentials: true,
        credentials: 'include',
    });

    //2 Redirect because because 204 is a terminate operation, and won't allow for processign the response
    if (response.status === 204) {
        alert('Your account has been successfully deleted');
        return redirect('/');
    }

    //3 Parse the data into js objects.
    const responseData = await response.json();

    //4 Propagate the error further to the useActionData hook within the form, within the body are details about the errors.
    if (responseData.status === 'fail') {
        alert(responseData.message);
        return redirect('/');
    }
    if (responseData.status === 'error') {
        throw new Error(responseData.message);
    }

    return redirect('/');
};

export default action;
