import UserMenu from '../components/profile/Menu/UserMenu';
import { Stack, Container, Box } from '@mui/material';
import { useSearchParams } from 'react-router-dom';
import UserAskUs from '../components/profile/UserAskUs';
import UserProfile from '../components/profile/UserMe';
import UserReviews from '../components/profile/UserReviews';
import UserTheme from '../components/profile/UserTheme';

/**
 * The user page component page. The main components of the current page are rendered based on the query parameter.
 * On the left side a menu and on the right side the placeholder for the required pages.
 */
const User = () => {
    const [searchParams] = useSearchParams();
    const isProfileTab = searchParams.get('tab') === 'me';
    const isMessasgesTab = searchParams.get('tab') === 'ask';
    const isReviewsTab = searchParams.get('tab') === 'reviews';
    const isThemeTab = searchParams.get('tab') === 'theme';

    return (
        <Container
            sx={{
                marginTop: { xxs: '4rem', sm: '5rem', lg: '7rem' },
                marginBottom: { xxs: '4rem', sm: '5rem', lg: '7rem' },
            }}
        >
            <Stack
                direction={{ xxs: 'column', md: 'row' }}
                sx={{
                    width: '100%',

                    boxShadow: '4px 4px 8px 4px rgba(0,0,0,0.3);',
                }}
            >
                <UserMenu />

                <Box mx={'auto'} mt={8} mb={8} sx={{ width: { xxs: '90%', md: '45rem', lg: '60rem' } }}>
                    {isProfileTab && <UserProfile />}
                    {isMessasgesTab && <UserAskUs />}
                    {isReviewsTab && <UserReviews />}
                    {isThemeTab && <UserTheme />}
                </Box>
            </Stack>
        </Container>
    );
};

export default User;
