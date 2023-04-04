import { Fragment } from 'react';
import { Typography } from '@mui/material';

/**
 * Represents a text-styled element with a heading and several text details elements .
 *
 * @prop {string} title - represents the about section title
 * @prop {array} details - An array list of object, each object need to have an and id and text attribute
 */
const AboutDetails = ({ title, details }) => {
    return (
        <Fragment>
            {/* TITLE */}
            <Typography variant="h3" component="h3" mb={3}>
                {title}
            </Typography>
            {/* DETAILS */}
            {details.map((detail) => {
                return (
                    <Typography key={detail.id} variant="body1" component="p" mb={3}>
                        {detail.text}
                    </Typography>
                );
            })}
        </Fragment>
    );
};

export default AboutDetails;
