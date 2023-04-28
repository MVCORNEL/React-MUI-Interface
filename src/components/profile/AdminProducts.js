import { Typography } from '@mui/material';
import { Fragment } from 'react';
import ProductsTable from '../table/ProductsTable';

/**
 * Funcional componenets represeting an editable list of reviews.
 */
const AdminProducts = () => {
    return (
        <Fragment>
            {/* HEADING */}
            <Typography variant={'h4'} component="h1" mb={4}>
                Manage the Products
            </Typography>
            {/* TABLE */}
            <ProductsTable />
        </Fragment>
    );
};

export default AdminProducts;
