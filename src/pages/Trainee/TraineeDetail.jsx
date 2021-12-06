import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import trainees from './data/trainee';
import { Link } from 'react-router-dom';
import { Button, Typography, Box, Paper } from '@mui/material';
import { MarginRounded } from '@mui/icons-material';
import { color } from '@mui/system';

const getData = (date) => moment(date).format('dddd,MMMM Do YYYY, h:mm:ss a');
const TraineeDetail = (props) => {
    const { match: { params: { id } } } = props;

    let obj = {};
    trainees.forEach((item) => {
        if (item.id === id) {
            obj = { ...item };
        }
    });

    return (
        // <Box display="flex" flexDirection="column" >
        <Box display="flex" flexDirection="column" alignItems="center" sx={{mt: '20px', ml:'20px', mr:'20px'}}>
            <Paper elevation={3} sx={{ display: 'flex', width: '100%', height: '170px' }}>
            <Box backgroundColor="rgb(92, 92, 92)">
                <Typography fontSize="12px" color="white" mx={7} my={9} fontFamily="inherit">
                    Thumbnail
                </Typography>
            </Box>
            <Box p={1.5}>
                <Typography variant="h6">{obj.name}</Typography>
                <Typography variant="Title1" fontSize="1.4rem" color="GrayText">{getData(obj.createdAt)}</Typography>
                <Typography variant="h6" fontSize="1.3rem">{obj.email}</Typography>
            </Box>
            </Paper>            
            <Link to="/trainee" style={{ textDecoration: 'none', color: 'inherit' }}>
                <Button variant="contained" color="inherit" sx={{width: 100, mt: 4}}>Back</Button>
            </Link>
        </Box>
        // </Box>
    );
};

TraineeDetail.propTypes = {
    match: PropTypes.shape({
        exact: PropTypes.bool,
        path: PropTypes.string,
        url: PropTypes.string,
        params: PropTypes.objectOf(PropTypes.string),
    }).isRequired,
};

export default TraineeDetail;