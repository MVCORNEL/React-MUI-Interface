import { useState } from 'react';

/**
 * The logic of each input element is gathered via a custom React hook, which is mostly made for reuse.
 * The present hook's primary purpose is to use the validator function to check client-side user input,
 * @param {function} validatorFunction
 */

const useInput = (validatorFunction) => {
    const [value, setValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    const isValueValid = validatorFunction(value);
    const hasError = !isValueValid && isTouched;

    const valueChangeHandler = (event) => {
        setValue(event.target.value);
    };

    const inputBlurHandler = () => {
        setIsTouched(true);
    };

    const reset = () => {
        setValue('');
        setIsTouched(false);
    };

    return {
        value,
        hasError,
        isValid: isValueValid,
        valueChangeHandler,
        inputBlurHandler,
        reset,
    };
};

export default useInput;
