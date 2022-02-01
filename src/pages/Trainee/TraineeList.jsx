import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { traineeFormSchema } from '../../validations/validation';
import { AddDialog } from './components';
import trainees from './data/trainee';
import { GenericTable } from '../../components';
import { useHistory } from 'react-router';
import moment from 'moment';

const getDateFormatted = (date) => moment(date).format('dddd, MMMM Do YYYY, h:mm:ss a');
const column = [
  {
    field: 'name',
    label: 'Name',
    align: 'left',
  }, {
    field: 'email',
    label: 'Email Address',
    align: 'middle',
    format: (value) => value && value.toUpperCase(),
  },
  {
    field: 'createdAt',
    label: 'Date',
    align: 'right',
    format: getDateFormatted,
  },
];
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
    const [order, setOrder] = useState('asc');
    const [orderBy, setOrderBy] = useState();
    const history = useHistory();
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

    const handelSelect = (id) => {
        history.push(`/trainee/${id}`);
    };
    const handelSort = (field) => {
        if (orderBy === field) {
            setOrder(order === 'desc' ? 'asc' : 'desc');
        } else {
            setOrder('asc');
            setOrderBy(field);
        }
    };

    useEffect(() => {
        const {
            name, email, password, confirmPassword,
        } = '';
        console.log({
            name, email, password, confirmPassword,
        });
    });

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

            <GenericTable 
                id="id" 
                columns={column} 
                data={trainees} 
                order={order}
                orderBy={orderBy}
                onSort={handelSort}
                onSelect={handelSelect}
            />
        </>
    );
};

export default TraineeList;