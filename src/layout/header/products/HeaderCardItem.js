import * as React from 'react';
import { ListItem, ListItemText, ListItemIcon, SvgIcon, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import IconWrapper from '../../../ui/IconWrapper';
/**
 * Represents a list item component that is made up of a tille, a text, and an icon element.
 *
 * @prop {string} title - expects title describing the category
 * @prop {string} text - expects a string text content
 * @prop {svg} icon - expects a svg icon
 */
const HeaderCardItem = ({ title, text, icon }) => {
    const theme = useTheme();
    return (
        <ListItem sx={{ pr: 0, pl: { xxs: 0, md: 1, lg: 3 }, pt: 2 }}>
            {/* ICON */}
            <ListItemIcon sx={{ display: { xxs: 'none', xs: 'block', mt: 3 } }}>
                <IconWrapper size={'5rem'} padding={4} color={theme.palette.primary.light} borderRadius="50%">
                    {icon}
                </IconWrapper>
            </ListItemIcon>

            {/* TEXT */}
            <ListItemText
                sx={{ textAlign: 'justify', mx: { xxs: 1, xs: 4, sm: 3, md: 2, lg: 5 } }}
                primary={
                    <Typography variant="h5" component="h2">
                        {title}
                    </Typography>
                }
                secondary={text}
            />
        </ListItem>
    );
};

export default HeaderCardItem;
