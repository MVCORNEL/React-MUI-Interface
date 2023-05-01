import { useState, useEffect } from 'react';
import { Button, Dialog, DialogActions, DialogContent, Rating, DialogTitle, Stack, Typography } from '@mui/material';
import { Form } from 'react-router-dom';
import useInput from '../hooks/useInput';
import Input from '../ui/Input';
import { validateComment } from '../helpers/validators';
import PropTypes from 'prop-types';
import { useActionData, useNavigate, useParams } from 'react-router-dom';
/**
 * Product dialog box functional component, resposible for adding and edditing the current products.
 * When editing an element, the data will be automatically fetched based on the product id.
 * Client side validation for every single field.
 * @param {boolean} open if the box is visibile or not
 * @param {function} onClose close dialog callback
 * @param {string} id requried to update product id
 * @returns
 */
const ReviewDialog = ({ open, onClose, id, mode = 'POST' }) => {
    //Navigate hook used to refresh the page
    const navigate = useNavigate();
    const { productSlug } = useParams();
    //Error data returned from the action request handler
    const error = useActionData();
    //Controller reviews
    const [rating, setRating] = useState(4);

    //COMMENT
    const {
        value: commentValue,
        isValid: commentIsValid,
        hasError: commentHasError,
        valueChangeHandler: commentChangeHandler,
        inputBlurHandler: commentBlurHandler,
        reset: resetComment,
        setValue: setComment,
    } = useInput(validateComment);

    //Reset the fields when the dorm is closed
    const onCloseAndReset = () => {
        resetComment();
        onClose();
    };

    const isFormValid = commentIsValid;
    //Check if the form can be submitted
    const canSubmit = isFormValid;

    //If the request submitted and no error, reset the dields values and annouce the user everything went right
    useEffect(() => {
        if (error === null) {
            navigate(0);
        }
    }, [error]);

    return (
        <Dialog open={open} sx={{ marginLeft: { xxs: -5, md: 0 }, marginRight: { xxs: -5, md: 0 } }}>
            <DialogTitle variant="h3"> {'Rate us'}</DialogTitle>

            <DialogContent sx={{ height: 'auto', padding: { xxs: 1, xs: 3 } }}>
                <Form method={mode}>
                    <Typography variant={'body2'} component="p" textAlign="center" color={'error'}>
                        {error ? error : ''}
                    </Typography>
                    <Stack sx={{ width: { xxs: '25rem', xs: '31rem', sm: '45rem', md: '50rem' } }}>
                        {/* RATING */}
                        <Typography variant={'subtitle1'} component="p" mb={2}>
                            Are you happy with our services ?
                        </Typography>
                        <Rating
                            sx={{ marginBottom: 2 }}
                            name="simple-controlled"
                            value={rating}
                            onChange={(event, newValue) => {
                                if (!newValue) {
                                    setRating(1);
                                }
                                setRating(newValue);
                            }}
                        />
                        {/* COMMENT */}
                        <Input
                            id={'comment'}
                            label="Comment"
                            value={commentValue}
                            isValid={commentHasError}
                            error={commentHasError}
                            onChange={commentChangeHandler}
                            onBlur={commentBlurHandler}
                            helperText={'Product summary must contain 100 to 200 characters..'}
                            multiline={true}
                        ></Input>
                        {/* SMALL HACKED USED TO STORE EXTRA INFO */}
                        <input type="hidden" name="id" value={id} />
                        <input type="hidden" name="rating" value={rating} />
                        <input type="hidden" name="productSlug" value={productSlug} />

                        <DialogActions>
                            <Button variant="contained" disabled={!canSubmit} type="submit">
                                {mode === 'PATCH' ? 'Edit Review' : 'Add Review'}
                            </Button>
                            <Button onClick={onCloseAndReset}>Cancel</Button>
                        </DialogActions>
                    </Stack>
                </Form>
            </DialogContent>
        </Dialog>
    );
};

export default ReviewDialog;

ReviewDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    id: PropTypes.string,
    mode: PropTypes.string,
};
