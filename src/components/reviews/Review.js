import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Button, Box, Stack } from '@mui/material';
import Rating from '@mui/material/Rating';
import PropTypes from 'prop-types';
import { Form } from 'react-router-dom';

/**
 * Functional componenet representing a review. Each has an edit and remove button.
 * @prop {string} name edit function, take id as perameter to lift up data
 * @prop {string} name review's id
 * @prop {string} name user's review name
 * @prop {string} date expects a string represting the date when the review was written
 * @prop {string} comment expects a string comment
 * @prop {string} image expects a string represeting an url to a image
 * @prop {number} rate expects a number between 1 and 5
 * @returns
 */
const Review = ({ id, name = 'Deleted user', date, image, comment, rate, isEditable = false, onEdit }) => {
    return (
        <Form method="DELETE">
            <ListItem alignItems="flex-start" sx={{ mt: 2, backgroundColor: '#e9e9e9' }}>
                <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src={image} />
                </ListItemAvatar>

                <input type="hidden" name="id" value={id} />

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
                        </React.Fragment>
                    }
                />
            </ListItem>
            {isEditable && (
                <Box display={'block'} component="span" textAlign={'right'} sx={{ backgroundColor: '#e9e9e9' }}>
                    <Button
                        size={'small'}
                        onClick={() => {
                            onEdit(id);
                        }}
                    >
                        Edit
                    </Button>

                    <Button type="submit" size={'small'}>
                        Delete
                    </Button>
                </Box>
            )}
        </Form>
    );
};

export default Review;

Review.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    date: PropTypes.string,
    image: PropTypes.string,
    comment: PropTypes.string,
    rate: PropTypes.number,
    onEdit: PropTypes.func,
};
