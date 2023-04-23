import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Button, Box, Stack } from '@mui/material';
import Rating from '@mui/material/Rating';

/**
 * Functional componenet representing a review. Each has an edit and remove button.
 * @prop {string} date expects a string represting the date when the review was written
 * @prop {string} product expects a string comment
 * @prop {string} comment expects a string comment
 * @prop {string} photo expects a string represeting an url to a image
 * @prop {number} rate expects a number between 1 and 5
 * @returns
 */
const MyReview = ({ photo, date, product, comment, rate }) => {
    const [value, setValue] = React.useState(2);

    return (
        <div>
            <ListItem alignItems="flex-start" sx={{ backgroundColor: '#eee', mt: 2 }}>
                <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </ListItemAvatar>
                <ListItemText
                    sx={{ marginRight: 4, textAlign: 'justify' }}
                    primary={
                        <Typography sx={{ display: 'inline' }} component="span" variant="body2" color="text.secondary">
                            2 weeks ago
                        </Typography>
                    }
                    secondary={
                        <React.Fragment>
                            <Typography sx={{ display: 'inline' }} component="span" variant="body2" color="text.primary">
                                Green Window
                            </Typography>
                            {" — I'll be in your neighborhood doing errands this… Random text here your neighborhood doing errands this your neighborhood doing errands this…"}

                            <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} mt={1}>
                                <Rating name="read-only" readOnly value={value} />

                                <Box textAlign={'right'}>
                                    <Button size={'small'}>Edit</Button>
                                    <Button size={'small'}>Delete</Button>
                                </Box>
                            </Stack>
                        </React.Fragment>
                    }
                />
            </ListItem>
            <Divider component="li" />
        </div>
    );
};

export default MyReview;
