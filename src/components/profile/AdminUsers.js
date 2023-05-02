import { Typography } from '@mui/material';
import { Fragment } from 'react';
import UsersTable from '../table/UsersTable';
import { isUserAuthentificated } from '../../auth/user';
import { useNavigate } from 'react-router-dom';
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
