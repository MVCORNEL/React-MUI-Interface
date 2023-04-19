import { Button, Typography, Stack } from '@mui/material';
import Input from '../ui/Input';
import useInput from '../hooks/useInput';
import { validateEmail } from '../helpers/validators';
import { Form, Link, useActionData } from 'react-router-dom';
import { Fragment } from 'react';
/**
 * Form control with necessary email address, used to send a reset link to the specified email address.
 * The form makes use of the custom react hook "useInput" which is assigned to manage form state,
 * The field state that gets a callback function also gets a unique validator.
 * The submitted form will be redirected further to the router action function, that is responsible for communicating further with the server.
 * The submitted button is disabled until the form is valid.
 */
const ForgotPasswordForm = () => {
    //EMAIL
    //Error data returned from the action request handler
    const data = useActionData();
    const {
        value: emailValue,
        isValid: emailIsValid,
        hasError: emailHasError,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        reset: resetEmail,
    } = useInput(validateEmail);
    //VALIDATOR FUNCTION
    const isFormValid = emailIsValid;

    return (
        <Fragment>
            <Stack direction="column" alignItems="center" justifyContent="center" minHeight={'100vh'}>
                <Stack p={{ xxs: 2, sm: 5 }} sx={{ width: { xxs: '100%', sm: '50rem', flex: 1 } }} justifyContent={'center'}>
                    <Form method="post">
                        {/* TITLE */}
                        <Typography variant={'h2'} component="h1" textAlign="center" mb={6}>
                            Find your account
                        </Typography>
                        {/* SUBTITLE */}
                        <Typography variant={'body2'} component="p" textAlign="center" mb={6} color={data ? 'red' : '#222'}>
                            {data ? data : ' Enter the email associated with your account and we will send you a reset link.! '}
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
                    </Form>
                </Stack>

                <Stack direction="row" justifyContent={'center'} alignItems={'center'} mb={8}>
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
