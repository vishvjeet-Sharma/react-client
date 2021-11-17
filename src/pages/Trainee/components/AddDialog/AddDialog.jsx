import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import PropTypes from 'prop-types';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import style from './style';
import InputAdornment from '@mui/material/InputAdornment';
import { hasError, isTouched } from '../../helper';
// import Box from '@mui/material/Box';

const AddDialog = (props) => {
    const {
        onClick, onClose, onSubmit, open, onBlur, value, onChange
    } = props;
    console.log('value prop >>>', value);

    return (
        <div>
            <Button variant="outlined" onClick={onClick} sx={{marginTop: 5, marginLeft: 5}}>
                ADD TRAINEE
            </Button>
            <Dialog open={open} onClose={onClose} fullWidth="true" maxWidth="100px"  >
                <DialogTitle>Add Trainee</DialogTitle>
                <DialogContent>
                    <DialogContentText>Enter your trainee details</DialogContentText>
                    <TextField
                        required
                        margin="dense"
                        id="requiredData"
                        label="Name"
                        type="text"
                        name="name"
                        value={value.name}
                        fullWidth
                        InputProps={{
                            style: { fontSize: 20 },
                            startAdornment: (
                                <InputAdornment positions="start">
                                    <PersonIcon fontSize="20px" sx={{ color: '#1a1a1a' }} />
                                </InputAdornment>
                            ),
                        }}
                        InputLabelProps={{ style: { fontSize: 20 } }}
                        onBlur={onBlur}
                        onChange={onChange}
                        error={(value.errors.name && value.touched.name)}
                        helperText={value.touched.name && value.errors.name}
                    />

                    <TextField
                        margin="dense"
                        id="requiredData"
                        label="Email Address"
                        type="email"
                        name="email"
                        value={value.email}
                        fullWidth
                        InputProps={{
                            style: { fontSize: 20 },
                            startAdornment: (
                                <InputAdornment positions="start">
                                    <EmailIcon fontSize="20px" sx={{ color: '#1a1a1a' }} />
                                </InputAdornment>
                            ),
                        }}
                        InputLabelProps={{ style: { fontSize: 20 } }}
                        onBlur={onBlur}
                        onChange={onChange}
                        error={(value.errors.email && value.touched.email)}
                        helperText={value.touched.email && value.errors.email}
                    />

                    <div style={style.password}>

                        <TextField
                            margin="dense"
                            id="requiredData"
                            label="Password"
                            type="password"
                            name="password"
                            value={value.password}
                            sx={{ m: 1, width: 1 / 2, marginLeft: 0 }}
                            InputProps={{
                                style: { fontSize: 20 },
                                startAdornment: (

                                    <InputAdornment positions="start">
                                        <VisibilityOff fontSize="20px" sx={{ color: '#1a1a1a' }} />
                                    </InputAdornment>
                                ),
                            }}
                            InputLabelProps={{ style: { fontSize: 20 } }}
                            onBlur={onBlur}
                            onChange={onChange}
                            error={(value.errors.password && value.touched.password)}
                            helperText={value.touched.password && value.errors.password}
                        />


                        <TextField
                            margin="dense"
                            id="requiredData"
                            label="Confirm Password"
                            type="Password"
                            name="confirmPassword"
                            value={value.confirmPassword}
                            sx={{ m: 1, width: 1 / 2, marginRight: 0 }}
                            InputProps={{
                                style: { fontSize: 20 },
                                startAdornment: (

                                    <InputAdornment positions="start">
                                        <VisibilityOff fontSize="20px" sx={{ color: '#1a1a1a' }} />
                                    </InputAdornment>
                                ),
                            }}
                            InputLabelProps={{ style: { fontSize: 20 } }}
                            onBlur={onBlur}
                            onChange={onChange}
                            error={(value.errors.confirmPassword && value.touched.confirmPassword)}
                            helperText={(value.touched.confirmPassword && value.errors.confirmPassword)}
                        />
                    </div>

                </DialogContent>
                <DialogActions>
                    <Button onClick={onClose}>Cancel</Button>
                    <Button onClick={onSubmit} variant="contained" disabled={!(!hasError(value) && isTouched(value))}>Submit</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

AddDialog.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    onButtonSubmit: PropTypes.func.isRequired,
    onClick: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    onBlur: PropTypes.func.isRequired,
    // value: PropTypes.string.isRequired,
    value: PropTypes.shape({
        name: PropTypes.string,
        email: PropTypes.string,
        password: PropTypes.string,
        confirmPassword: PropTypes.string,
        touched: PropTypes.objectOf(PropTypes.bool),
        errors: PropTypes.objectOf(PropTypes.string),
    }).isRequired,
};

export default AddDialog;

