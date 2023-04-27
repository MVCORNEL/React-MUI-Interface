import { Container, Box, Typography, Stack } from '@mui/material';
import backgroundImage from './../../../images/background-product.jpg';
import SubHeader from './ProductSubHeader';

/**
 * Represents a two parts responsive header component.
 * First part is represented by a container with a header and a box
 * Second part is represented by a grid of elements
 *
 */
const HeaderProduct = () => {
    return (
        <Box sx={{ position: 'relative', backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', width: '100%', height: 'auto' }}>
            {/* BACKGROUND COLOR - FIRST HALF */}

            <Container
                component="section"
                sx={{
                    paddingTop: { xxs: '5rem', sm: '5rem', md: '7rem', lg: '9rem' },
                    marginBottom: { xxs: '2rem', sm: '3rem', md: '3rem', lg: '5rem' },
                    position: 'relative',
                }}
            >
                {/* HEADING */}
                <Box textAlign="center">
                    <Typography
                        variant="h1"
                        component="h1"
                        color="white"
                        backgroundColor="rgba(0,0,0,0.6)"
                        py={2}
                        px={6}
                        display={'inline-block'}
                        mb={{ xxs: '2rem', xs: '5rem', md: '9rem', lg: '17rem' }}
                    >
                        Ferestre de temopan
                    </Typography>
                </Box>

                <Box position={'relative'} sx={{ bottom: '-11rem', marginTop: '-11rem', mb: '15rem' }}>
                    <SubHeader />
                </Box>
            </Container>
        </Box>
    );
};

export default HeaderProduct;
