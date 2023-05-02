import { useEffect, useCallback } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Stack, Typography } from '@mui/material';
import { Form } from 'react-router-dom';
import useInput from '../hooks/useInput';
import Input from '../ui/Input';
import { validateEmail, validatePassword, validatePhone, validateName } from '../helpers/validators';
import PropTypes from 'prop-types';
import { useActionData } from 'react-router-dom';
import useHttp from '../hooks/useHttp';
import { useNavigate } from 'react-router';
import URL from '../consts/URL';
/**
 * Product dialog box functional component, resposible for adding and edditing the current users.
 * When editing an element, the data will be automatically fetched based on the user id.
 * Client side validation for every single field.
 * @param {boolean} open if the box is visibile or not
 * @param {function} onClose close dialog callback
 * @param {boolean} mode  requires a string "PATCH" or "POST"
 * @param {string} id requried to update product id
 * @returns
 */
const UserDialog = ({ open, onClose, mode, id }) => {
    //Navigate hook used to refresh the page
    const navigate = useNavigate();
    //Error data returned from the action request handler
    const error = useActionData();

    const {
        value: firstNameValue,
        isValid: firstNameIsValid,
        hasError: firstNameHasError,
        valueChangeHandler: firstNameChangeHandler,
        inputBlurHandler: firstNameBlurHandler,
        reset: resetFirstName,
        setValue: setFirstName,
    } = useInput(validateName);

    const {
        value: lastNameValue,
        isValid: lastNameIsValid,
        hasError: lastNameHasError,
        valueChangeHandler: lastNameChangeHandler,
        inputBlurHandler: lastNameBlurHandler,
        reset: resetLastName,
        setValue: setLastName,
    } = useInput(validateName);

    const {
        value: emailValue,
        isValid: emailIsValid,
        hasError: emailHasError,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        reset: resetEmail,
        setValue: setEmail,
    } = useInput(validateEmail);

    const {
        value: phoneValue,
        isValid: phoneIsValid,
        hasError: phoneHasError,
        valueChangeHandler: phoneChangeHandler,
        inputBlurHandler: phoneBlurHandler,
        reset: resetPhone,
        setValue: setPhoneNumber,
    } = useInput(validatePhone);

    const {
        value: passwordValue,
        isValid: passwordIsValid,
        hasError: passwordHasError,
        valueChangeHandler: passwordChangeHandler,
        inputBlurHandler: passwordBlurHandler,
        reset: resetPassword,
        setValue: setPassword,
    } = useInput(validatePassword);

    //Function used to return a request object for the url configuration, this function is used as a configuration for the useHttp custom hook.
    //Wrapped inside the useCallback custom hook, this function ensures that it won't re-render when the current component is revaluated, preventing the issue with infinite loops.
    const ceateRequestConfig = useCallback(() => {
        return { url: `${URL}/api/v1/users/${id}` };
    }, [id]);

    //Function used to return an request object configuration for cookie credentials, this function will be passed as configuration for the useHttp custom hook.
    //Wrapped inside the useCallback custom hook, this function ensures that it won't re-render when the current component is evaluated, preventing the issue with infinite loops.
    const extraConfigDetails = useCallback(() => {
        return { credentials: 'include', withCredentials: true };
    }, []);

    //Function trigerred when data the request data is available. Used to set the default values of the InputFields.
    //Wrapped inside the useCallback custom hook, this function ensures that it won't re-render when the current component is evaluated, preventing the issue with infinite loops.
    //param {object} data expect a response object resulting from a http request
    const tranformUserData = useCallback(
        (data) => {
            setFirstName(data.document.firstName);
            setLastName(data.document.lastName);
            setPhoneNumber(data.document.phoneNumber);
            setEmail(data.document.email);
            setPassword(data.document.password);

            return data.document;
        },
        [setFirstName, setLastName, setPhoneNumber, setEmail, setPassword]
    );

    //Fetch product to edit
    const { data: oldUserData, sendRequest: fetchProductData } = useHttp(ceateRequestConfig, tranformUserData, extraConfigDetails());

    //Reset the fields when the dorm is closed
    const onCloseAndReset = () => {
        resetFirstName();
        resetLastName();
        resetEmail();
        resetPhone();
        resetPassword();
        onClose();
    };

    //Check if the user changed any fields
    const isFirstNameChanged = oldUserData?.firstName !== firstNameValue;
    const isLastNameChanged = oldUserData?.lastName !== lastNameValue;
    const isEmailChanged = oldUserData?.email !== emailValue;
    const isPhoneChanged = oldUserData?.phoneNumber !== phoneValue;

    const anyFieldChanged = isFirstNameChanged || isLastNameChanged || isEmailChanged || isPhoneChanged;
    //Check if the client side validty is passed.
    const isFormValid = emailIsValid && firstNameIsValid && lastNameIsValid && phoneIsValid;
    //Check if the form can be submitted
    let canSubmit = anyFieldChanged && isFormValid;
    if (mode === 'POST' && !passwordIsValid) {
        canSubmit = false;
    }

    //FETCH DATA WHEN PATCHED INS CHANGED
    useEffect(() => {
        if (mode === 'PATCH') {
            //fetch data only once when the current for is loaded
            fetchProductData();
            //When this function is called, some states within the custom useHttp hook will be set.
            //The component where the useHttp hook is used re-renders when ne states are set, creating an infinite loop.
            //The work around is to wrap function sendRequest coming from useHttp hook into a callback hook, also all its dependecies
        }
    }, [fetchProductData, mode, id]);

    //If the request submitted and no error, reset the dields values and annouce the user everything went right
    useEffect(() => {
        if (error === null) {
            navigate(0);
        }
    }, [error]);

    return (
        <Dialog open={open} sx={{ marginLeft: { xxs: -5, md: 0 }, marginRight: { xxs: -5, md: 0 } }}>
            <DialogTitle variant="h3"> {mode === 'POST' ? 'Add Product' : 'Edit Product'}</DialogTitle>

            <DialogContent sx={{ height: 'auto', padding: { xxs: 1, xs: 3 } }}>
                <Form method={mode}>
                    <Typography variant={'body2'} component="p" textAlign="center" mb={6} color={'error'}>
                        {error ? error : ''}
                    </Typography>
                    <Stack sx={{ width: { xxs: '25rem', xs: '31rem', sm: '45rem', md: '50rem' } }}>
                        {/* FIRST NAME */}

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

                        {/* LAST NAME */}

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

                        {/* PHONE */}

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

                        {/* PASSWORD */}

                        {mode === 'POST' && (
                            <Input
                                id={'password'}
                                label="Password"
                                value={passwordValue}
                                isValid={passwordHasError}
                                error={passwordHasError}
                                onChange={passwordChangeHandler}
                                onBlur={passwordBlurHandler}
                                helperText={`Password must contain a small letter ,a capital letter, a digit and at least 8 characters length`}
                                type={'password'}
                            ></Input>
                        )}

                        {/* ONLY WAY TO PASS FURTHER TO THE ACTION */}
                        <input type="hidden" name="id" value={id} />
                        {/* SUBMIT BUTTOn*/}
                        <DialogActions>
                            <Button variant="contained" disabled={!canSubmit} type="submit">
                                {mode === 'POST' ? 'Add User' : 'Edit User'}
                            </Button>
                            <Button onClick={onCloseAndReset}>Cancel</Button>
                        </DialogActions>
                    </Stack>
                </Form>
            </DialogContent>
        </Dialog>
    );
};

export default UserDialog;

UserDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    mode: PropTypes.string.isRequired,
    id: PropTypes.string,
};
