import { Typography } from '@mui/material';
import List from '@mui/material/List';
import Review from '../reviews/Review';
import { Fragment } from 'react';

/**
 * Funcional componenets represeting an editable list of reviews.
 */
const UserReviews = () => {
    return (
        <Fragment>
            <Typography variant={'h4'} component="h1" mb={4}>
                My Reviews
            </Typography>

            <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                <Review />
                <Review />
                <Review />
            </List>
        </Fragment>
    );
};

export default UserReviews;
