import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Navbar from '../components/Navbar';
const AuthRoute = ({ component: Component, authenticated, ...rest }) => (
    <Route
        {...rest}
        render={(props) => localStorage.FBidToken ?
            <>
                <Navbar />
                <Component {...props} />
            </> : <Redirect to='/' />
        }
    />
);

export default AuthRoute;
