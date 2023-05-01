import { Fragment, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import HeaderProduct from '../layout/header/product/HeaderProduct';
import ProductDetailsTopic from '../components/productDetails/productDetailsTopic';
import ReviewsTopic from '../components/reviews/ReviewTopic';

const Product = () => {
    const data = useLoaderData();
    const product = data[0];
    const reviews = data[1];
    //When first loaded the paged is scrolled to the very top
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Fragment>
            {product && (
                <Fragment>
                    <HeaderProduct title={product.name} />
                    <ProductDetailsTopic summary={product.summary} description={product.description} />
                    <ReviewsTopic reviews={reviews || []} ratingsAverage={product.ratingsAverage} ratingsQuantity={product.ratingsQuantity} id={product._id} />
                </Fragment>
            )}
            {!product && <p>Could't fetch the data</p>}
        </Fragment>
    );
};

export default Product;
