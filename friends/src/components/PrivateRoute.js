import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({component: Component, ...rest}) => {
    return (
        <Route {...rest}
        render = {() => {
            if (localStorage.getItem('authToken')) {
                return <Component />
            }
            console.log('auth failed! redirecting..')
            alert('you must log in to continue.')
            return <Redirect to='/sign-in' />
        }}/>
    );
};

export default PrivateRoute;