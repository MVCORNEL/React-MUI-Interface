import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import { Container, Box, Button, Stack, Typography, Divider } from '@mui/material';
import img1 from './../../images/window.jpg';
import Image from 'mui-image';

/**
 * Represents a two-segmented responsive header component.
 * First of them is a container containing text elements, while the other half represents an image.
 *
 */
const Header = () => {
    return (
        <Container
            component="section"
            sx={{
                marginTop: { xs: '4rem', sm: '5rem', md: '7rem', lg: '9rem' },
                marginBottom: { xs: '4rem', sm: '5rem', md: '7rem', lg: '9rem' },
            }}
        >
            <Grid container spacing={{ xs: 1, md: 5, lg: 10 }}>
                <Grid xs={12} md={7}>
                    <Box>
                        {/* HEADING */}
                        <Typography variant="h1" component="h1">
                            Montare termopane cu garantie
                        </Typography>
                        {/* SUBTITLE TEXT*/}
                        <Typography variant="body1" component="p" sx={{ textAlign: 'justify', marginTop: '2rem' }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet. A sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet.
                        </Typography>
                        {/* BUTTON */}
                        <Box mt={4}>
                            <Button variant="contained" color="primary" size="large" sx={{ display: { xs: 'none', md: 'block' } }}>
                                Calculeaza pret estimativ
                            </Button>
                        </Box>
                        {/* EXTRA */}
                        <Box mt={10} textAlign sx={{ display: { xs: 'none', md: 'block' } }}>
                            {/* EXTRA 1*/}
                            <Stack direction="row" spacing={7} divider={<Divider orientation="vertical" flexItem />}>
                                <Stack>
                                    <Typography variant="h4" component="span">
                                        1000+
                                    </Typography>
                                    <Typography variant="h5" component="span">
                                        Happy customers
                                    </Typography>
                                </Stack>
                                {/* EXTRA 2*/}
                                <Stack>
                                    <Typography variant="h4" component="span">
                                        20+
                                    </Typography>
                                    <Typography variant="h5" component="span">
                                        Years of trust
                                    </Typography>
                                </Stack>
                            </Stack>
                        </Box>
                    </Box>
                </Grid>

                <Grid xs={12} md={5} alignSelf="center">
                    {/* IMAGE */}
                    <Box p={2} border="1px solid grey" width={{ xs: '90%', sm: '60%', md: '100%' }} mr="auto" ml="auto">
                        <Image src={img1} alt="window image" fit="cover" duration={3000} showLoading={true} easing="ease-in" />
                    </Box>
                    {/* BUTTON */}
                    <Box mt={3} sx={{ textAlign: 'center' }}>
                        <Button variant="contained" color="primary" size="large" sx={{ width: { xs: '100%', sm: '65%' }, display: { sx: 'block', md: 'none' } }}>
                            Calculeaza pret estimativ
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Header;
