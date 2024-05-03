import React, { useEffect, useState } from 'react';
import useAxiosSecure from './useAxiosSecure';

const useUser = () => {

    const axiosSecure = useAxiosSecure();
    const [user, setUser] = useState([]);

    useEffect(() => {
        axiosSecure.get('/user')
            .then(res => setUser(res.data))
    }, [axiosSecure])

    return user;
};

export default useUser;