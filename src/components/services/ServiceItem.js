import { Box, Typography, ListItem, ListItemIcon, ListItemText, SvgIcon } from '@mui/material';

/**
 * Represents a text list element component preceeded by a svg icon
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
                <SvgIcon component={icon} sx={{ fontSize: '3rem', display: 'block', color: 'white', bgcolor: 'primary.main' }} />
            </ListItemIcon>
            {/* TEXT */}
            <ListItemText>
                <Box mt={1} ml={1}>
                    <Typography variant="body1" textAlign="justify">
                        {text}
                    </Typography>
                </Box>
            </ListItemText>
        </ListItem>
    );
};

export default ServiceItem;
