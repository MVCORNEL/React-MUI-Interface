import { Divider, Typography, Button, Box } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import Input from '../ui/Input';
import useInput from '../hooks/useInput';
import { validateEmail, validatePhone, validateComment } from '../helpers/validators';
import { useTheme } from '@mui/material/styles';

/**
 * Form component with mandatory fields for an email address and password
 * The form makes use of the custom react hook "useInput" which is assigned to manage form,
 * Every field state that gets a callback function also gets a unique validator.
 * The button is disabled until the form is valid.
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
        <Box border={{ xxs: '1px solid #aaa', md: 'none' }} pt={2} sx={{ borderRadius: 2 }}>
            <form onSubmit={formSubmitHandler}>
                {/* TITLE */}
                <Typography variant={'h3'} component={'h3'} ml={2} textAlign={{ xxs: 'center', md: 'start' }}>
                    Let us a message !
                </Typography>
                <Divider
                    color={theme.palette.primary.main}
                    sx={{
                        textAlign: 'center',
                        marginTop: '1rem',
                        marginBottom: '2rem',
                        height: '0.2rem',
                        maxWidth: { xxs: '15%', md: '25%' },
                        ml: { xxs: 'auto', md: '1.5rem' },
                        mr: { xxs: 'auto', md: '0' },
                    }}
                    ml={2}
                />

                <Grid container columnSpacing={2} rowSpacing={1}>
                    {/* EMAIL */}
                    <Grid xxs={12} sm={6}>
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
                    <Grid xxs={12} sm={6}>
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
                    <Grid xxs={12} width="100%">
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
                    <Grid xxs={12}>
                        <Button
                            size="large"
                            variant="contained"
                            color="primary"
                            type="submit"
                            disabled={!isFormValid}
                            onClick={() => {
                                alert('Thank you very much! We will get in touch with you as soon as possible!');
                            }}
                        >
                            Trimite
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Box>
    );
};

export default GetInTouchForm;
