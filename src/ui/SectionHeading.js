import { Fragment } from 'react';
import { Typography } from '@mui/material';

/**
 * Represents a wrapper grey box that will be used to wrap section components.
 * Its background color is be given by the backgroungLight pattern
 *
 * @prop {string} heading - the wrapped component within the grey box
 * @prop {string} subheading - the wrapped component within the grey box
 *
 */
const SectionHeading = ({ heading, subheading }) => {
    return (
        <Fragment>
            {/* HEADER */}
            <Typography variant="h2" component="h2" textAlign="center" mb={4}>
                {heading}
            </Typography>
            {/* SUBTITLE */}
            <Typography mb={{ xs: 4, sm: 5, md: 10 }} variant="subtitle1" component="p" textAlign="center" sx={{ maxWidth: '65ch', marginRight: 'auto', marginLeft: 'auto' }}>
                {subheading}
            </Typography>
        </Fragment>
    );
};

export default SectionHeading;
