import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Button, Box, Stack, IconButton } from '@mui/material';
import Rating from '@mui/material/Rating';
import ThumbUpOffAltOutlinedIcon from '@mui/icons-material/ThumbUpOffAltOutlined';
/**
 * Functional componenet representing a review. Each has an edit and remove button.
 * @prop {string} date expects a string represting the date when the review was written
 * @prop {string} product expects a string comment
 * @prop {string} comment expects a string comment
 * @prop {string} photo expects a string represeting an url to a image
 * @prop {number} rate expects a number between 1 and 5
 * @returns
 */
const Review = ({ photo, date, product, comment, rate, likes, isEditable = false }) => {
    return (
        <ListItem alignItems="flex-start" sx={{ mt: 2, backgroundColor: '#e9e9e9' }}>
            <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
                sx={{ marginRight: 4, textAlign: 'justify' }}
                primary={
                    <Typography sx={{ display: 'inline-block' }} color="text.primary" mt={0.8}>
                        Manea Valentin Cornel
                    </Typography>
                }
                secondary={
                    <React.Fragment>
                        <Stack component="span" direction={'row'} alignItems={'end'} mb={1}>
                            <Rating component="span" value={4} sx={{ marginLeft: -0.5 }} readOnly size={'small'} />
                            <Typography sx={{ display: 'inline' }} component="span" variant="body1" color="text.secondary" ml={2}>
                                2 weeks ago
                            </Typography>
                        </Stack>

                        {"I'll be in your neighborhood doing errands this… Random text here your neighborhood doing errands this your neighborhood doing errands this…"}

                        {isEditable ? (
                            <Box display={'block'} component="span" textAlign={'right'} mt={1}>
                                <Button component="span" size={'small'}>
                                    Edit
                                </Button>
                                <Button component="span" size={'small'}>
                                    Delete
                                </Button>
                            </Box>
                        ) : (
                            <Box display={'block'} component="span" ml={-1} mt={1}>
                                <Button size="large" component="span" color="secondary" startIcon={<ThumbUpOffAltOutlinedIcon />}></Button>
                                <span>10</span>
                            </Box>
                        )}
                    </React.Fragment>
                }
            />
        </ListItem>
    );
};

export default Review;
