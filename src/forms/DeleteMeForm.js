import { Form } from 'react-router-dom';
import { Stack, Typography, Button } from '@mui/material';
/**
 * Delete the current user form
 */
const DeleteMeForm = () => (
    <Form method="delete" action="/deleteMe">
        {/* DELETE */}
        <Stack direction={{ xxs: 'column', md: 'row' }} justifyContent={'center'} alignItems={'center'}>
            {/* DELETE ACCOUNT */}
            <Typography variant="body1" color="#555">
                Would you like to delete your account ?
            </Typography>
            <Button size="small" color="error" type="submit">
                Delete Me
            </Button>
        </Stack>
    </Form>
);

export default DeleteMeForm;
