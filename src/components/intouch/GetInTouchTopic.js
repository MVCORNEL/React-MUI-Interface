import { Typography, Container } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import GetInTouchForm from './GetInTouchForm';
import Contacts from './Contacts';

/**
 * Component section used to list contact information and offer a way to get in touch with business representatives.
 * The first part consists of a text container with text elements where the contact details are shown,
 * and the other half is a straightforward form with fields for an email address, a phone number,
 * and text that needs to be communicated to the company representatives.
 * The section is entirely responsive thanks to Mui Grid and break points.
 *
 */
const GetInTouchTopic = () => {
    return (
        <Container
            component="section"
            sx={{
                paddingTop: { xs: '4rem', sm: '5rem', md: '7rem', lg: '9rem' },
                paddingBottom: { xs: '4rem', sm: '5rem', md: '7rem', lg: '10rem' },
            }}
        >
            <Typography variant={'h2'} component={'h2'} align="center" mb={2}>
                Get in Touch
            </Typography>

            <Typography
                mb={{ xs: 4, sm: 5, md: 10 }}
                variant="subtitle1"
                component="p"
                textAlign="center"
                sx={{ maxWidth: '60ch', marginRight: 'auto', marginLeft: 'auto' }}
            >
                Mattis aliquam faucibus purus in massa tempor nec feugiat nisl pretium fusce id velit ut tortor pretium
                viverra .
            </Typography>

            <Grid container spacing={{ xs: 4, md: 4 }}>
                <Grid xs={12} md={6}>
                    <Contacts />
                </Grid>
                <Grid xs={12} md={6}>
                    <GetInTouchForm />
                </Grid>
            </Grid>
        </Container>
    );
};

export default GetInTouchTopic;
