import { Typography } from '@mui/material';
import List from '@mui/material/List';
import Review from '../reviews/Review';
import { Fragment } from 'react';
import { useEffect, useCallback } from 'react';
import useHttp from './../../hooks/useHttp';

/**
 * Funcional componenets represeting an editable list of reviews.
 */
const UserReviews = () => {
    //Function that will return an request object configuration url,
    //this function will be passed as configuration for the useHttp custom hook.
    //Wrapped into useCallback hook, assuring that this function will not re-render when the current component re-evaluates
    //avoiding infinte loop problem, inside the useHttp custom hook.
    const ceateRequestConfig = useCallback(() => {
        return { url: 'http://127.0.0.1:8000/api/v1/reviews' };
    }, []);

    //Function used to tranform data, coming from a request object into a list of desired product objects
    //Wrapped into useCallback hook, assuring that this function will not re-render when the current component re-evaluates
    //avoiding infinte loop problem, inside the useHttp custom hook.
    const tranformReviewCallback = useCallback((data) => {
        return data.map((review) => {
            return {
                id: review.id,
                user: review.user.firstName + ' ' + review.user.lastName,
                rating: review.rating,
                date: review.date,
                description: review.description,
                comment: review.comment,
                photo: review.user.photo,
            };
        });
    }, []);

    //Fetch url custom hook
    const { data, isLoading, hasError, sendRequest: fetchProducts } = useHttp(ceateRequestConfig, tranformReviewCallback);

    useEffect(() => {
        fetchProducts();
        //Function within the custom useHttp hook will set some states, when this function is called.
        //When ne states are set, the componenet where the useHttp hook is used re-renders, resulting into an infinite loop.
        //the work around useCallback hook
    }, [fetchProducts]);

    return (
        <Fragment>
            <Typography variant={'h4'} component="h1" mb={4}>
                My Reviews
            </Typography>

            {!isLoading && data.length > 0 && (
                <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                    {/* <Review key={review.id} name={`${review.user.firstName} ${review.user.lastName} `} rate={review.rating} date={review.date} comment={review.comment} photo={review.user.photo}></Review> */}
                </List>
            )}
            {!isLoading && data.length === 0 && !hasError && <p>No products found</p>}
            {isLoading && <p>Loading</p>}
            {!isLoading && hasError && <p>{hasError}</p>}
        </Fragment>
    );
};

export default UserReviews;
