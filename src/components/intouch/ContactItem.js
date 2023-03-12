import { SvgIcon } from '@mui/material';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import * as React from 'react';

/**
 * Component used to display each item's contact information individually.
 *
 * @prop {string} title -  what the item stands for
 * @prop {string} text -  information about the current contact item
 * @prop {url} icon - the url path to svg
 *
 */
const ContactItem = ({ title, text, icon }) => {
    return (
        <ListItem sx={{ paddingLeft: 0 }}>
            <ListItemAvatar>
                <Avatar sx={{ width: '5rem', height: '5rem', color: 'primary.main' }}>
                    <SvgIcon component={icon} sx={{ fontSize: '3rem', color: '#333' }} />
                </Avatar>
            </ListItemAvatar>
            <ListItemText primary={title} secondary={text} />
        </ListItem>
    );
};

export default ContactItem;
