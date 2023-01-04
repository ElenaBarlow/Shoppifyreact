import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';


const Protected = ({ children }) => {
    const location = useLocation();
    
    const { user } = UserAuth();
    if (!user) {
        return <Navigate to='/log-in' state={{ from: location }} replace />;
    }

  return children;
};

export default Protected