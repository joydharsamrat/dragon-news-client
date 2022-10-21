import React, { useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import { authContext } from '../../contexts/AuthProvider/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(authContext);
    const location = useLocation();
    if (loading) {
        return <div className='text-center'><Spinner animation="grow" /></div>;
    }
    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate >

    }
    return children;
};

export default PrivateRoute;