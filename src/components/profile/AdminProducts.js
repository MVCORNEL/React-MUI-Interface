import { Typography } from '@mui/material';
import { Fragment } from 'react';
import ProductsTable from '../table/ProductsTable';
import { useNavigate } from 'react-router-dom';
import { isUserAdmin } from '../../auth/user';
import { useEffect } from 'react';

/**
 * Funcional component a header and a table
 */
const AdminProducts = () => {
    const navigate = useNavigate();

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
