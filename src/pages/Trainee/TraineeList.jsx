import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { traineeFormSchema } from '../../validations/validation';
import { AddDialog } from './components';
import trainees from './data/trainee';

const TraineeList = ({match: {path}}) => {
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
    console.log(initialState);

    const validateData = async (value, type) => {
        console.log('try to do something new');
        try {
            await traineeFormSchema.validate({
                ...form, [type]: value,
            }, {
                abortEarly: false,
            });
            setForm({

                ...form,
                [type]: value,
                touched: { ...form.touched, [type]: true },
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
                [type]: value,
                touched: { ...form.touched, [type]: true },
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
    console.log('path', path);

    return (
        <>
            <AddDialog
                onButtonSubmit={handleSubmit}
                value={form}
                open={open}
                onClick={handleClickOpen}
                onClose={handleClose}
                onChange={handleChange}
                onBlur={handleBlur}
            />
            <ul>
                {trainees.map((item) => (
                    <li key={item.id}>
                        <Link to={`${path}/${item.id}`}>
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default TraineeList;