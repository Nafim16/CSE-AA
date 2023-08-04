import React from 'react';
import error from '../img/error.gif';
const Error = () => {
    return (
        <div>
            <div className='bg-black vh-100'>
                <img src={error} className='img-fluid' alt="" />
                <h2 className='text-secondary'>Page Not Found!</h2>
            </div>
        </div>
    );
};

export default Error;