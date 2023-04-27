import { Box, Typography, Stack } from '@mui/material';
import IconWrapper from '../../../ui/IconWrapper';
import { useTheme } from '@mui/material/styles';

/**
 * Represents a list item component that is made up of a tille, and an icon element.
 *
 * @prop {string} title - expects title describing the category
 * @prop {svg} icon - expects a svg icon
 */
const ProductSubHeaderItem = ({ icon, title }) => {
    const theme = useTheme();
    return (
        <Box sx={{ flexBasis: '100%' }}>
            {/* ICON */}
            <IconWrapper size="9rem" marginBottom="2rem" color={theme.palette.primary.main}>
                {icon}
            </IconWrapper>
            {/* TEXT */}
            <Typography variant="h6" component="h3" textAlign="center" color={theme.palette.primary.main} maxWidth={'12ch'} mx="auto">
                {title}
            </Typography>
        </Box>
    );
};

export default ProductSubHeaderItem;
