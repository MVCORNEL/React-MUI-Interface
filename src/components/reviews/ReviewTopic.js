import { Stack, Typography, List, Rating, Button, Box } from '@mui/material';
import SectionHeading from '../../ui/SectionHeading';
import SectionBox from '../../ui/SectionBox';
import React from 'react';
import Review from './Review';
import CreateIcon from '@mui/icons-material/Create';
import Chip from '@mui/material/Chip';
import PropTypes from 'prop-types';
import { useState } from 'react';
import ReviewDialog from '../../forms/ReviewDialogForm';
import { useRouteLoaderData } from 'react-router-dom';
import { Link } from 'react-router-dom';
/**
 * Represents the review topic, consisting in a list of reviews, and a heading containg details about the current topic review rate.
 * @prop {number} ratingsAverage
 * @prop {number} ratingsQuantity
 * @prop {string} id - current product id
 * @prop {string} reviews - array with the current reviews
 */
const CustomerReviews = ({ ratingsAverage, ratingsQuantity, id, reviews }) => {
    const [open, setOpen] = useState(false);
    //user login state
    const user = useRouteLoaderData('root');
    console.log(user);

    const handleClose = () => {
        setOpen(false);
    };

    const handleClickAddReview = () => {
        setOpen(true);
    };

    return (
        <SectionBox>
            <SectionHeading heading="What our customers think " />
            {/* HEADER */}
            <Stack direction={{ xxs: 'column', sm: 'row' }} justifyContent={'space-between'} alignItems={{ sm: 'end' }}>
                <Box mb={{ xxs: 5, sm: 0 }}>
                    {/* DETAILS  */}
                    <Typography component="h2" variant="h4" mt={2} mb={1}>
                        Overal rating
                    </Typography>
                    <Stack direction="row" alignItems={'center'} spacing={2} mb={2}>
                        <Typography component="span" variant="h6">
                            {ratingsAverage.toLocaleString('en', { useGrouping: false, minimumFractionDigits: 1 })}
                        </Typography>
                        <Rating name="read-only" readOnly value={ratingsAverage} sx={{ marginLeft: -1 }} size="large" />

                        <Typography component="p" variant="body2">
                            {ratingsQuantity} reviews
                        </Typography>
                    </Stack>
                    {/* SORT */}
                    <Stack direction="row" alignItems={'center'} spacing={2} mb={1}>
                        <Chip label="all" color="primary" size="large" clickable />
                        <Chip label="recent" color="primary" size="large" variant="outlined" clickable />
                        <Chip label="positive" color="primary" size="large" variant="outlined" clickable />
                    </Stack>
                </Box>
                {/* CRATE REVIEW */}
                {user && (
                    <Button
                        sx={{ display: { xxs: 'none', sm: 'flex' } }}
                        onClick={handleClickAddReview}
                        variant="contained"
                        color="primary"
                        component="button"
                        mt={2}
                        mb={1}
                        startIcon={<CreateIcon />}
                    >
                        Write a review !
                    </Button>
                )}
                {!user && (
                    <Button sx={{ display: { xxs: 'none', sm: 'flex' } }} variant="contained" color="primary" mt={2} mb={1} component={Link} to={'/auth?mode=login'}>
                        Sign in to let us as review
                    </Button>
                )}
            </Stack>
            {/* CRATE REVIEW */}
            {user && (
                <Button sx={{ display: { xxs: 'flex', sm: 'none' } }} onClick={handleClickAddReview} variant="contained" color="primary" component="h3" mt={2} mb={1} startIcon={<CreateIcon />}>
                    Write a review !
                </Button>
            )}
            {!user && (
                <Button sx={{ display: { xxs: 'flex', sm: 'none' } }} variant="contained" color="primary" mt={2} mb={1} component={Link} to={'/auth?mode=login'}>
                    Sign in to let us as review
                </Button>
            )}

            {/* REVIEWS */}
            <List>
                {reviews.map((review) => (
                    <Review key={review?.id} name={review?.user?.firstName} rate={review?.rating} date={review?.date} comment={review?.comment} image={review?.user?.image}></Review>
                ))}
            </List>

            <ReviewDialog open={open} onClose={handleClose} id={id} />
        </SectionBox>
    );
};

export default CustomerReviews;

CustomerReviews.propTypes = {
    ratingsAverage: PropTypes.number.isRequired,
    ratingsQuantity: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
    reviews: PropTypes.array.isRequired,
};
