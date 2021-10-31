import * as yup from 'yup';

export const traineeFormSchema = yup.object().shape({
    name: yup
        .string()
        .min(2)
        .max(15)
        .label('Name')
        .required(),

    email: yup
        .string()
        .email()
        .label('Email Address')
        .required(),

        password: yup.string()
        .matches(/^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/, 'Must contains 8 characters, at least one uppercase letter,one lowercase letter and one number')
        .required('Password is a required field'),

    confirmPassword: yup
        .string()
        .label('Confirm Password')
        .oneOf([yup.ref('password'), null], 'Must match with Password')
        .required('Confirm password required'),
});


