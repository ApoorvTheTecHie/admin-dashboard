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

    if(Validator.empty(data.subject)){
        errors.subject = 'Subject Field is Required';
    }

    if(Validator.empty(data.message)){
        errors.message = 'Message Field is Required';
    }

    return {errors, isValid: isEmpty(errors)}
}
