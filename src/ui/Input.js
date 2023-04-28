import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';
import React from 'react';
/**
 * This interactive control component was constructed on top of MUI's TextField element characteristics.
 *
 * @prop {string} id the current input's id as a distinctive identifier
 * @prop {string} type the current type of the input
 * @prop {string} input where the type of the input field is specified
 * @prop {string} label defines what purpose the input element serves.
 * @prop {string} value the input element's current value
 * @prop {string} helperText further information regarding the input format is necessary (not mandatory)
 * @prop {boolean} error if the input contains any validation error
 * @prop {function} onChange calback function when the value of the input element was changed
 * @prop {function} onBlur calback function used when the element losses focus
 * @prop {boolean} multiline if the current element contains many lines if the value is false; else, only one.
 */
const Input = ({ type = 'text', label, value, helperText, error, id, onChange, onBlur, multiline }) => {
    return (
        <div>
            <TextField
                error={error}
                helperText={helperText}
                type={type}
                id={id}
                label={label}
                name={id}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                variant="outlined"
                color="secondary"
                multiline={multiline ? true : false}
                rows={multiline ? 4 : 1}
                fullWidth={true}
            />
        </div>
    );
};

export default Input;

//DATA TYPE VALIDATION
Input.propTypes = {
    id: PropTypes.string.isRequired,
    type: PropTypes.string,
    input: PropTypes.string,
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    helperText: PropTypes.string,
    error: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
    onBlur: PropTypes.func.isRequired,
    multiline: PropTypes.bool,
};
