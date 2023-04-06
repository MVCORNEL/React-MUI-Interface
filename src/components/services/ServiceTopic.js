import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import { Stack, Typography, Box, Button, List } from '@mui/material';
import SectionBox from '../../ui/SectionBox';
import Image from 'mui-image';
import ServiceItem from './ServiceItem';

/**
 * The component of the service topic section is divided into two equal segments, one of which contains an image.
 * One represents a text topic that includes, while the other (a title, a subtitle, a list of steps, and a link)
 * One represents an inclusive text topic, while the other (a title, a subtitle, a list of steps, and a link)
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
        <SectionBox>
            <Grid mb={{ xxs: '-4rem', sm: '-5rem', md: '-7rem', lg: '-10rem' }} container spacing={{ xxs: 4, ms: 10, md: 7, lg: 9 }}>
                <Grid xxs={12} md={7} sx={{ order: isPlacedRight ? '0' : '2' }}>
                    <Stack>
                        {/* TITLE */}
                        <Typography variant="h2" component="h2" mb={3}>
                            {title}
                        </Typography>
                        {/* SUBTITLE */}
                        <Typography variant="body1" component="p" mb={1}>
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
                <Grid xxs={12} md={5} sx={{ display: { xxs: 'none', md: 'flex' }, alignItems: 'center' }}>
                    <Image src={image} alt="window image" fit="cover" duration={3000} showLoading={true} easing="ease-in" height="85%" />
                </Grid>
            </Grid>
        </SectionBox>
    );
};

export default ServiceTopic;
