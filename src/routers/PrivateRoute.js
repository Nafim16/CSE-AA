import React, { useContext } from 'react';
import { AuthContext } from '../Context/UserContext';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext)

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

    if (user) {
        return children;
    }

    return <Navigate to="/login" replace={true}></Navigate>;
};

export default PrivateRoute;