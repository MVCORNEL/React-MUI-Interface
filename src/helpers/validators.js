import isEmail from 'validator/lib/isEmail';
import isMobilePhone from 'validator/lib/isMobilePhone';

/**
 * function verifies a given email string and returns true if the string has an email format
 * @param {String} email
 * @returns {boolean}
 */
export const validateEmail = (email) => {
    return isEmail(email);
};

/**
 * function verifies a given number and returns  true if the phone has a valid phone format
 * @param {String} phone
 * @returns {boolean}
 */
export const validatePhone = (phone) => {
    return isMobilePhone(phone);
};

/**
 * function verifies a given string and returns true if the comment has more than 50 characters
 * @param {String} comment
 * @returns {boolean}
 */
export const validateComment = (comment) => {
    return comment.length > 50;
};

/**
 * function verifies if a given string name has the length higher tha 1 and returns true if it has
 * @param {String} name
 * @returns {boolean}
 */
export const validateName = (name) => {
    return name.length > 1;
};

/**
 * function verifies a regular expression representing a password pattern against a given string andd returns true if the pattern matches and false otherwise.
 * The password must be 8 character length,include at least one upper-case,at least one lower-case, and at least one digit.
 * @param {string} password takes valid String value
 * @returns {boolean}
 */
export const validatePassword = (password) => {
    //http://www.angulartutorial.net/2017/11/javascript-regex-list.html -> documentation used
    //https://regex101.com//  -> valdiation platform used
    //(?=.*[a-z]) positive look ahead used to check if there is at least one letter between a-z
    //(?=.*[A-Z])  positive look ahead used to check if there is at least one letter between A-Z
    //(?=.*[0-9]) positive look ahead used to check if there is at least one digit between 0-9
    //. usd to specify that the password can be of any type of characters , and {8} password range.
    const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8}$/;
    return PASSWORD_REGEX.test(password);
};

/**
 * function verifies if two given password strings have the same value. Return true if they have and false oterwise.
 *@param  {string} password valid String value
 *@param  {string} retypedPassword valid String value
 *@returns boolean
 */
export const validateRetypedPassword = (password, retypedPassword) => {
    if (password === retypedPassword) {
        return true;
    }
    return false;
};
