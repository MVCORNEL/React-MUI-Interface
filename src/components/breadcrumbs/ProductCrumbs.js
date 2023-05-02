import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom';

/**
 * Breacrumb functional component, for the Product page, consists into 2 link showing the current state of the user on the page.
 */
const ProductCrumbs = () => {
    return (
        <Breadcrumbs aria-label="breadcrumb">
            <Link component={RouterLink} underline="hover" color="inherit" to="/products">
                Products
            </Link>
            <span>Product Service</span>
        </Breadcrumbs>
    );
};

export default ProductCrumbs;
