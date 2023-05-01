import { json } from 'react-router-dom';

/**
 * The current action router function is used to process the data and send the desired request after the user updates or deletes its reviews.
 * Instead of using the standard form tag, the Form router element prevents the browser's default behaviour of automatically sending a request to the backend.
 * However, the current action function is used to process all form data and create the desired request configurations before sending a server request.
 * The route definition where the form exists also needs to include the action, which will contain all the data that was specified for the relevant part of the form.
 * @returns The user is directed to the main page if the request is successful; otherwise, handle the errors.
 */
async function action(request) {
    //1 Get all the data within the forms
    const data = await request.formData();
    let response;
    let responseData;
    //1 Get the id from the submited form
    const reviewId = data.get('id');
    console.log(reviewId);
    if (request.method === 'DELETE') {
        //2 SEND REQUEST
        response = await fetch(`http://127.0.0.1:8000/api/v1/reviews/${reviewId}`, {
            method: 'DELETE',
            withCredentials: true,
            credentials: 'include',
        });

        //3 Return a new object because because 204 is a terminate operation, an empty object force the table to red-render
        //due to useActionData within the table
        if (response.status === 204) {
            return '';
        }

        //4 Parse the data into js objects.
        responseData = await response.json();

        //5 Propagate the error further to the useActionData hook within the form, within the body are details about the errors.
        if (responseData.status === 'fail') {
            throw json({ message: responseData.message }, { status: response.status });
        }
    }

    if (request.method === 'PATCH') {
        //1 Get all the data within the forms
        const currentDate = new Date().toISOString().split('T')[0];
        const reviewData = {
            comment: data.get('comment'),
            rating: data.get('rating'),
            date: currentDate,
        };
        //2 Send patch request
        const response = await fetch(`http://127.0.0.1:8000/api/v1/reviews/${reviewId}`, {
            headers: { 'Content-Type': 'application/json' },
            method: 'PATCH',
            withCredentials: true,
            credentials: 'include',
            body: JSON.stringify(reviewData),
        });

        //3 Parse the data into js objects.
        responseData = await response.json();

        //4 Propagate the error further to the useActionData hook within the form, within the body are details about the errors.
        if (responseData.status === 'fail') {
            return responseData?.message;
        }
    }

    //5.1 Propagate the error into router error handler
    if (responseData.status === 'error') {
        //500 indicates taht something went wrong on the backend
        throw json({ message: responseData?.message }, { status: 500 });
    }
    //Everything worked as expected

    return null;
}

export default action;
