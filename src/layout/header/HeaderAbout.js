import { Container, Box, Typography } from '@mui/material';
import Image from 'mui-image';
import team from './../../images/team.jpg';
import TeamTopic from '../../components/team/TeamTopic';

/**
 * Represents a two parts responsive header component.
 * First part is represented by a container with a header and a box
 * Second part is represented by a grid of cards
 *
 */
const HeaderAbout = () => {
    return (
        <Box mr="auto" ml="auto" sx={{ position: 'relative' }}>
            <Box sx={{ position: 'relative' }}>
                {/* TITLE */}
                <Box
                    sx={{
                        position: 'absolute',
                        zIndex: 2000,
                        textAlign: 'center',
                        backgroundColor: 'rgba(0,0,0,0.6)',
                        marginTop: { xxs: '4rem', sm: '5rem', md: '7rem', lg: '9rem' },
                        left: '50%',
                        transform: 'translateX(-50%)',
                    }}
                >
                    <Typography variant="h1" component="h1" color="white" py={2} px={5}>
                        DESPRE NOI
                    </Typography>
                </Box>
                {/* IMAGE */}
                <Image src={team} alt="window image" fit="cover" duration={500} showLoading={true} easing="ease-in" height={'60rem'} />
            </Box>
            {/* TEAM CARDS */}
            <Container sx={{ marginTop: '-35rem', marginBottom: { md: '-10rem' }, zIndex: '2000', marginLeft: '50%', transform: 'translateX(-50%)' }}>
                <TeamTopic />
            </Container>
        </Box>
    );
};

export default HeaderAbout;
