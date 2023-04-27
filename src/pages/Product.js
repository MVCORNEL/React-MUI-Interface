import { Fragment } from 'react';
import HeaderProduct from '../layout/header/product/HeaderProduct';
import * as React from 'react';
import ProductDetailsTopic from '../components/productDetails/productDetailsTopic';
import ReviewsTopic from '../components/reviews/ReviewTopic';

const Product = () => {
    return (
        <Fragment>
            <HeaderProduct />
            <ProductDetailsTopic />
            <ReviewsTopic />
        </Fragment>
    );
};

export default Product;
