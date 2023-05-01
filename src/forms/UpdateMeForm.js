import { Form } from 'react-router-dom';
import { Typography, Stack, Button } from '@mui/material';
import Input from '../ui/Input';
import useInput from '../hooks/useInput';
import useHttp from '../hooks/useHttp';
import { useCallback, useEffect } from 'react';
import useImageUploader from '../hooks/useImageUploader';
import { validateName, validatePhone } from '../helpers/validators';
import me from '../images/team-0.jpg';
import Avatar from '@mui/material/Avatar';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import { useActionData } from 'react-router-dom';

/**
 * Settings Form function component.
 * When the form is first render a request is made to the server, fetching the initials values of the fields, throug a custom useHttp hook.
 * The form makes use of the custom react hook "useInput" which is assigned to manage form input state, and useImageUploader hook to manage the image upload state.
 * Every field state that gets a callback function also gets a unique validator.
 * The submitted button is disabled until the form is valid.
 */
const SettigsForm = () => {
    //Error data returned from the action request handler
    const errorEdit = useActionData();
    //Hard coded image TODO
    const oldImage = me;

    //FNAME
    const {
        value: firstNameValue,
        isValid: firstNameIsValid,
        hasError: firstNameHasError,
        valueChangeHandler: firstNameChangeHandler,
        inputBlurHandler: firstNameBlurHandler,
        setValue: setFirstName,
    } = useInput(validateName);
    //LNAME
    const {
        value: lastNameValue,
        isValid: lastNameIsValid,
        hasError: lastNameHasError,
        valueChangeHandler: lastNameChangeHandler,
        inputBlurHandler: lastNameBlurHandler,
        setValue: setLastName,
    } = useInput(validateName);
    //PHONE
    const {
        value: phoneValue,
        isValid: phoneIsValid,
        hasError: phoneHasError,
        valueChangeHandler: phoneChangeHandler,
        inputBlurHandler: phoneBlurHandler,
        setValue: setPhoneNumber,
    } = useInput(validatePhone);
    //IMAGE HOOK
    const { image: photo, imageAsUrl: photoUrl, imageUploadedHandler: photoChangeHandler } = useImageUploader();

    /**
     *Function used to return a request object for the url configuration, this function is used as a configuration for the useHttp custom hook.
     *Wrapped inside the useCallback custom hook, this function ensures that it won't re-render when the current component is evaluated, preventing the issue with infinite loops.
     */
    const ceateRequestConfig = useCallback(() => {
        return { url: 'http://127.0.0.1:8000/api/v1/users/getMe' };
    }, []);

    /**
     *Function used to return an request object configuration for cookie credentials, this function will be passed as configuration for the useHttp custom hook.
     *Wrapped inside the useCallback custom hook, this function ensures that it won't re-render when the current component is evaluated, preventing the issue with infinite loops.
     */
    const extraConfigDetails = useCallback(() => {
        return { credentials: 'include', withCredentials: true };
    }, []);

    /**
     *Function trigerred when data the request data is available. Used to set the default values of the InputFields.
     *Wrapped inside the useCallback custom hook, this function ensures that it won't re-render when the current component is evaluated, preventing the issue with infinite loops.
     *
     * @param {object} data expect a response object resulting from a http request
     */
    const tranformUserData = useCallback(
        (data) => {
            setPhoneNumber(data.user.phoneNumber);
            setFirstName(data.user.firstName);
            setLastName(data.user.lastName);
            return data.user;
        },
        [setPhoneNumber, setFirstName, setLastName]
    );

    //Fetch old user data.
    const { data: oldUser, isLoading, hasError, sendRequest: fetchUserData } = useHttp(ceateRequestConfig, tranformUserData, extraConfigDetails());

    useEffect(() => {
        //fetch data only once when the current for is loaded
        fetchUserData();
        //When this function is called, some states within the custom useHttp hook will be set.
        //The component where the useHttp hook is used re-renders when ne states are set, creating an infinite loop.
        //The work around is to wrap function sendRequest coming from useHttp hook into a callback hook, also all its dependecies
    }, [fetchUserData]);

    //Check if the user changed any fields
    const isFNameChanged = oldUser.firstName !== firstNameValue;
    const isLNameChanged = oldUser.lastName !== lastNameValue;
    const isPhoneChanged = oldUser.phoneNumber !== phoneValue;
    const anyFieldChanged = isFNameChanged || isLNameChanged || isPhoneChanged;
    //Check if the client side validty is passed.
    const isFormValid = firstNameIsValid && lastNameIsValid && phoneIsValid;
    //Check if the form can be submitted
    const canSubmit = anyFieldChanged && isFormValid;

    return (
        <Form method="patch">
            {/* TITLE */}
            <Typography variant={'h4'} component="h1" mb={6}>
                ACCOUNT SETTINGS
            </Typography>
            {/* DIPSLAY ERRORS */}
            <Typography variant={'body2'} component="p" textAlign="center" mb={6} color={hasError ? 'red' : 'error'}>
                {hasError ? hasError : ''} {errorEdit ? errorEdit : ''}
            </Typography>

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
            {/* FNAME */}
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
            {/* LNAME */}
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
            {/* PHOTO */}
            <Stack direction="row" alignItems="center" spacing={2} mt={1}>
                <Avatar alt="current user" src={photo ? photoUrl : oldImage} sx={{ width: 60, height: 60 }} />
                <Button variant="outlined" component="label" size="small" endIcon={<FileUploadIcon />}>
                    Add a new photo
                    <input hidden accept="image/*" multiple type="file" onChange={photoChangeHandler}></input>
                </Button>
            </Stack>
            {/* SAVE */}
            <Button
                disabled={!canSubmit}
                size="large"
                variant="contained"
                color="primary"
                type="submit"
                sx={{ display: 'block', marginLeft: 'auto', marginRight: { xxs: 'auto', md: 0 }, marginTop: 4, marginBottom: 6 }}
            >
                {/* {isSubmitting ? 'Submitting' : 'Sign Up'} */}
                Save New Settings
            </Button>
        </Form>
    );
};

export default SettigsForm;
