import { Typography, Container } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import GetInTouchForm from './GetInTouchForm';
import Contacts from './Contacts';

/**
 * Component section used to display contact details and providing a way of communicating with the bussines represantives.
 * First of them is a text container with text elements where the contact information is displayed,
 * and the other half is a simple form with fields for an email address, a phone number,
 * and text that needs to be communicated to the business representatives.
 * Using Mui Grid and break points, the section is fully responsive.
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
