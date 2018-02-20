import Validator from 'is_js';
import {isEmpty} from 'lodash';

export default function validateInput(data) {
    let errors = {};

    if (Validator.empty(data.email)) {
        errors.email = 'Email is required';
    }

    if (!Validator.empty(data.email) && !Validator.email(data.email)) {
        errors.email = 'Invalid email';
    }

    if (Validator.empty(data.adminName)) {
        errors.adminName = 'Admin Name is Required';
    };


    if (Validator.empty(data.phoneNumber)) {
        errors.phoneNumber = 'Phone Number is Required';
    }

    if (isNaN(data.phoneNumber)) {
        errors.phoneNumber = 'Phone Number should be Numeric';
    }

    return {errors, isValid: isEmpty(errors)}
}
