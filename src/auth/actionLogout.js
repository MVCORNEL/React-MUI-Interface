import { redirect } from 'react-router-dom';

/**
 * After the logout form is submitted, an action router function is used to process the data and forward the desired request.
 * By using the router Form tag, it prevents the browser from sending a request to the backend by default * but it will still give the request to the function that will be directly in charge of the subsequent actions.
 * Additionally, the action needs to be added to the route definition. * action will include all the data as specified for the part of the form.
 * @returns If the request is successful the user is redirected to the main page, otherwise handle the erros
 */
const action = async () => {
    localStorage.removeItem('user');
    //1 SEND REQUEST
    const response = await fetch(`http://127.0.0.1:8000/api/v1/users/logout`, { credentials: 'include' });
    //2 Parse the data into js objects.
    const responseData = await response.json();
    //3 Propagate the error further to the useActionData hook within the form, within the body are details about the errors.
    if (responseData.status === 'fail') {
        alert(responseData.message);
    }
    if (responseData.status === 'error') {
        throw new Error(responseData.message);
    }
    //4 Everything went as expected
    return redirect('/');
};

export default action;
