import { Button, Box, Typography, FormControlLabel, Checkbox, Stack } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { authActions } from '../store/auth-slice';
import { useDispatch } from 'react-redux';
import Input from '../ui/Input';
import useInput from '../hooks/useInput';
import { validateEmail, validatePassword, validatePhone, validateName, validateRetypedPassword } from '../helpers/validators';
import { useSearchParams, Link } from 'react-router-dom';
import { Fragment } from 'react';

/**
 * Signup form control with necessary first name, last name, email address, phone number and password fields used to create an user account.
 * The form makes use of the custom react hook "useInput" which is assigned to manage form state.
 * Every field state that gets a callback function also gets a unique validator.
 *
 */
const SignupForm = () => {
    //useSearchParams returns the query parameters and allows change in the component functionality without using the component state
    //alternative way of using state, but now we can directly link to a page into a certain mode
    const [searchParams, setSearchParam] = useSearchParams();
    const isLoginMode = searchParams.get('mode') === 'login';
    const dispatch = useDispatch();
    const loginHandler = () => {
        dispatch(authActions.login());
    };

    const {
        value: firstNameValue,
        isValid: firstNameIsValid,
        hasError: firstNameHasError,
        valueChangeHandler: firstNameChangeHandler,
        inputBlurHandler: firstNameBlurHandler,
        reset: resetFirstName,
    } = useInput(validateName);

    const {
        value: lastNameValue,
        isValid: lastNameIsValid,
        hasError: lastNameHasError,
        valueChangeHandler: lastNameChangeHandler,
        inputBlurHandler: lastNameBlurHandler,
        reset: resetLastName,
    } = useInput(validateName);

    const {
        value: emailValue,
        isValid: emailIsValid,
        hasError: emailHasError,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        reset: resetEmail,
    } = useInput(validateEmail);

    const {
        value: phoneValue,
        isValid: phoneIsValid,
        hasError: phoneHasError,
        valueChangeHandler: phoneChangeHandler,
        inputBlurHandler: phoneBlurHandler,
        reset: resetPhone,
    } = useInput(validatePhone);

    const {
        value: passwordValue,
        isValid: passwordIsValid,
        hasError: passwordHasError,
        valueChangeHandler: passwordChangeHandler,
        inputBlurHandler: passwordBlurHandler,
        reset: resetPassword,
    } = useInput(validatePassword);

    const {
        value: retypedPasswordValue,
        isValid: retypedPasswordIsValid,
        hasError: retypedPasswordHasError,
        valueChangeHandler: retypedPasswordChangeHandler,
        inputBlurHandler: retypedPasswordBlurHandler,
        reset: resetRetypedPassword,
    } = useInput(validateRetypedPassword);

    const isFormValid = () => {
        return emailIsValid && passwordIsValid;
    };

    const formSubmitHandler = () => {};

    return (
        <Fragment>
            <Stack direction="column" alignItems="center" justifyContent="space-between" minHeight="100vh">
                <Box p={{ xxs: 2, sm: 5 }} sx={{ width: { xxs: '100%', sm: '60rem' } }} justifySelf={'center'}>
                    <form onSubmit={formSubmitHandler}>
                        <Grid container columnSpacing={1}>
                            {/* TITLE */}
                            <Grid xxs={12}>
                                <Typography variant={'h2'} component="h1" textAlign="center" my={6}>
                                    Register
                                </Typography>
                            </Grid>
                            {/* FIRST NAME */}

                            <Grid xxs={12} md={6}>
                                <Input
                                    id={'fname'}
                                    label="First Name"
                                    value={firstNameValue}
                                    isValid={firstNameHasError}
                                    error={firstNameHasError}
                                    onChange={firstNameChangeHandler}
                                    onBlur={firstNameBlurHandler}
                                    helperText={`At least 2 character required`}
                                ></Input>
                            </Grid>
                            {/* LAST NAME */}
                            <Grid xxs={12} md={6}>
                                <Input
                                    id={'lname'}
                                    label="Last Name"
                                    value={lastNameValue}
                                    isValid={lastNameHasError}
                                    error={lastNameHasError}
                                    onChange={lastNameChangeHandler}
                                    onBlur={lastNameBlurHandler}
                                    helperText={`At least 2 character required`}
                                ></Input>
                            </Grid>
                            {/* EMAIL */}
                            <Grid xxs={12} md={6}>
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
                            </Grid>
                            {/* PHONE */}
                            <Grid xxs={12} md={6}>
                                <Input
                                    id={'phone'}
                                    label="Phone"
                                    value={phoneValue}
                                    isValid={phoneHasError}
                                    error={phoneHasError}
                                    onChange={phoneChangeHandler}
                                    onBlur={phoneBlurHandler}
                                    helperText={`Invalid phone format`}
                                ></Input>
                            </Grid>
                            {/* PASSWORD */}
                            <Grid xxs={12}>
                                <Input
                                    id={'password'}
                                    label="Password"
                                    value={passwordValue}
                                    isValid={passwordHasError}
                                    error={passwordHasError}
                                    onChange={passwordChangeHandler}
                                    onBlur={passwordBlurHandler}
                                    helperText={`Password must contain a small letter ,a capital letter, a digit and at least 8 characters length`}
                                ></Input>
                            </Grid>
                            {/* RETYPED PASSWORD */}
                            <Grid xxs={12}>
                                <Input
                                    id={'rpassword'}
                                    label="Confirm Password"
                                    value={retypedPasswordValue}
                                    isValid={retypedPasswordHasError}
                                    error={retypedPasswordHasError}
                                    onChange={retypedPasswordChangeHandler}
                                    onBlur={retypedPasswordBlurHandler}
                                    helperText={`The passwords do not match`}
                                ></Input>
                            </Grid>
                            <Grid xxs={12} display="flex" direction="row" alignItems={'center'} justifyContent={'center'} mb={8}>
                                {/* REGISTER TERMS AND AGREEMENT */}
                                <FormControlLabel
                                    control={<Checkbox defaultChecked />}
                                    label={
                                        <Typography color="#555" variant="body2">
                                            Accept terns ang agreement!
                                        </Typography>
                                    }
                                />
                            </Grid>
                            {/* SUBMIT */}
                            <Grid xxs={12}>
                                <Button size="large" variant="contained" color="primary" type="submit" disabled={!isFormValid} sx={{ width: '100%' }}>
                                    Sign In
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Box>
                {/* LOGIN FORM */}
                <Stack direction="row" justifyContent={'center'} alignItems={'center'} mb={4}>
                    <Typography variant="body1" color="#555">
                        Already have an account ?
                    </Typography>
                    <Button component={Link} to="?mode=login" sx={{ color: '#222!important' }}>
                        Login
                    </Button>
                </Stack>
            </Stack>
        </Fragment>
    );
};

export default SignupForm;
