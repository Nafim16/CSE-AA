import React from 'react';
import error from '../img/error.gif';
import Head from '../Head/Head';
import './Profile.css';



const Profile = () => {
    return (
        <div>
            <Head></Head>
            <div className="p-5 m-5 mx-auto">
                <form className="form-group">
                    <div className="form-floating mb-3">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Profile;