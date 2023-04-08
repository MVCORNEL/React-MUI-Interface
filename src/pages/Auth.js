import { useSearchParams, Link } from 'react-router-dom';
import { Stack, Box } from '@mui/material';
import Image from 'mui-image';
import image from './../images/auth.png';
import LoginForm from '../forms/LoginForm';
import SignupForm from '../forms/SignupForm';
import ForgotPasswordForm from '../forms/ForgotPasswordForm';

const Auth = () => {
    //useSearchParams returns the query parameters and allows change in the component functionality without using the component state
    //alternative way of using state, but now we can directly link to a page into a certain mode
    const [searchParams, setSearchParam] = useSearchParams();
    const isLoginMode = searchParams.get('mode') === 'login';
    const isSignupMode = searchParams.get('mode') === 'signup';
    const isForgottenMode = searchParams.get('mode') === 'forgot';

    return (
        <Stack direction="row">
            <Stack sx={{ flexBasis: '100%', backgroundColor: '#f9efe5', justifyContent: 'center', alignItems: 'center', display: { xxs: 'none', md: 'flex' } }}>
                <Image src={image} alt="window image" fit="cover" duration={500} showLoading={true} easing="ease-in" height="auto" width="90%" />
            </Stack>
            <Box sx={{ flexBasis: '100%' }}>
                {isLoginMode && <LoginForm />}
                {isSignupMode && <SignupForm />}
                {isForgottenMode && <ForgotPasswordForm />}
            </Box>
        </Stack>
    );
};

export default Auth;
