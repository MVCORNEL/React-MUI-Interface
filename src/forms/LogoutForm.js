import { Form } from 'react-router-dom';
import { MenuItem } from '@mui/material';
/**
 * Logout Form control
 */
const LogoutForm = () => (
    <Form method="post" action="/logout">
        <MenuItem
            sx={{
                '&:hover': {
                    backgroundColor: '#EFEFEF!important',
                    color: '#555!important',
                },
                width: '100%',
            }}
            key={'logout'}
            component={'button'}
            type="submit"
        >
            Logout
        </MenuItem>
    </Form>
);

export default LogoutForm;
