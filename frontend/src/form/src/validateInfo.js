export default function validateInfo(values) {
    let errors = {};

    if (!values.username.trim()) {
        errors.username = 'Username required';

    }

    if(!values.email) {
        errors.email = 'Email required'
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "email address is invalid"

    }

if (!values.password) {
    errors.password = 'password is required';
} else if (values.password.length < 6) {
    errors.password = 'password needs to be 6 character or more';
    }
    if (!values.password2) {
        errors.password2 = 'Passwords is required';
    } else if (values.password2 !== values.password) {
        errors.password2='passwords do not match';
    }
    return errors;
}