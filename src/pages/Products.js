import { Fragment } from 'react';
import HeaderProducts from '../layout/header/products/HeaderProducts';
import ServiceTopic from '../components/services/ServiceTopic';
import ProductsTopic from '../components/products/ProductsTopic';
import { services, curving } from '../consts/serviceitems';

const Products = () => {
    return (
        <Fragment>
            <HeaderProducts />
            <ProductsTopic />
            <ServiceTopic isPlacedRight={true} mb={{ xxs: '-4rem', sm: '-5rem', md: '-7rem', lg: '-10rem' }} {...services} />
            <ServiceTopic mb={0} {...curving} />
        </Fragment>
    );
};

export default Products;
