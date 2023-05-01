import { json, useParams } from 'react-router-dom';
/**
 * The current loader router function is used to sent fetch request ahd handle  data before a certain page/resource is accessed.
 * Instead of using the standard way of fecthing data , this functiona will automatically fetch data when a route component is accessed.
 * @returns The the fetched data otherwise throws the related errors
 */
const productLoader = async ({ params }) => {
    //FETCH PRODUCT
    // let [product, reviews] = await Promise.all(
    let [productRsponse, reviewsResponse] = await Promise.all([
        fetch(`http://127.0.0.1:8000/api/v1/products?slug=${params.productSlug}`, {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
            credentials: 'include',
        }),
        // // //FETCH PRODUCT REVIEWS
        await fetch(`http://127.0.0.1:8000/api/v1/reviews?productSlug=${params.productSlug}&sort=rating`, {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
            credentials: 'include',
        }),
    ]);
    // //4 Parse the data into js objects.
    const productData = await productRsponse.json();
    const reviewsData = await reviewsResponse.json();
    // const responseReviewData = await reviews.json();
    // // const responseReviewData = await reviews.json();
    //5 Propagate the fails further
    if (productData.status === 'fail') {
        throw json({ message: productData.message }, { status: productData.status });
    }
    if (reviewsData.status === 'fail') {
        throw json({ message: reviewsData.message }, { status: reviewsData.status });
    }
    // // Propagate the error further
    if (productData.status === 'error') {
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
