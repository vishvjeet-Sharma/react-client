import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { PrivateLayout } from '../layouts/index';

const PrivateRoute = ({ exact, path, component: Component 
}) => (
    <Route exact={exact} path={path} render={({ match }) => <PrivateLayout><Component match={match} /></PrivateLayout>} />
);

PrivateRoute.defaultProps = {
    exact: false,
};

PrivateRoute.propTypes = {
    exact: PropTypes.bool,
    path: PropTypes.string.isRequired,
    component: PropTypes.func.isRequired,
};

export default PrivateRoute;