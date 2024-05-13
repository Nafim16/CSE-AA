import axios from 'axios';
import React, { useEffect } from 'react';
import useAuth from './useAuth';
import { useNavigate } from 'react-router-dom';



const axiosSecure = axios.create({
    baseURL: 'https://cse-aa-server.onrender.com',
    withCredentials: true
})

const useAxiosSecure = () => {

    const { logOut } = useAuth();
    const navigate = useNavigate();
    useEffect(() => {
        axiosSecure.interceptors.response.use(res => {
            return res;
        }, error => {
            console.log('error  tracked in the interceptor', error.response);
            if (error.response && (error.response.status === 401 || error.response.status === 403)) {
                console.log('logout the user');
                logOut()
                .then(()=>{
                    navigate('/login');
                })
            }
        })
    }, [])

    return axiosSecure;
};

export default useAxiosSecure;