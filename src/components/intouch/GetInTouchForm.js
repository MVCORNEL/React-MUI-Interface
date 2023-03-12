import { Divider, Typography, Button, Box } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import Input from '../../ui/Input';
import useInput from '../../hooks/useInput';
import { validateEmail, validatePhone, validateComment } from '../../helpers/validators';
import { useTheme } from '@mui/material/styles';

/**
 * Form component with mandatory fields for an email address, a phone number, and a comment.
 * The form makes use of the custom react hook "useInput" which is assigned to manage form,
 * and field state and receives a callback function with a custom validator.
 * Until the form is valid, the button is disabled.
 *
 */
const GetInTouchForm = () => {
    const theme = useTheme();
    //EMAIL
    const {
        value: emailValue,
        isValid: emailIsValid,
        hasError: emailHasError,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        reset: resetEmail,
    } = useInput(validateEmail);
    //PHONE
    const {
        value: phoneValue,
        isValid: phoneIsValid,
        hasError: phoneHasError,
        valueChangeHandler: phoneChangeHandler,
        inputBlurHandler: phoneBlurHandler,
        reset: resetPhone,
    } = useInput(validatePhone);
    //COMMENT
    const {
        value: commentValue,
        isValid: commentIsValid,
        hasError: commentHasError,
        valueChangeHandler: commentChangeHandler,
        inputBlurHandler: commentBlurHandler,
        reset: resetComment,
    } = useInput(validateComment);

    //FORM VALIDATION
    const isFormValid = emailIsValid && phoneIsValid && commentIsValid;

    //SUBMIT HANDLER
    const formSubmitHandler = (e) => {
        e.preventDefault();
        if (!isFormValid) {
            return;
        }
        resetEmail();
        resetPhone();
        resetComment();
    };

    return (
        <Box border={{ xs: '1px solid #aaa', md: 'none' }} pt={2} sx={{ borderRadius: 2 }}>
            <form onSubmit={formSubmitHandler}>
                {/* TITLE */}
                <Typography variant={'h3'} component={'h3'} ml={2} textAlign={{ xs: 'center', md: 'start' }}>
                    Lasa-ne un mesaj
                </Typography>
                <Divider
                    color={theme.palette.primary.main}
                    sx={{
                        textAlign: 'center',
                        marginTop: '1rem',
                        marginBottom: '2rem',
                        height: '0.2rem',
                        maxWidth: { xs: '15%', md: '25%' },
                        ml: { xs: 'auto', md: '1.5rem' },
                        mr: { xs: 'auto', md: '0' },
                    }}
                    ml={2}
                />

                <Grid container columnSpacing={2} rowSpacing={1}>
                    {/* EMAIL */}
                    <Grid xs={12} sm={6}>
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
                    <Grid xs={12} sm={6}>
                        <Input
                            id={'phone'}
                            label="Phone Number"
                            value={phoneValue}
                            isValid={phoneHasError}
                            error={phoneHasError}
                            onChange={phoneChangeHandler}
                            onBlur={phoneBlurHandler}
                            helperText={`Invalid phone format`}
                        ></Input>
                    </Grid>
                    {/* COMMENT */}
                    <Grid xs={12} width="100%">
                        <Input
                            id={'phone'}
                            label="Ask us"
                            value={commentValue}
                            isValid={commentHasError}
                            error={commentHasError}
                            onChange={commentChangeHandler}
                            onBlur={commentBlurHandler}
                            helperText={`Please insert at least 50 characters`}
                            multiline={true}
                        ></Input>
                    </Grid>
                    {/* SUBMIT */}
                    <Grid xs={12}>
                        <Button size="large" variant="contained" color="primary" type="submit" disabled={!isFormValid}>
                            Trimite
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Box>
    );
};

export default GetInTouchForm;
