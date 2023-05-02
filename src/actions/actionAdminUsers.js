import { json } from 'react-router-dom';
import URL from '../consts/URL';
/**
 * The current action router function is used to process the data and send the desired request after the administrator updates deletes or creates a record.
 * Instead of using the standard form tag, the Form router element prevents the browser's default behaviour of automatically sending a request to the backend.
 * However, the current action function is used to process all form data and create the desired request configurations before sending a server request.
 * The route definition where the form exists also needs to include the action, which will contain all the data that was specified for the relevant part of the form.
 * @returns The user is directed to the main page if the request is successful; otherwise, handle the errors.
 */
async function action(request) {
    //1 Get all the data within the forms
    const data = await request.formData();
    let response;

    if (request.method === 'DELETE') {
        //1 Get all the data within the forms
        const usersIds = data.get('ids');
        //2 SEND REQUEST
        response = await fetch(`${URL}/api/v1/users/${usersIds}`, {
            method: 'DELETE',
            withCredentials: true,
            credentials: 'include',
        });

        //3 Return a new object because because 204 is a terminate operation, an empty object force the table to red-render
        //due to useActionData within the table
        if (response.status === 204) {
            return null;
        }

        //4 Parse the data into js objects.
        let responseData = await response.json();

        //5 Propagate the error further to the useActionData hook within the form, within the body are details about the errors.
        if (responseData.status === 'fail') {
            throw json({ message: responseData.message }, { status: response.status });
        }
        //6
        if (responseData.status === 'error') {
            //500 indicates that something went wrong on the backend
            throw json({ message: responseData.message }, { status: response.status });
        }
        return null;
    }

    let newUser;
    if (request.method === 'POST') {
        newUser = {
            firstName: data.get('fname'),
            lastName: data.get('lname'),
            email: data.get('email'),
            phoneNumber: data.get('phone'),
            password: data.get('password'),
            passwordConfirm: data.get('password'),
        };
    }
    if (request.method === 'PATCH') {
        newUser = {
            firstName: data.get('fname'),
            lastName: data.get('lname'),
            email: data.get('email'),
            phoneNumber: data.get('phone'),
        };
    }

    const id = data.get('id');

    console.log(newUser);

    //2 Send Request
    response = await fetch(`${URL}/api/v1/users/${id}`, {
        headers: { 'Content-Type': 'application/json' },
        method: request.method,
        withCredentials: true,
        credentials: 'include',
        body: JSON.stringify(newUser),
    });

    //3 Parse the data into js objects.
    const responseData = await response.json();

    //4 Propagate the error further to the useActionData hook within the form, within the body are details about the errors.
    if (responseData.status === 'fail') {
        return responseData?.message;
    }
    //5 Propagate the error into router error handler
    if (responseData.status === 'error') {
        //500 indicates taht something went wrong on the backend
        throw json({ message: responseData?.message }, { status: 500 });
    }
    //7 Everything went as expected
    return null;
}
export default action;
