import { json } from 'react-router-dom';
import URL from '../consts/URL';
/**
 * The current function is used to load into the product page the product details and its review, by executing two parallel fetch request.
 * The current loader router function is used to sent fetch request ahd handle  data before a certain page/resource is accessed.
 * Instead of using the standard way of fecthing data , this functiona will automatically fetch data when a route component is accessed.
 * @returns The the fetched data otherwise throws the related errors
 */
const productLoader = async ({ params }) => {
    //Fetch product and the current product reviews list
    let [productRsponse, reviewsResponse] = await Promise.all([
        fetch(`${URL}/api/v1/products?slug=${params.productSlug}`, {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
            credentials: 'include',
        }),
        // // //FETCH PRODUCT REVIEWS
        await fetch(`${URL}/api/v1/reviews?productSlug=${params.productSlug}&sort=rating`, {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
            credentials: 'include',
        }),
    ]);
    // //4 Parse the data into js objects.
    const productData = await productRsponse.json();
    const reviewsData = await reviewsResponse.json();

    //5 Propagate the fails further
    if (productData.status === 'fail') {
        throw json({ message: productData.message }, { status: productData.status });
    }
    if (reviewsData.status === 'error') {
        throw json({ message: reviewsData.message }, { status: reviewsData.status });
    }
    // // Propagate the error further
    if (productData.status === 'fail') {
        //500 indicates that something went wrong on the backend
        throw json({ message: productData.message }, { status: productData.status });
    }
    if (reviewsData.status === 'error') {
        //500 indicates that something went wrong on the backend
        throw json({ message: reviewsData.message }, { status: reviewsData.status });
    }
    return [productData.data[0], reviewsData.data];
    // return [responseProductData.data[0], responseReviewData];
};

export default productLoader;
