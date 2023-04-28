import { Button, Typography, FormControlLabel, Checkbox, Stack } from '@mui/material';
import Input from '../ui/Input';
import useInput from '../hooks/useInput';
import { validateEmail, validatePassword } from '../helpers/validators';
import { Link, useActionData } from 'react-router-dom';
import { Fragment } from 'react';
import { Form } from 'react-router-dom';

/**
 * Login Form control with necessary email address and password fields used to login to the platform a registered user.
 * The form makes use of the custom react hook "useInput" which is assigned to manage form state,
 * Every field state that gets a callback function also gets a unique validator.
 * The post submitted form will be redirected further to the router action function, that is responsible for communicating further with the server.
 * The submitted button is disabled until the form is valid.
 */
const LoginForm = () => {
    //Error data returned from the action request handler
    const data = useActionData();

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
    const isFormValid = emailIsValid && passwordIsValid;

    //SUBMIT HANDLER
    return (
        <Fragment>
            <Stack direction="column" alignItems="center" justifyContent="center" minHeight={'100vh'}>
                <Stack p={{ xxs: 2, sm: 5 }} sx={{ width: { xxs: '100%', sm: '50rem' } }} justifyContent={'center'}>
                    <Form method="post">
                        {/* TITLE */}
                        <Typography variant={'h2'} component="h1" textAlign="center" mb={8}>
                            Sign in
                        </Typography>
                        <Typography variant={'body2'} component="p" textAlign="center" mb={6} color={data ? 'red' : 'error'}>
                            {data ? data : ''}
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
                            helperText={`Invalid password`}
                            type={'password'}
                        ></Input>
                        <Stack direction="row" justifyContent={'space-between'} alignItems={'center'} mb={4}>
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
                                Forgotten Password
                            </Button>
                        </Stack>
                        {/* SUBMIT */}
                        <Button size="large" variant="contained" color="primary" type="submit" disabled={!isFormValid} sx={{ width: '100%' }}>
                            Sign In
                        </Button>
                    </Form>
                </Stack>
                {/* SIGN UP                  */}
                <Stack direction="row" justifyContent={'center'} alignItems={'center'} mb={8}>
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
