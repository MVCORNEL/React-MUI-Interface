import { Box, Typography, ListItem, ListItemIcon, ListItemText, SvgIcon } from '@mui/material';

/**
 * Represents a component that consists in a text element, wrapped into a box element used for margins
 *
 * @prop {string} text - the text content within the text box
 * @prop {svg} icon - svg icon required
 */
const ServiceItem = ({ text, icon }) => {
  return (
    <ListItem>
      <ListItemIcon>
        <SvgIcon component={icon} sx={{ fontSize: '3rem', display: 'block', margin: '0 auto', color: '#ff3366' }} />
      </ListItemIcon>
      <ListItemText>
        <Box mt={2} ml={2}>
          <Typography variant="body1">{text}</Typography>
        </Box>
      </ListItemText>
    </ListItem>
  );
};

export default ServiceItem;
