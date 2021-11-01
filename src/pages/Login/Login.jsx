import React from 'react';
import { useState } from 'react';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import InputAdornment from '@mui/material/InputAdornment';
import EmailIcon from '@mui/icons-material/Email';
import { Grid } from '@mui/material';
import { Paper } from '@mui/material';
import { Avatar } from '@mui/material';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import { loginFormSchema } from '../../validations/validation';
import { hasErrors } from './helper';
import { isTouched } from './helper';
import { styles } from './style';

const Login = () => {
    const initialState = {
        email: '',
        password: '',
        touched: {
            email: false,
            password: false,
        },
        errors: {},
    };
    const [loginForm, SetLoginForm] = useState(initialState);

    const validateLoginForm = async (value, type) => {
        try {
            await loginFormSchema.validate({
                ...loginForm, [type]: value,
            },{
                    abortEarly: false,
            });
            SetLoginForm({
                ...loginForm, 
                [type]: value,
                touched: {...loginForm.touched, [type]: true },
                errors: {},
            });
        } catch (err) {
            const formErrors = {};
            if (err) {
                err.inner.forEach((errorItem) => {
                    formErrors[errorItem.path]= errorItem.message;
                });
            }
            SetLoginForm({
                ...loginForm,
                [type]: value,
                touched: {...loginForm.touched, [type]: true },
                errors: formErrors,
            });
        }
    
    };
    const handleChange = (event) => {
        const { value, name: type } = event.target;
        validateLoginForm(value, type);
      };
    
      const handleBlur = (event) => {
        const { value, name: type } = event.target;
        validateLoginForm(value, type);
      };
    
      console.log('loginForm', loginForm);
    
      return (
        <Grid>
          <Paper elevation={3} style={styles.gridStyle}>

            <Grid align="center">
              <Avatar sx={{ backgroundColor: '#f24341' }}>
                <LockOutlinedIcon fontSize="small" />
              </Avatar>
              <h3 style={styles.Heading}>Login</h3>
            </Grid>
            <TextField
              margin="dense"
              type="email"
              name="email"
              value={loginForm.email}
              id="outlined-required"
              label="Email Address"
              fullWidth
              InputProps={{
                style: { fontSize: 20 },
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon sx={{ color: '#212121', fontSize: '20px' }} />
                  </InputAdornment>
                ),
              }}
              InputLabelProps={{ style: { fontSize: 20 } }}
              sx={{ mt: '1rem' }}
              onChange={handleChange}
              onBlur={handleBlur}
              error={(loginForm.errors.email && loginForm.touched.email)}
              helperText={loginForm.touched.email && loginForm.errors.email}
            />
            <TextField
              margin="dense"
              type="password"
              name="password"
              value={loginForm.password}
              id="outlined-required"
              label="Password"
              fullWidth
              InputProps={{
                style: { fontSize: 20 },
                startAdornment: (
                  <InputAdornment position="start">
                    <VisibilityOffIcon sx={{ color: '#212121', fontSize: '22px' }} />
                  </InputAdornment>
                ),
              }}
              InputLabelProps={{ style: { fontSize: 20 } }}
              sx={{ mt: '1rem' }}
              onChange={handleChange}
              onBlur={handleBlur}
              error={(loginForm.errors.password && loginForm.touched.password)}
              helperText={loginForm.touched.password && loginForm.errors.password}
            />
            <Button variant="contained" disabled={!(!hasErrors(loginForm) && isTouched(loginForm))} fullWidth sx={{ mt: '2.4rem' }}>
              Sign In
            </Button>
          </Paper>
        </Grid>
      );
    };
    
    export default Login;
