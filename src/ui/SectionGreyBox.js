import backgroundLight from './../images/subtlelight.png';
import { Box } from '@mui/system';

/**
 * Represents a wrapper grey box that will be used to wrap section components.
 * Its background color is be given by the backgroungLight pattern
 *
 * @prop {component} children - the wrapped component within the grey box
 *
 */

const SectionGreyBox = ({ children }) => {
    return (
        <Box
            component="section"
            sx={{
                paddingTop: { xs: '4rem', sm: '5rem', md: '7rem', lg: '9rem' },
                paddingBottom: { xs: '4rem', sm: '5rem', md: '7rem', lg: '10rem' },
                backgroundImage: `url(${backgroundLight})`,
            }}
        >
            {children}
        </Box>
    );
};

export default SectionGreyBox;
