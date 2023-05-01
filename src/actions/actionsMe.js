import { json } from 'react-router-dom';

/**
 * The current action router function is used to process the data and send the desired request after the updateMe form have been submitted.
 * Instead of using the standard form tag, the Form router element prevents the browser's default behaviour of automatically sending a request to the backend.
 * However, the current action function is used to process all form data and create the desired request configurations before sending a server request.
 * The route definition where the form exists also needs to include the action, which will contain all the data that was specified for the relevant part of the form.
 * @returns The user is directed to the main page if the request is successful; otherwise, handle the errors.
 */
async function action(request) {
    //1 Get the search params of the current page, URL default constructor provided by the browser
    const searchParams = new URL(request.url).searchParams;
    const tab = searchParams.get('tab');
    //2 Get all the data within the forms
    const data = await request.formData();
    let userData;
    let response;
    switch (tab) {
        case 'me': {
            userData = {
                firstName: data.get('fname'),
                lastName: data.get('lname'),
                phoneNumber: data.get('phone'),
            };
            //SEND REQUEST
            response = await fetch(`http://127.0.0.1:8000/api/v1/users/updateMe`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                withCredentials: true,
                credentials: 'include',
                body: JSON.stringify(userData),
            });
        }
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
    return null;
}

export default action;
