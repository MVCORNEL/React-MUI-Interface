import AdbIcon from '@mui/icons-material/Adb';
import { Typography } from '@mui/material';
import { Fragment } from 'react';

/**
 * Component for displaying a footer bar Logo and its text
 *
 */
const FooterLogo = () => {
    return (
        <Fragment>
            <AdbIcon mr={1} />
            <Typography variant="h5" component="span" color="white">
                Logo
            </Typography>
        </Fragment>
    );
};

export default FooterLogo;
