import { Container, Box, Typography, Grid } from '@mui/material';
import background from './../../images/team.jpg';
import TeamTopic from '../../components/team/TeamTopic';

/**
 * Represents a two parts responsive header component.
 * First part is represented by a container with a header and a box
 * Second part is represented by a grid of cards
 *
 */
const HeaderAbout = () => {
    return (
        <Box sx={{ position: 'relative', backgroundImage: `url(${background})`, backgroundSize: 'cover', width: '100%', height: 'auto' }}>
            {/* BACKGROUND COLOR - FIRST HALF */}
            <Container
                component="section"
                sx={{
                    paddingTop: { xxs: '5rem', sm: '5rem', md: '7rem', lg: '9rem' },
                    position: 'relative',
                }}
            >
                {/* HEADING */}
                <Box textAlign="center">
                    <Typography variant="h1" component="h1" color="white" backgroundColor="rgba(0,0,0,0.6)" py={2} px={6} display={'inline-block'}>
                        Despre noi
                    </Typography>
                </Box>

                <Box position={'relative'} sx={{ bottom: '-32rem', marginTop: '-30rem', marginBottom: { xxs: '32rem', md: '26rem', lg: '22rem' } }}>
                    <TeamTopic />
                </Box>
            </Container>
        </Box>
    );
};

export default HeaderAbout;
