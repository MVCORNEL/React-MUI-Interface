import { ListItem, ListItemIcon, ListItemText, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import IconWrapper from '../../ui/IconWrapper';

/**
 * Represents a text list element with title, conntent and an leading icon.
 * The icon is not displayed is for very small devices.
 *
 * @prop {string} text - heading title describing the list content within the text box
 * @prop {string} text - the text content of the list element
 * @prop {svg} icon - svg icon required
 */
const OurServiceItem = ({ title, text, icon }) => {
    const theme = useTheme();
    //All devices smaller than 1200px
    const isLargeDevice = useMediaQuery(theme.breakpoints.down('lg'));
    //All devices smaller than 900px
    const isSmallDevice = useMediaQuery(theme.breakpoints.down('sm'));
    //All devices smaller that 360px
    const isVerySmallDevice = useMediaQuery(theme.breakpoints.down('xxs'));
    //ICON
    const iconSize = isSmallDevice ? '5rem' : isLargeDevice ? '9rem' : '10rem';
    const iconPadding = isVerySmallDevice ? '10px' : isSmallDevice ? '13px' : isLargeDevice ? '17px' : '20px';
    return (
        <div>
            <ListItem sx={{ pr: { xxs: 0, md: 0, lg: 0 }, pl: { xxs: 0, sm: 2, md: 1, lg: 3 }, pt: { xxs: 0, sm: 1, md: 2 } }}>
                {/* ICON */}
                <ListItemIcon sx={{ display: { xxs: 'none', xs: 'block' } }}>
                    <IconWrapper size={iconSize} padding={iconPadding} color={'white'} backgroundColor={theme.palette.primary.light} borderRadius="50%">
                        {icon}
                    </IconWrapper>
                </ListItemIcon>
                {/* TEXT */}
                <ListItemText
                    sx={{ mx: { xxs: 0, xs: 2, sm: 3, md: 2, lg: 5 } }}
                    primary={<Typography variant="h3">{title}</Typography>}
                    secondary={
                        <Typography textAlign="justify" variant="body1">
                            {text}
                        </Typography>
                    }
                />
            </ListItem>
        </div>
    );
};

export default OurServiceItem;
