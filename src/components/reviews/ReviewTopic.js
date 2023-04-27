import { Stack, Typography, List, Rating, Button, Box } from '@mui/material';
import SectionHeading from '../../ui/SectionHeading';
import SectionBox from '../../ui/SectionBox';
import React from 'react';
import Review from './Review';
import CreateIcon from '@mui/icons-material/Create';
import Chip from '@mui/material/Chip';

/**
 * Represents the review topic, consisting in a list of reviews, and a heading containg details about the current topic review rate.
 */
const CustomerReviews = () => {
    return (
        <SectionBox isGray={true}>
            <SectionHeading heading="What our customers think " />
            {/* HEADER */}
            <Stack direction="row" justifyContent={'space-between'} alignItems={'end'}>
                <Box>
                    {/* DETAILS  */}
                    <Typography component="h3" variant="h3" mt={2} mb={1}>
                        Overal rating
                    </Typography>
                    <Stack direction="row" alignItems={'center'} spacing={2} mb={2}>
                        <Typography component="span" variant="h6">
                            4.5
                        </Typography>
                        <Rating name="read-only" readOnly value={5} sx={{ marginLeft: -1 }} size="large" />

                        <Typography component="body2" variant="body2">
                            11 reviews
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
                <Button variant="contained" color="primary" component="h3" mt={2} mb={1} startIcon={<CreateIcon />}>
                    Write a review !
                </Button>
            </Stack>

            {/* REVIEWS */}
            <List>
                <Review></Review>
                <Review></Review>
                <Review></Review>
            </List>

            <Box textAlign={'center'} mt={6}>
                <Button color="secondary" component="h3" mt={2} mb={1}>
                    See more !
                </Button>
            </Box>
        </SectionBox>
    );
};

export default CustomerReviews;
