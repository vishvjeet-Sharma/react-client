import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import trainees from './data/trainee';
import { Link } from 'react-router-dom';
import { Button, Typography, Box } from '@mui/material';

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
        <Box display="flex" flexDirection="column">
            <Box backgroundColor="rgb(92, 92, 92)">
                <Typography fontSize="15px" color="white">
                    Thumbnail
                </Typography>
            </Box>
            <Box>
                <Typography variant="h5">{obj.name}</Typography>
                <Typography variant="Title1">{getData(obj.createdAt)}</Typography>
                <Typography variant="Title2">{obj.email}</Typography>
            </Box>
            <Link to="/trainee">
                <Button variant="contained" color="inherit">Back</Button>
            </Link>
        </Box>
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