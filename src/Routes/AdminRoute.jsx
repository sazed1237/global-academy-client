import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders';
import useAdmin from '../hooks/useAdmin';
import { Navigate } from 'react-router-dom';

const AdminRoute = ({ children }) => {
    const [isAdmin, loading] = useAdmin()
    console.log("isAdmin", isAdmin)

    if (loading) {
        return <p>loading....</p>
    }

    if (isAdmin) {
        return children;
    }



    return <Navigate to={'/'} ></Navigate>
};

export default AdminRoute;