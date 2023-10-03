import React from 'react';
import useAuth from '../hooks/useAuth';
import { Navigate } from 'react-router-dom';
import Loading from '../Components/Loading/Loading';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();


    // we'hv to wait here 
    if (loading) return <Loading/>
    // 

    if (!user?.email) {
        return <Navigate to='/login' />
    }



    return children;
};

export default PrivateRoute;