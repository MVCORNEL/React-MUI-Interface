import { json } from 'react-router-dom';
import URL from '../consts/URL';
/**
 * The current action router function is used to process the data and send the desired request after a user creates a review.
 * Instead of using the standard form tag, the Form router element prevents the browser's default behaviour of automatically sending a request to the backend.
 * However, the current action function is used to process all form data and create the desired request configurations before sending a server request.
 * The route definition where the form exists also needs to include the action, which will contain all the data that was specified for the relevant part of the form.
 * @returns The user is directed to the main page if the request is successful; otherwise, handle the errors.
 */
async function action({ request }) {
    //1 Get all the data within the forms
    const data = await request.formData();
    const reviewData = {
        comment: data.get('comment'),
        rating: data.get('rating'),
        product: data.get('id'),
        productSlug: data.get('productSlug'),
    };

    //2 Send Request
    const response = await fetch(`${URL}/api/v1/reviews`, {
        headers: { 'Content-Type': 'application/json' },
        method: 'POST',
        withCredentials: true,
        credentials: 'include',
        body: JSON.stringify(reviewData),
    });

    //3 Parse the data into js objects.
    const responseData = await response.json();

    //4 Propagate the error further to the useActionData hook within the form, within the body are details about the errors.
    if (responseData.status === 'fail') {
        return responseData?.message;
    }
    //5 Propagate the error into router error handler
    if (responseData.status === 'error') {
        //500 indicates that something went wrong on the backend
        throw json({ message: responseData?.message }, { status: 500 });
    }

    //7 Everything went as expected
    return null;
}

export default action;
