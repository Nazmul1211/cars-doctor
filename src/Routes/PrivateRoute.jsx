import React, { useContext } from 'react';
import { AuthContext } from '../Pages/Providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    // console.log(location.pathname);


    if (loading) {
        return <progress className="progress w-56"></progress>
    }
    else if (user?.email) {
        return children;
    }
    // else return <Navigate state={{ from: location }} to="/login"></Navigate>  //setting direct state location
    else return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default PrivateRoute;