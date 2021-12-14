import React, { useContext } from 'react';
import { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
import { traineeFormSchema } from '../../validations/validation';
import { AddDialog, EditDialog, RemoveDialog } from './components';
import trainees from './data/trainee';
import { GenericTable } from '../../components';
import { useHistory } from 'react-router';
import moment from 'moment';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { SnackbarContext } from '../../contexts/SnackbarProvider/SnackbarProvider';


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
const TraineeList = ({ match: { path } }) => {

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
    const actionInitialState = { id: '', name: '', email: '', createdAt: '' };
    const [open, setOpen] = useState(false);
    const [openEditDialog, setOpenEditDialogue] = useState(false);
    const [openRemoveDialog, setOpenRemoveDialog] = useState(false);
    const [form, setForm] = useState(initialState);
    const [order, setOrder] = useState('asc');
    const [orderBy, setOrderBy] = useState();
    const [page, setPage] = useState(0);
    const [actions, setActions] = useState(actionInitialState);
    const history = useHistory();


    const handleOpen = useContext(SnackbarContext);

    const validateData = async (value, type) => {
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
        handleOpen('This is a success message!','success');
        handleClose();
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
    
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    const handleEditDialogOpen = (data) => {
        setActions({
            ...actions, name: data.name, email:data.email,
        })
        setOpenEditDialogue(true);
    };
    const handleEditChange = (event) => {
        const { value, name:type } = event.target;
        setActions({...actions, [type]: value});
    };
    const handleEditSubmit = () => {
        setOpenEditDialogue(false);
        handleOpen('This is a success message!','success');
    };
    const handleEditClose = () => {
        setActions(actionInitialState);
        setOpenEditDialogue(false);
    };

    const handleRemoveDialogOpen =(data) => {
        setActions({
            ...actions, id: data.id, name:data.name, email: data.email, createdAt: data.createdAt,
        });
        setOpenRemoveDialog(true);
        console.log('Data', data);
    };
    const handleDelete = () => {
        console.log('Delete Item', actions);
        let message;
        let status;
        const date1 = new Date('2019-02-14');
        const date2 = new Date(actions.createdAt);
        if (date2 > date1 ) {
            message = 'This is a success message!';
            status = 'success';
        } else {
            message = 'This is an error message!';
            status = 'error';
        }
        handleOpen(message, status);
        setOpenRemoveDialog(false);
    };
    const handleRemoveDialogClose = () => {
        setOpenRemoveDialog(false);
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
                count={100}
                page={page}
                rowsPerPage={10}
                onChangePage={handleChangePage}
                actions={[
                    {
                        icon: <EditIcon sx={{ color: 'black', fontSize: 'inherit' }} />,
                        handler: handleEditDialogOpen,
                    },
                    {
                        icon: <DeleteIcon sx={{ color: 'black', fontSize: 'inherit' }} />,
                        handler: handleRemoveDialogOpen,
                    },
                ]}
            />
            <EditDialog
                open={openEditDialog}
                value={{ name: actions.name, email: actions.email }}
                onChange={handleEditChange}
                onClose={handleEditClose}
                onSubmit={handleEditSubmit}
            />
            <RemoveDialog
                open={openRemoveDialog}
                onDelete={handleDelete}
                onClose={handleRemoveDialogClose}
            />


            {/* <ul>
                {trainees.map((item) => (
                    <li key={item.id}>
                        <Link to={`${path}/${item.id}`}>
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul> */}
        </>
    );
};

export default TraineeList;
