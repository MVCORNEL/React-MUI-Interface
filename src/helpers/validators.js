import isEmail from 'validator/lib/isEmail';
import isMobilePhone from 'validator/lib/isMobilePhone';

/**
 * Returns true if the string has an email format
 * @param {String} email
 * @returns {boolean}
 */
export const validateEmail = (email) => {
    return isEmail(email);
};

/**
 * Returns true if the phone has a valid phone format
 * @param {String} phone
 * @returns {boolean}
 */
export const validatePhone = (phone) => {
    return isMobilePhone(phone);
};

/**
 * Returns true if the comment has more than 50 characters
 * @param {String} comment
 * @returns {boolean}
 */
export const validateComment = (comment) => {
    return comment.length > 50;
};
