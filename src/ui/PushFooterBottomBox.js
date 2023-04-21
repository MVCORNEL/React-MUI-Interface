import { Box } from '@mui/material';

/**
 * Represents a wrapper box that will push the last element at the very end of the page.
 * Used to push and keep the footer at the bottom of the page.
 *
 * @prop {children} heading - The content of the current Box
 *
 */
const PushFooterBottomBox = ({ children }) => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
                '& > *:last-child': {
                    marginTop: 'auto',
                },
            }}
        >
            {children}
        </Box>
    );
};

export default PushFooterBottomBox;
