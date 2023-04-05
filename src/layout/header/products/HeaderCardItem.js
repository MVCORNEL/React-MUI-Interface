import * as React from 'react';
import { ListItem, ListItemText, ListItemIcon, SvgIcon, Typography } from '@mui/material';

/**
 * Represents a list item component that is made up of a tille, a text, and an icon element.
 *
 * @prop {string} title - expects title describing the category
 * @prop {string} text - expects a string text content
 * @prop {svg} icon - expects a svg icon
 */
const HeaderCardItem = ({ title, text, icon }) => {
    return (
        <ListItem sx={{ pr: { xs: 0, md: 0, lg: 0 }, pl: { xs: 2, md: 1, lg: 3 }, pt: 2 }}>
            {/* ICON */}
            <ListItemIcon sx={{ mt: 3 }}>
                <SvgIcon component={icon} sx={{ fontSize: '5rem', display: 'block', color: 'white', bgcolor: 'primary.main' }} />
            </ListItemIcon>
            {/* TEXT */}
            <ListItemText sx={{ textAlign: 'justify', mx: { xs: 4, sm: 3, md: 2, lg: 5 } }} primary={<Typography variant="h6">{title}</Typography>} secondary={text} />
        </ListItem>
    );
};

export default HeaderCardItem;
