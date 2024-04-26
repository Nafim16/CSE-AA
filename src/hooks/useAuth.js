import React, { useContext } from 'react';
import { AuthContext } from '../Context/UserContext';

const useAuth = () => {
    const auth = useContext(AuthContext);
    return auth;
};

export default useAuth;