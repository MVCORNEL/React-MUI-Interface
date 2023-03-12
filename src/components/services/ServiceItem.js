import { Box, Typography, ListItem, ListItemIcon, ListItemText, SvgIcon } from '@mui/material';

/**
 * Represents a text list element component preceed by a svg icon
 * Wrapped into a box element for margins
 *
 * @prop {string} text - the text content within the text box
 * @prop {svg} icon - svg icon required
 */
const ServiceItem = ({ text, icon }) => {
    return (
        <ListItem>
            {/* ICON */}
            <ListItemIcon>
                <SvgIcon
                    component={icon}
                    sx={{ fontSize: '3rem', display: 'block', margin: '0 auto', color: 'primary.main' }}
                />
            </ListItemIcon>
            {/* TEXT */}
            <ListItemText>
                <Box mt={2} ml={2}>
                    <Typography variant="body1">{text}</Typography>
                </Box>
            </ListItemText>
        </ListItem>
    );
};

export default ServiceItem;
