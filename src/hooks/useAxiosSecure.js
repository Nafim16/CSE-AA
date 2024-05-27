import axios from 'axios';
import React, { useEffect } from 'react';
import useAuth from './useAuth';
import { useNavigate } from 'react-router-dom';



const axiosSecure = axios.create({
    baseURL: 'https://caa-lu-server.azurewebsites.net',
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
            if (error.response.status === 401 || error.response.status === 403) {
                console.log('logout the user');
                logOut()
                .then(()=>{
                    navigate('/login');
                })
            }
        })
    }, [navigate, logOut])

    // axiosSecure.interceptors.request.use(function (config) {
    //     // Retrieve the token from cookies instead of localStorage
    //     const token = document.cookie.split(' ').find(row => row.startsWith('access-token'))?.split('=')[1];
    //     // Check if token exists before adding it to the headers
    //     if (token) {
    //         config.headers.authorization = `Bearer ${token}`;
    //     }
    //     return config;
    // }, function (error) {
    //     // Do something with request error
    //     return Promise.reject(error);
    // });

    // axiosSecure.interceptors.response.use(function (response) {
    //     return response;
    // }, async (error) => {
    //     const status = error.response.status;
    //     // console.log('status error in the interceptor', status);
    //     // for 401 or 403 logout the user and move the user to the login
    //     if (status === 401 || status === 403) {
    //         await logOut();
    //         navigate('/login');
    //     }
    //     return Promise.reject(error);
    // })

    // // request interceptor to add authorization header for every secure call to teh api
    // axiosSecure.interceptors.request.use(function (config) {
    //     const token = localStorage.getItem('access-token')
    //     // console.log('request stopped by interceptors', token)
    //     config.headers.authorization = `Bearer ${token}`;
    //     return config;
    // }, function (error) {
    //     // Do something with request error
    //     return Promise.reject(error);
    // });


    // // intercepts 401 and 403 status
    // axiosSecure.interceptors.response.use(function (response) {
    //     return response;
    // }, async (error) => {
    //     const status = error.response.status;
    //     // console.log('status error in the interceptor', status);
    //     // for 401 or 403 logout the user and move the user to the login
    //     if (status === 401 || status === 403) {
    //         await logOut();
    //         navigate('/login');
    //     }
    //     return Promise.reject(error);
    // })


    return axiosSecure;
};

export default useAxiosSecure;