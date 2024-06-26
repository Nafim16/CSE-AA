// 
import React, { useContext } from 'react';
import { AuthContext } from '../Context/UserContext';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {

    const { user, loading, logOut } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return (
            <div className='p-5 mt-5 my-5 mx-5 mx-auto '>
                <div className="d-flex align-items-center">
                    <strong>Loading...</strong>
                    <div className="spinner-border ms-auto" role="status" aria-hidden="true"></div>
                </div>
            </div>
        );
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace={true}></Navigate>;
    }

    // if (!user.emailVerified) {
    //     return <Navigate to="/mailVerify" state={{ from: location }} replace={true}></Navigate>;
        
    // }

    return children;
};

export default PrivateRoute;
