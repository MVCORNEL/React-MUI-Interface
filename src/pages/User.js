import UserMenu from '../components/user/Menu/UserMenu';
import { Stack } from '@mui/material';
import SectionBox from '../ui/SectionBox';
import { useSearchParams } from 'react-router-dom';
import UserMessages from '../components/user/UserMessages';
import UserProfile from '../components/user/UserMe';
import UserReviews from '../components/user/UserReviews';
import UserTheme from '../components/user/UserTheme';

/**
 * The user page component page. The main components of the current page are rendered based on the query parameter.
 * On the left side a menu and on the right side the placeholder for the required pages.
 */
const User = () => {
    const [searchParams] = useSearchParams();
    const isProfileTab = searchParams.get('tab') === 'me';
    const isMessasgesTab = searchParams.get('tab') === 'messages';
    const isReviewsTab = searchParams.get('tab') === 'reviews';
    const isThemeTab = searchParams.get('tab') === 'theme';
    console.log('User');
    return (
        <SectionBox>
            <Stack direction="row" sx={{ boxShadow: '4px 4px 8px 4px rgba(0,0,0,0.3);' }}>
                <UserMenu />
                {isProfileTab && <UserProfile />}
                {isMessasgesTab && <UserMessages />}
                {isReviewsTab && <UserReviews />}
                {isThemeTab && <UserTheme />}
            </Stack>
        </SectionBox>
    );
};

export default User;
