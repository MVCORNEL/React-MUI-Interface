import { Fragment } from 'react';
import HeaderProduct from '../layout/header/product/HeaderProduct';
import * as React from 'react';
import ProductDetailsTopic from '../components/productDetails/productDetailsTopic';

const Product = () => {
    return (
        <Fragment>
            <HeaderProduct />
            <ProductDetailsTopic />
        </Fragment>
    );
};

export default Product;
