import { Typography, Box, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
/**
 * Represents the responsive application footer component. The footer contains 3 section.
 * First one Logo plus text, second navigable links,while the last section ti is represented by the Copyright.
 *
 */
const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                padding: 5,
                backgroundColor: '#24262b',
                color: 'white',
                display: 'block',
                marginTop: '20rem',
                width: ' 100%',
            }}
        >
            {/* COPYRIGHT */}
            <Box sx={{ textAlign: 'center' }}>
                <Container maxWidth="lg">
                    <Typography variant="subtitle1" color="white" p={2}>
                        Copyright @2023. All rights reserved to Manea Valentin Cornel.
                    </Typography>
                    <Typography variant={'body1'} component={Link} to={'/credits'} sx={{ color: 'white' }}>
                        Credits
                    </Typography>
                </Container>
            </Box>
        </Box>
    );
};

export default Footer;
