import { json } from 'react-router-dom';
import store from '../store/store';
import URL from '../consts/URL';
/**
 * The current action router function is used to process the data and send the desired request after the updateMe form have been submitted.
 * Instead of using the standard form tag, the Form router element prevents the browser's default behaviour of automatically sending a request to the backend.
 * However, the current action function is used to process all form data and create the desired request configurations before sending a server request.
 * The route definition where the form exists also needs to include the action, which will contain all the data that was specified for the relevant part of the form.
 * @returns The user is directed to the main page if the request is successful; otherwise, handle the errors.
 */
async function action(request) {
    //1 Get all the data within the forms
    const data = await request.formData();
    const image = store.getState().store.imgStore;
    const form = new FormData();
    form.append('firstName', data.get('fname'));
    form.append('lastName', data.get('lname'));
    form.append('phoneNumber', data.get('phone'));

    if (image) {
        form.append('image', image);
    }

    //SEND REQUEST
    let response = await fetch(`${URL}/api/v1/users/updateMe`, {
        method: 'PATCH',
        withCredentials: true,
        credentials: 'include',
        body: form,
    });

    //3 Return a new object because because 204 is a terminate operation, an empty object force the table to red-render
    //due to useActionData within the table
    if (response.status === 204) {
        return null;
    }

    //3 Parse the data into js objects.
    const responseData = await response.json();

    //4 Propagate the error further to the useActionData hook within the form, within the body are details about the errors.
    if (responseData.status === 'fail') {
        return responseData.message;
    }
    //5.1 Propagate the error into router error handler
    if (responseData.status === 'error') {
        //500 indicates taht something went wrong on the backend
        throw json({ message: responseData.message }, { status: 500 });
    }
    //6 Set user to data to the local Storage update jus the user's interface data, based on the new date
    localStorage.setItem('user', JSON.stringify(responseData.data.user));
    //7 Everything went as expected
    alert('User successfully updated');
    return null;
}

export default action;
