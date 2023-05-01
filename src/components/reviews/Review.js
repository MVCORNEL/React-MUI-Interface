import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Button, Box, Stack } from '@mui/material';
import Rating from '@mui/material/Rating';
import PropTypes from 'prop-types';

/**
 * Functional componenet representing a review. Each has an edit and remove button.
 * @prop {string} name user's review name
 * @prop {string} date expects a string represting the date when the review was written
 * @prop {string} comment expects a string comment
 * @prop {string} photo expects a string represeting an url to a image
 * @prop {number} rate expects a number between 1 and 5
 * @returns
 */
const Review = ({ name, date, photo, comment, rate, isEditable = false }) => {
    return (
        <ListItem alignItems="flex-start" sx={{ mt: 2, backgroundColor: '#e9e9e9' }}>
            <ListItemAvatar>
                <Avatar alt="Remy Sharp" src={photo} />
            </ListItemAvatar>
            <ListItemText
                sx={{ marginRight: 4, textAlign: 'justify' }}
                primary={
                    <Typography variant={'subtitle1'} component="span" sx={{ display: 'inline-block' }} mt={0.4}>
                        {name}
                    </Typography>
                }
                secondary={
                    <React.Fragment>
                        <Stack component="span" direction={'row'} alignItems={'end'} mb={1}>
                            <Rating component="span" value={rate} sx={{ marginLeft: -0.5 }} readOnly size={'small'} />
                            <Typography sx={{ display: 'inline' }} component="span" variant="body1" color="text.secondary" ml={2}>
                                {date.split('T')[0]}
                            </Typography>
                        </Stack>
                        {comment}
                        {isEditable && (
                            <Box display={'block'} component="span" textAlign={'right'} mt={1}>
                                <Button component="span" size={'small'}>
                                    Edit
                                </Button>
                                <Button component="span" size={'small'}>
                                    Delete
                                </Button>
                            </Box>
                        )}
                    </React.Fragment>
                }
            />
        </ListItem>
    );
};

export default Review;

Review.propTypes = {
    name: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    photo: PropTypes.string,
    comment: PropTypes.string.isRequired,
    rate: PropTypes.number.isRequired,
};
