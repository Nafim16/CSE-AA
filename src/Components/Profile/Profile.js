import React, { useContext, useEffect, useState } from 'react';
import Head from '../Head/Head';
import './Profile.module.css';
import { AuthContext } from '../../Context/UserContext';
import info from '../img/info.svg'


const Profile = () => {

    const { user } = useContext(AuthContext);

    // const [displayName, setDisplayName] = useState('');
    // const [email, setEmail] = useState('');

    // useEffect(() => {
    //     // Check if the user object is available and set the state accordingly
    //     if (user) {
    //         setDisplayName(user.displayName || '');
    //         setEmail(user.email || '');
    //     }
    // }, [user]);

    return (
        <div>
            <Head></Head>
            <div className="p-5 m-5 align-item-center">
                <div className="container-fluid justify-content-center">
                    <div className="row">
                        <div className="col-md-6 justify-content-center">
                            <h3 className='text-center'>User Information</h3>
                            <form>
                                <div className="form-floating mb-3">
                                    <input type="email" className="form-control" id="floatingInput" placeholder='Email' defaultValue={user?.email || ''} />
                                    <label htmlFor="floatingInput">Email address</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" id="floatingPassword" placeholder='Name' defaultValue={user?.displayName || ''} />
                                    <label htmlFor="floatingPassword">Name</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" id="floatingPassword" placeholder='Name' defaultValue={user?.displayName || ''} />
                                    <label htmlFor="floatingPassword">Date of Birth</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" id="floatingPassword" placeholder='Name' defaultValue={user?.displayName || ''} />
                                    <label htmlFor="floatingPassword">Batch</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" id="floatingPassword" placeholder='Name' defaultValue={user?.displayName || ''} />
                                    <label htmlFor="floatingPassword">Phone Number</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" id="floatingPassword" placeholder='Name' defaultValue={user?.displayName || ''} />
                                    <label htmlFor="floatingPassword">Gender</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" id="floatingPassword" placeholder='Name' defaultValue={user?.displayName || ''} />
                                    <label htmlFor="floatingPassword">Blood Group</label>
                                </div>
                            </form>
                        </div>
                        <div className="col-md-6 align-item-center">
                            <img src={info} alt="" className="img-fluid justify-content-end mt-3 m-4" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;