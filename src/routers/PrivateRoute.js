import React, { useContext } from 'react';
import { AuthContext } from '../Context/UserContext';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext)

    if (loading) {
        return (
            <div className='p-5 mt-5 my-5'>
                <div className="progress w-56">
                    <div className="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
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