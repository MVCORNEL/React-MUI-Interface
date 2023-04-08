import { Button, Box, Typography, FormControlLabel, Checkbox, Stack } from '@mui/material';
import { authActions } from '../store/auth-slice';
import { useDispatch } from 'react-redux';
import Input from '../ui/Input';
import useInput from '../hooks/useInput';
import { validateEmail } from '../helpers/validators';
import { useSearchParams, Link } from 'react-router-dom';
import { Fragment } from 'react';

/**
 * Form control with necessary email address, used to send a reset link to the specified email address.
 * The form makes use of the custom react hook "useInput" which is assigned to manage form state,
 * The field state that gets a callback function also gets a unique validator.
 *
 */
const ForgotPasswordForm = () => {
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
    //VALIDATOR FUNCTION
    const isFormValid = () => {
        return emailIsValid;
    };
    //SUBMIT HANDLER
    const formSubmitHandler = () => {};

    return (
        <Fragment>
            <Stack direction="column" alignItems="center" justifyContent="center" minHeight={'100vh'}>
                <Stack p={{ xxs: 2, sm: 5 }} sx={{ width: { xxs: '100%', sm: '50rem', flex: 1 } }} justifyContent={'center'}>
                    <form onSubmit={formSubmitHandler}>
                        {/* TITLE */}
                        <Typography variant={'h2'} component="h1" textAlign="center" mb={6}>
                            Find your account
                        </Typography>
                        {/* TITLE */}
                        <Typography variant={'body2'} component="p" fontWeight={700}>
                            Enter the emaila associated with your account and we will send you a reset link.
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

                        <Stack>
                            {/* SUBMIT */}
                            <Button size="large" variant="contained" color="primary" type="submit" disabled={!isFormValid} sx={{ width: '100%' }}>
                                Send Reset Link
                            </Button>
                        </Stack>
                    </form>
                </Stack>

                <Stack direction="row" justifyContent={'center'} alignItems={'center'} mb={4}>
                    <Typography variant="body1" color="#555">
                        Already have an account ?
                    </Typography>
                    {/* SING UP */}
                    <Button component={Link} to="?mode=login" sx={{ color: '#222!important' }}>
                        Login
                    </Button>
                </Stack>
            </Stack>
        </Fragment>
    );
};

export default ForgotPasswordForm;
