import { Fragment } from 'react';
import HeaderProducts from '../layout/header/products/HeaderProducts';
import ServiceTopic from '../components/services/ServiceTopic';
import { services, curving } from '../consts/serviceitems';

const Products = () => {
    return (
        <Fragment>
            <HeaderProducts />
            <ServiceTopic isPlacedRight={true} {...services} />
            <ServiceTopic {...curving} />
        </Fragment>
    );
};

export default Products;
