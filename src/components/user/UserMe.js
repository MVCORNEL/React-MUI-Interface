import UpdateMeForm from '../../forms/UpdateMeForm';
import DeleteMeForm from '../../forms/DeleteMeForm';
import { Box } from '@mui/material';

/**
 * Functional componenet from 2 form, one being responsible of updating the current logged user details,
 * while the second one is responsible from deleteting the current user.
 *
 */
const UserProfile = () => {
    return (
        <Box>
            <UpdateMeForm />
            <DeleteMeForm />
        </Box>
    );
};

export default UserProfile;
