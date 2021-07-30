import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import ResumeNavbar from '../components/resumeComponents/Navbar/ResumeNavbar';
const ResumeAuthRoute = ({ component: Component, authenticated, ...rest }) => (
    <Route
        {...rest}
        render={(props) => localStorage.FBidToken ?
            <>
                <ResumeNavbar />
                <Component {...props} />
            </> : <Redirect to='/' />
        }
    />
);

export default ResumeAuthRoute;