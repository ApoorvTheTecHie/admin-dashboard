import Validator from 'is_js';
import {isEmpty} from 'lodash';

export default function validateInput(data) {
    let errors = {};

    if (Validator.empty(data.currentPassword)) {
        errors.currentPassword = 'This field is required';
    }
    if (Validator.empty(data.newPassword)) {
        errors.newPassword = 'Password required';
    }
    if (Validator.empty(data.retypePassword)) {
        errors.retypePassword = 'Please Retype password';
    }

    if((data.newPassword) !== (data.retypePassword)){
        errors.retypePassword = 'Password Mismatch';
    }

    return {errors, isValid: isEmpty(errors)}
}
