import { Form } from 'react-router-dom';
import { Typography, Stack, Button } from '@mui/material';
import Input from './../ui/Input';
import useInput from '../hooks/useInput';
import useImageUploader from '../hooks/useImageUploader';
import { validateName, validatePhone } from '../helpers/validators';
import me from '../images/team-0.jpg';
import Avatar from '@mui/material/Avatar';
import FileUploadIcon from '@mui/icons-material/FileUpload';

/**
 * Settings Form control
 * The form makes use of the custom react hook "useInput" which is assigned to manage form input state, and useImageUploader hook to manage the image upload state.
 * Every field state that gets a callback function also gets a unique validator.
 * The submitted button is disabled until the form is valid.
 */
const SettigsForm = () => {
    const oldImage = me;
    //FNAME
    const {
        value: firstNameValue,
        isValid: firstNameIsValid,
        hasError: firstNameHasError,
        valueChangeHandler: firstNameChangeHandler,
        inputBlurHandler: firstNameBlurHandler,
        reset: resetFirstName,
    } = useInput(validateName);
    //LNAME
    const {
        value: lastNameValue,
        isValid: lastNameIsValid,
        hasError: lastNameHasError,
        valueChangeHandler: lastNameChangeHandler,
        inputBlurHandler: lastNameBlurHandler,
        reset: resetLastName,
    } = useInput(validateName);
    //PHONE
    const {
        value: phoneValue,
        isValid: phoneIsValid,
        hasError: phoneHasError,
        valueChangeHandler: phoneChangeHandler,
        inputBlurHandler: phoneBlurHandler,
        reset: resetPhone,
    } = useInput(validatePhone);

    const { image: photo, imageAsUrl: photoUrl, imageUploadedHandler: photoChangeHandler } = useImageUploader();

    //VALIDATOR FUNCTION
    const isFormValid = firstNameIsValid && lastNameIsValid && phoneIsValid;

    return (
        <Form>
            {/* TITLE */}
            <Typography variant={'h4'} component="h1" mb={6}>
                ACCOUNT SETTINGS
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
                disabled={!isFormValid}
                size="large"
                variant="contained"
                color="primary"
                type="submit"
                sx={{ display: 'block', marginLeft: 'auto', marginRight: { xxs: 'auto', md: 0 }, marginTop: 4, marginBottom: 6 }}
            >
                {/* {isSubmitting ? 'Submitting' : 'Sign Up'} */}
                Save New Settings
            </Button>
            {/* DELETE */}
            <Stack direction={{ xxs: 'column', md: 'row' }} justifyContent={'center'} alignItems={'center'}>
                {/* DELETE ACCOUNT */}
                <Typography variant="body1" color="#555">
                    Would you like to delete your account ?
                </Typography>
                <Button size="small" color="error">
                    Delete Me
                </Button>
            </Stack>
        </Form>
    );
};

export default SettigsForm;
