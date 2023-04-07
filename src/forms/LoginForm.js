import { Button, Box, Typography, FormControlLabel, Checkbox, Stack } from '@mui/material';
import { authActions } from '../store/auth-slice';
import { useDispatch } from 'react-redux';
import Input from '../ui/Input';
import useInput from '../hooks/useInput';
import { validateEmail, validatePassword } from '../helpers/validators';
import { useSearchParams, Link } from 'react-router-dom';
import { Fragment } from 'react';

/**
 * Login Form control with necessary email address and password fields used to login to the platform a registered user.
 * The form makes use of the custom react hook "useInput" which is assigned to manage form state,
 * Every field state that gets a callback function also gets a unique validator.
 *
 */
const LoginForm = () => {
    //useSearchParams returns the query parameters and allows change in the component functionality without using the component state
    //alternative way of using state, but now we can directly link to a page into a certain mode
    const [searchParams, setSearchParam] = useSearchParams();
    const dispatch = useDispatch();

    const loginHandler = () => {
        dispatch(authActions.login());
    };
    //EMAIL
    const {
        value: emailValue,
        isValid: emailIsValid,
        hasError: emailHasError,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        reset: resetEmail,
    } = useInput(validateEmail);
    //PASSWORD
    const {
        value: passwordValue,
        isValid: passwordIsValid,
        hasError: passwordHasError,
        valueChangeHandler: passwordChangeHandler,
        inputBlurHandler: passwordBlurHandler,
        reset: resetPassword,
    } = useInput(validatePassword);
    //VALIDATOR FUNCTION
    const isFormValid = () => {
        return emailIsValid && passwordIsValid;
    };
    //SUBMIT HANDLER
    const formSubmitHandler = () => {};

    return (
        <Fragment>
            <Stack direction="column" alignItems="center" justifyContent="space-between" minHeight="100vh">
                <Box p={{ xxs: 2, sm: 5 }} sx={{ width: { xxs: '100%', sm: '50rem' } }} justifySelf={'center'}>
                    <form onSubmit={formSubmitHandler}>
                        {/* TITLE */}
                        <Typography variant={'h2'} component="h1" textAlign="center" my={6}>
                            Sign in
                        </Typography>
                        {/* EMAIL */}
                        <Input
                            id={'email'}
                            label="Email"
                            value={emailValue}
                            isValid={emailHasError}
                            error={emailHasError}
                            onChange={emailChangeHandler}
                            onBlur={emailBlurHandler}
                            helperText={`Invalid email format`}
                        ></Input>
                        {/* PASSWORD */}
                        <Input
                            id={'password'}
                            label="Password"
                            value={passwordValue}
                            isValid={passwordHasError}
                            error={passwordHasError}
                            onChange={passwordChangeHandler}
                            onBlur={passwordBlurHandler}
                            helperText={`Invalid password format`}
                        ></Input>
                        <Stack direction="row" justifyContent={'space-between'} alignItems={'center'} mb={8}>
                            {/* REMEMBER ME */}
                            <FormControlLabel
                                control={<Checkbox defaultChecked />}
                                label={
                                    <Typography color="#555" variant="body2">
                                        Remember me !
                                    </Typography>
                                }
                            />
                            {/* RECOVERY PASSWORD */}
                            <Button component={Link} to="?mode=forgot" sx={{ color: '#222!important' }}>
                                Forgot Password
                            </Button>
                        </Stack>
                        {/* SUBMIT */}
                        <Button size="large" variant="contained" color="primary" type="submit" disabled={!isFormValid} sx={{ width: '100%' }}>
                            Sign In
                        </Button>
                    </form>
                </Box>
                {/* SIGN UP                  */}
                <Stack direction="row" justifyContent={'center'} alignItems={'center'} mb={4}>
                    <Typography variant="body1" color="#555">
                        Don't have an account yet ?
                    </Typography>
                    {/* SING UP */}
                    <Button component={Link} to="?mode=signup" sx={{ color: '#222!important' }}>
                        Sign Up
                    </Button>
                </Stack>
            </Stack>
        </Fragment>
    );
};

export default LoginForm;
