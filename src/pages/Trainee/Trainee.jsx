import React from 'react';
import { useState } from 'react';
import { traineeFormSchema } from '../../validations/validation';
import { AddDialog } from './components';

const Trainee = () => {
    const initialState = {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        touched: {
            name: false,
            email: false,
            password: false,
            confirmPassword: false,
        },
        errors: {},
    };
    const [open, setOpen] = useState(false);
    const [form, setForm] = useState(initialState);

    const validateData = async (value, type) => {
        try {
            await traineeFormSchema.validate({

                ...Object.keys(form).reduce((acc, curr) => ({
                    ...acc,
                    [curr]: form[curr].input,
                  }), {}),

                // ...form, 
                [type]: value,
            }, {
                abortEarly: false,
            });
            setForm({
                ...form,

                [type]: {
                    input: value,
                    isTouched: true,
                  },
                // [type]: value,
                // touched: { ...form.touched, [type]: true },
                errors: {},
            });
        } catch (err) {
            const formErrors = {};
            if (err) {
                err.inner.forEach((errorItem) => {
                    formErrors[errorItem.path] = errorItem.message;
                });

            }
            setForm({
                ...form,

                [type]: {
                    input: value,
                    isTouched: true,
                  },
                // [type]: value,
                // touched: { ...form.touched, [type]: true },
                errors: formErrors,
            });
        }
    };
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setForm(initialState);
    };

    const handleSubmit = () => {
        console.log({ name: form.name, email: form.email, password: form.password, confirmPassword: form.confirmPassword });
    };
    const handleChange = (event) => {
        const { value, name: type } = event.target;
        validateData(value, type);
    };

    const handleBlur = (event) => {
        const { value, name: type } = event.target;
        validateData(value, type);
    };

    console.log('form', form);

    return (
        <>
            {/* <NavBar /> */}
            <AddDialog
                onButtonSubmit={handleSubmit}
                value={form}
                open={open}
                onClick={handleClickOpen}
                onClose={handleClose}
                onChange={handleChange}
                onBlur={handleBlur}
            />
        </>
    );
};

export default Trainee;