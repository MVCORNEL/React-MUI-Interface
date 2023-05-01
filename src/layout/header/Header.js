import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import { Container, Box, Button, Stack, Typography, Divider } from '@mui/material';
import img1 from './../../images/fitter.jpg';
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
                marginTop: { xxs: '4rem', sm: '5rem', md: '7rem', lg: '9rem' },
                marginBottom: { xxs: '4rem', sm: '5rem', md: '7rem', lg: '9rem' },
            }}
        >
            <Grid container spacing={{ xxs: 1, md: 1, lg: 10 }}>
                <Grid xxs={12} md={7}>
                    <Box>
                        {/* HEADING */}
                        <Typography variant="h1" component="h1">
                            Montare Termopane Ardelenesti
                        </Typography>
                        {/* SUBTITLE TEXT*/}
                        <Typography variant="body1" component="p" sx={{ textAlign: 'justify', marginTop: '2rem' }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet. A sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet.
                        </Typography>
                        {/* BUTTON */}
                        <Box mt={4}>
                            <Button variant="contained" color="primary" size="large" sx={{ display: { xxs: 'none', md: 'block' } }}>
                                Contact us
                            </Button>
                        </Box>
                        {/* EXTRA */}
                        <Box mt={{ xxs: 20, md: 10, lg: 15 }} textAlign sx={{ display: { xxs: 'none', md: 'block' } }}>
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
                {/* border="1px solid grey" p={2} */}
                <Grid xxs={12} md={5} alignSelf="center" pl={{ md: 10, lg: 3 }}>
                    {/* IMAGE */}
                    <Box width={{ xxs: '55%', sm: '30%', md: '100%' }} mr="auto" ml="auto">
                        <Image src={img1} alt="window image" fit="cover" duration={0} />
                    </Box>
                    {/* BUTTON */}
                    <Box mt={{ xxs: 4 }} sx={{ textAlign: 'center' }}>
                        <Button variant="contained" color="primary" size="large" sx={{ width: { xxs: '100%', sm: '60%' }, display: { sx: 'block', md: 'none' } }}>
                            Contact us
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Header;
