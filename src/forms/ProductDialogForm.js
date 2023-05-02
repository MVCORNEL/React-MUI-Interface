import { useState, useEffect, useCallback } from 'react';
import { Button, Dialog, DialogActions, DialogContent, FormControl, DialogTitle, MenuItem, Select, InputLabel, Stack, Avatar, Typography } from '@mui/material';
import { Form } from 'react-router-dom';
import useInput from '../hooks/useInput';
import Input from '../ui/Input';
import { validateProductName, validateSummary, validateDescription } from '../helpers/validators';
import useImageUploader from '../hooks/useImageUploader';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import PropTypes from 'prop-types';
import { useActionData } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { storeActions } from '../store/store-slice';
import useHttp from '../hooks/useHttp';
import { useNavigate } from 'react-router';
import URL from '../consts/URL';
/**
 * Product dialog box functional component, resposible for adding and edditing the current products.
 * When editing an element, the data will be automatically fetched based on the product id.
 * Client side validation for every single field.
 * @param {boolean} open if the box is visibile or not
 * @param {function} onClose close dialog callback
 * @param {boolean} mode  requires a string "PATCH" or "POST"
 * @param {string} id requried to update product id
 * @returns
 */
const ProductDialog = ({ open, onClose, mode, id }) => {
    //Navigate hook used to refresh the page
    const navigate = useNavigate();
    //Dispatcher used to save the loaded image into the storage
    const dispatch = useDispatch();
    //Error data returned from the action request handler
    const error = useActionData();
    const [imageFromRequest, setImageFromRequest] = useState(null);

    //NAME
    const {
        value: nameValue,
        isValid: nameIsValid,
        hasError: nameHasError,
        valueChangeHandler: nameChangeHandler,
        inputBlurHandler: nameBlurHandler,
        reset: resetName,
        setValue: setName,
    } = useInput(validateProductName);

    //SUMMARY
    const {
        value: summaryValue,
        isValid: summaryIsValid,
        hasError: summaryHasError,
        valueChangeHandler: summaryChangeHandler,
        inputBlurHandler: summaryBlurHandler,
        reset: resetSummmary,
        setValue: setSummary,
    } = useInput(validateSummary);

    //DESCRIPTION
    const {
        value: descriptionValue,
        isValid: descriptionIsValid,
        hasError: descriptionHasError,
        valueChangeHandler: descriptionChangeHandler,
        inputBlurHandler: descriptionBlurHandler,
        reset: resetDescription,
        setValue: setDescription,
    } = useInput(validateDescription);

    //CATEGORY
    const [category, setCategory] = useState('');
    const handleChange = (event) => {
        setCategory(event.target.value);
    };
    const resetCategory = () => {
        setCategory('');
    };

    //IMAGE
    const { image: photo, imageAsUrl: photoUrl, imageUploadedHandler: photoChangeHandler, setImage: setPhoto, resetImage: resetPhoto } = useImageUploader();

    //Function used to return a request object for the url configuration, this function is used as a configuration for the useHttp custom hook.
    //Wrapped inside the useCallback custom hook, this function ensures that it won't re-render when the current component is revaluated, preventing the issue with infinite loops.

    const ceateRequestConfig = useCallback(() => {
        return { url: `${URL}/api/v1/products/${id}` };
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
            setName(data.document.name);
            setSummary(data.document.summary);
            setDescription(data.document.description);
            setCategory(data.document.category);
            setImageFromRequest(data.document.imgUrl);

            return data.document;
        },
        [setName, setSummary, setDescription, setCategory, setImageFromRequest]
    );

    //Fetch product to edit
    const { data: oldProductData, isLoading, hasError, sendRequest: fetchProductData } = useHttp(ceateRequestConfig, tranformUserData, extraConfigDetails());

    //Reset the fields when the dorm is closed
    const onCloseAndReset = () => {
        resetName();
        resetSummmary();
        resetDescription();
        resetCategory();
        resetPhoto();
        setImageFromRequest(null);
        onClose();
    };

    //Check if the user changed any fields
    const isNameChanged = oldProductData?.name !== nameValue;
    const isSummaryChanged = oldProductData?.summary !== summaryValue;
    const isDescriptionChanged = oldProductData?.description !== descriptionValue;
    const isCategoryChanged = oldProductData?.category !== category;
    const anyFieldChanged = isNameChanged || isSummaryChanged || isDescriptionChanged || isCategoryChanged || photo;
    //Check if the client side validty is passed.
    const isFormValid = nameIsValid && summaryIsValid && descriptionIsValid && category;
    //Check if the form can be submitted
    const canSubmit = anyFieldChanged && isFormValid;

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

    //Update react redux every single an image is uploaded, the only way to provide the image to the action handler
    useEffect(() => {
        dispatch(storeActions.setImage(photo));
    }, [photo, dispatch]);

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
                        {/* NAME */}
                        <Input
                            id={'name'}
                            label="Name"
                            value={nameValue}
                            isValid={nameHasError}
                            error={nameHasError}
                            onChange={nameChangeHandler}
                            onBlur={nameBlurHandler}
                            helperText={'Product name must contain three to twenty-five characters.'}
                        ></Input>
                        {/* SUMMARY */}
                        <Input
                            id={'summary'}
                            label="Summary"
                            value={summaryValue}
                            isValid={summaryHasError}
                            error={summaryHasError}
                            onChange={summaryChangeHandler}
                            onBlur={summaryBlurHandler}
                            helperText={'Product summary must contain 100 to 200 characters..'}
                            multiline={true}
                        ></Input>
                        {/* DESCRIPTION */}
                        <Input
                            id={'description'}
                            label="Description"
                            value={descriptionValue}
                            isValid={descriptionHasError}
                            error={descriptionHasError}
                            onChange={descriptionChangeHandler}
                            onBlur={descriptionBlurHandler}
                            helperText={'Product description must contain 200 to 1500 characters.'}
                            multiline={true}
                        ></Input>
                        {/* CATEGORY */}
                        <FormControl fullWidth>
                            <InputLabel id="category">Category</InputLabel>
                            <Select component={'input'} name="category" labelId="category" id="category" value={category} label="category" onChange={handleChange}>
                                <MenuItem value={'net'}>Net</MenuItem>
                                <MenuItem value={'window'}>Window</MenuItem>
                                <MenuItem value={'door'}>Door</MenuItem>
                                <MenuItem value={'sill'}>Sill</MenuItem>
                            </Select>
                        </FormControl>
                        {/* PHOTO 1*/}
                        <Stack direction="row" alignItems="center" spacing={2} mt={2} mb={1}>
                            <Avatar alt="current user" src={photoUrl || imageFromRequest} sx={{ width: 35, height: 35, borderRadius: 0 }} />
                            <Button variant="outlined" component="label" size="small" endIcon={<FileUploadIcon />}>
                                Add a new photo
                                <input name="image" accept="image/*" type="file" onChange={photoChangeHandler} hidden></input>
                            </Button>
                        </Stack>
                        {/* ONLY WAY TO PASS FURTHER TO THE ACTION */}
                        <input type="hidden" name="id" value={id} />
                        {/* SUBMIT BUTTOn*/}
                        <DialogActions>
                            <Button variant="contained" disabled={!canSubmit} type="submit">
                                {mode === 'POST' ? 'Add Product' : 'Edit Product'}
                            </Button>
                            <Button onClick={onCloseAndReset}>Cancel</Button>
                        </DialogActions>
                    </Stack>
                </Form>
            </DialogContent>
        </Dialog>
    );
};

export default ProductDialog;

ProductDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    mode: PropTypes.string.isRequired,
    id: PropTypes.string,
};
