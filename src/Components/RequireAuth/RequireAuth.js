import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useFirebase from '../../UseFirebase/UseFirebase';


const RequireAuth = ({ children }) => {
    const auth = useFirebase();
    const location = useLocation();


    if (!auth.user) {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }

    return children;
};

export default RequireAuth;