import React from  'react';
import PropTypes from 'prop-types';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import TraineeList from './TraineeList';
import TraineeDetail from './TraineeDetail';

const Trainee = ({ match: {path }}) => (
    <Switch>
        <Route exact path={`${path}/:id`} component={TraineeDetail} />
        <Route exact path={`${path}`} component={TraineeList} />
    </Switch>
);

Trainee.propTypes = {
    path: PropTypes.string.isRequired,
};

export default Trainee;