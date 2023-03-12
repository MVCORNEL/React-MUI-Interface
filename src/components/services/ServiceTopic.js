import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import { Container, Stack, Typography, Box, Button, List } from '@mui/material';
import Image from 'mui-image';
import ServiceItem from './ServiceItem';

/**
 * Service topic section component, consiting in two equal segment one of them representing an image,
 * while the other one represents a text topc that includes (a title, a subtitle , a list of steps, and a link)
 * The image won't be displayed on small devices (md being the breakpoint)
 *
 * @prop {string} title - topic heading title
 * @prop {string} subtitle - subtitle topic representing more details about the topic
 * @prop {array} list - list containing text items, icons, and keys for the list elements
 * @prop {url} image - url to image
 * @prop {url} link - url to a page or id
 * @prop {boolean} isPlacedRight - url to image
 *
 */
const ServiceTopic = ({ title, subtitle, list, image, link, isPlacedRight }) => {
    return (
        <Container
            sx={{
                marginTop: { xs: '5rem', sm: '6rem', md: '7rem', lg: '9rem' },
                marginBottom: { xs: '5rem', sm: '6rem', md: '7rem', lg: '9rem' },
            }}
        >
            <Grid container spacing={{ xs: 4, ms: 10, md: 8, lg: 10 }}>
                <Grid xs={12} md={6} sx={{ order: isPlacedRight ? '0' : '2' }}>
                    <Stack>
                        {/* TITLE */}
                        <Typography variant="h2" component="h2" mb={3}>
                            {title}
                        </Typography>
                        {/* SUBTITLE */}
                        <Typography variant="subtitle1" component="p" mb={1}>
                            {subtitle}
                        </Typography>
                        {/* TEXT ELEMENTS */}
                        <Box>
                            <List>
                                {list.map((step) => {
                                    return <ServiceItem key={step.id} text={step.text} icon={step.icon} />;
                                })}
                            </List>
                        </Box>
                    </Stack>
                    {/* REFERENCE LINK */}
                    <Button size="small" href="#" sx={{ marginTop: '2rem', display: 'block' }}>
                        {link} <span>&rarr;</span>
                    </Button>
                </Grid>
                {/* IMAGE */}
                <Grid xs={12} md={6} sx={{ display: { xs: 'none', md: 'block' } }}>
                    <Image
                        src={image}
                        alt="window image"
                        fit="cover"
                        duration={3000}
                        showLoading={true}
                        easing="ease-in"
                    />
                </Grid>
            </Grid>
        </Container>
    );
};

export default ServiceTopic;
