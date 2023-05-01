import { Typography } from '@mui/material';
import { Fragment } from 'react';
import UsersTable from '../table/UsersTable';

/**
 * Funcional component a header and a table
 */
const AdminUsers = () => {
    return (
        <Fragment>
            {/* HEADING */}
            <Typography variant={'h4'} component="h1" mb={4}>
                Admin Users
            </Typography>
            {/* TABLE */}
            <UsersTable />
        </Fragment>
    );
};

export default AdminUsers;
