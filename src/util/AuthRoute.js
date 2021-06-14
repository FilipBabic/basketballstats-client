import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Navbar from '../components/Navbar';
const AuthRoute = ({ component: Component, authenticated, ...rest}) => (
    <Route
        {...rest}
        render={(props) => authenticated === true ? <Redirect to='/'/> : <><Navbar /><Component {...props} /></>}
    />
);

export default AuthRoute;
