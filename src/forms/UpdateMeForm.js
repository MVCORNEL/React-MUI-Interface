import { Form } from 'react-router-dom';
import { Typography, Stack, Button } from '@mui/material';
import Input from '../ui/Input';
import useInput from '../hooks/useInput';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import useImageUploader from '../hooks/useImageUploader';
import { validateName, validatePhone } from '../helpers/validators';
import Avatar from '@mui/material/Avatar';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import { useActionData, useLoaderData } from 'react-router-dom';
import { storeActions } from '../store/store-slice';

/**
 * Settings Form function component.
 * When the form is first render a request is made to the server, fetching the initials values of the fields, throug a custom useHttp hook.
 * The form makes use of the custom react hook "useInput" which is assigned to manage form input state, and useImageUploader hook to manage the image upload state.
 * Every field state that gets a callback function also gets a unique validator.
 * The submitted button is disabled until the form is valid.
 */
const SettigsForm = () => {
    const dispatch = useDispatch();
    //Error data returned from the action request handler
    const errorEdit = useActionData();
    //Hard coded image TODO
    const oldUser = useLoaderData();
    //Error data returned from the action request handler
    const [imageFromRequest, setImageFromRequest] = useState(null);

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
    const { image, imageAsUrl: photoUrl, imageUploadedHandler: photoChangeHandler } = useImageUploader();

    //Update react redux every single an image is uploaded, the only way to provide the image to the action handler
    useEffect(() => {
        dispatch(storeActions.setImage(image));
    }, [image, dispatch]);

    useEffect(() => {
        setFirstName(oldUser.firstName);
        setLastName(oldUser.lastName);
        setPhoneNumber(oldUser.phoneNumber);
        setImageFromRequest(oldUser.image);
    }, [setFirstName, setLastName, setPhoneNumber, setImageFromRequest]);

    //Check if the user changed any fields
    const isFNameChanged = oldUser?.firstName !== firstNameValue;
    const isLNameChanged = oldUser?.lastName !== lastNameValue;
    const isPhoneNumberChanged = oldUser?.phoneNumber !== phoneValue;
    const anyFieldChanged = isFNameChanged || isLNameChanged || isPhoneNumberChanged || image;
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
            <Typography variant={'body2'} component="p" textAlign="center" mb={6} color={'red'}>
                {errorEdit ? errorEdit : ''}
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
                <Avatar alt="current user" src={photoUrl || imageFromRequest} sx={{ width: 60, height: 60 }} />
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
                Save New Settings
            </Button>
        </Form>
    );
};

export default SettigsForm;
