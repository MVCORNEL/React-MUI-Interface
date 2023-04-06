import { Box } from '@mui/material';

const IconWrapper = ({ size, color, backgroundColor, padding, children, borderRadius, marginBottom }) => {
    return (
        <Box
            sx={{
                '& svg': {
                    width: size,
                    height: size,
                    display: 'block',
                    marginRight: 'auto',
                    marginLeft: 'auto',
                    marginBottom: `${marginBottom ? marginBottom : 0}`,
                    padding: `${padding ? padding : '10px'}`,
                    background: `${backgroundColor ? backgroundColor : 'transparent'}`,
                    borderRadius: `${borderRadius ? borderRadius : '0'}`,
                    overflow: 'visible',
                },
                '& svg path': {
                    fill: color,
                },
            }}
        >
            {children}
        </Box>
    );
};

export default IconWrapper;
