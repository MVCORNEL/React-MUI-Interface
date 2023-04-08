import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import { Container, Box, Button, Typography, Card, CardActions, CardContent } from '@mui/material';
import HeaderCard from './HeaderCard';
import backgroundLight from './../../../images/background.jpg';

/**
 * Represents a fully responsive two-segmented responsive header component of the Products/Double Glazed page
 * First of them is a container containing a heading and a button, while the other is represented by a card that contains a list of elements
 *
 */
const HeaderProducts = () => {
    return (
        <Box sx={{ position: 'relative', backgroundImage: `url(${backgroundLight})`, backgroundSize: 'cover', minHeight: { xss: 'auto', md: '95vh' }, width: '100%' }}>
            {/* BACKGROUND COLOR - FIRST HALF */}
            <Container
                component="section"
                sx={{
                    paddingTop: { xxs: '5rem', sm: '5rem', md: '7rem', lg: '9rem' },
                    marginBottom: { xxs: '2rem', sm: '3rem', md: '3rem', lg: '5rem' },
                    position: 'relative',
                    zIndex: 1000,
                }}
            >
                <Grid container spacing={{ xxs: 1, md: 4, lg: 6 }}>
                    {/* LEFT SIDE */}
                    <Grid xxs={12} md={6}>
                        <Box>
                            {/* HEADING */}
                            <Typography variant="h1" component="h1" color="white" backgroundColor="rgba(0,0,0,0.6)" py={2} px={5}>
                                Termopane de calitate superioara
                            </Typography>
                            {/* BUTTON */}
                        </Box>
                    </Grid>
                    {/* RIGHT SIDE */}
                    <Grid xxs={12} md={6} alignSelf="center">
                        {/* CARD */}
                        <HeaderCard />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default HeaderProducts;
