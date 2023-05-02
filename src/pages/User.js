import UserMenu from '../components/profile/Menu/UserMenu';
import { Stack, Container, Box } from '@mui/material';
import { useSearchParams } from 'react-router-dom';
import UserAskUs from '../components/profile/UserAskUs';
import UserProfile from '../components/profile/UserMe';
import UserReviews from '../components/profile/UserReviews';
import AdminProducts from '../components/profile/AdminProducts';
import AdminUsers from '../components/profile/AdminUsers';
import { json } from 'react-router-dom';
import { useEffect } from 'react';
import { isUserAuthentificated } from '../auth/user';
import { useNavigate } from 'react-router-dom';
/**
 * The user page component page. The main components of the current page are rendered based on the query parameter.
 * On the left side a menu and on the right side the placeholder for the required pages.
 */
const User = () => {
    const [searchParams] = useSearchParams();
    const isProfileTab = searchParams.get('tab') === 'me';
    const isMessasgesTab = searchParams.get('tab') === 'ask';
    const isReviewsTab = searchParams.get('tab') === 'reviews';
    const isProductsTab = searchParams.get('tab') === 'products';
    const isUsersTab = searchParams.get('tab') === 'users';
    const forUser = isProfileTab || isMessasgesTab || isReviewsTab;
    const forAdmin = isProductsTab || isUsersTab;
    useEffect(() => {
        if (!forUser && !forAdmin) {
            throw json({ message: 'The current route does exist' }, { status: 404 });
        }
    }, []);

    return (
        <Container
            sx={{
                marginTop: { xxs: '4rem', sm: '5rem', lg: '7rem' },
                marginBottom: { xxs: '4rem', sm: '5rem', lg: '7rem' },
            }}
        >
            <Stack
                direction={{ xss: 'column', md: 'row' }}
                sx={{
                    boxShadow: '4px 4px 8px 4px rgba(0,0,0,0.3);',
                    minHeight: '80vh',
                }}
            >
                {/* MENU */}
                <UserMenu />
                {/* USER's LIST */}
                {forUser && (
                    <Box mx={'auto'} mt={8} mb={8} sx={{ width: { xxs: '90%', md: '45rem', lg: '60rem' } }}>
                        {isProfileTab && <UserProfile />}
                        {isMessasgesTab && <UserAskUs />}
                        {isReviewsTab && <UserReviews />}
                    </Box>
                )}

                {/* USER's LIST */}
                {forAdmin && (
                    <Box mx={'auto'} mt={8} mb={8} width={'100%'} sx={{ minWidth: 0 }} px={2}>
                        {isProductsTab && <AdminProducts />}
                        {isUsersTab && <AdminUsers />}
                    </Box>
                )}
            </Stack>
        </Container>
    );
};

export default User;
