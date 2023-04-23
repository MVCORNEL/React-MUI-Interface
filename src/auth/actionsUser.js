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
    const tab = searchParams.get('tab');
    //2 Handle only the following forms
    if (tab !== 'me') {
        return 'Something went wrong';
    }
    //3 Get all the data within the forms
    const data = await request.formData();
    let userData;
    let response;
    switch (tab) {
        case 'me': {
            userData = userData = {
                firstName: data.get('fname'),
                lastName: data.get('lname'),
                phoneNumber: data.get('phone'),
            };

            //SEND REQUEST
            response = await fetch(`http://127.0.0.1:8000/api/v1/users/updateMe`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                // withCredentials: true,
                credentials: 'include',
                body: JSON.stringify(userData),
            });
        }
    }

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

    //Update jus the user's interface data, based on the new upcoming data
    localStorage.setItem('user', JSON.stringify(responseData.data.user));

    //7 Everything went as expected
    return null;
}

export default action;
