import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';
import React from 'react';
/**
 * This interactive control component was constructed on top of MUI's TextField element characteristics.
 *
 * @prop {string} id the current input's id as a distinctive identifier
 * @prop {string} input where the type of the input field is specified
 * @prop {string} label defines what purpose the input element serves.
 * @prop {string} value the input element's current value
 * @prop {string} helperText further information regarding the input format is necessary (not mandatory)
 * @prop {boolean} error if the input contains any validation error
 * @prop {function} onChange calback function when the value of the input element was changed
 * @prop {function} onBlur calback function used when the element losses focus
 * @prop {boolean} multiline if the current element contains many lines if the value is false; else, only one.
 */
const Input = ({ type, label, value, helperText, error, id, onChange, onBlur, multiline, isPasswordField = false }) => {
    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <div>
            <TextField
                error={error}
                helperText={error ? helperText : ' '}
                type={isPasswordField ? 'password' : 'text'}
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
    input: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    helperText: PropTypes.string.isRequired,
    error: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
    onBlur: PropTypes.func.isRequired,
    multiline: PropTypes.bool,
    isPasswordField: PropTypes.bool,
};
