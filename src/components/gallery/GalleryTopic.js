import { Container } from '@mui/material';
import { Typography } from '@mui/material';
import GalleryGrid from './GalleryGrid';
import GreyBox from './../../ui/GreyBox';

/**
 * Gallery topic section component, consisting of a title, subtitle and a fully resposnive grid of images
 *
 */
const GalleryTopic = () => {
    return (
        <GreyBox>
            <Container>
                <Typography variant="h2" component="h2" textAlign="center" mb={3}>
                    Our previous work
                </Typography>
                <Typography
                    mb={{ xs: 4, sm: 5, md: 10 }}
                    variant="subtitle1"
                    component="p"
                    textAlign="center"
                    sx={{ maxWidth: '60ch', marginRight: 'auto', marginLeft: 'auto' }}
                >
                    Mattis aliquam faucibus purus in massa tempor nec feugiat nisl pretium fusce id velit ut tortor
                    pretium viverra .
                </Typography>

                <GalleryGrid />
            </Container>
        </GreyBox>
    );
};

export default GalleryTopic;
