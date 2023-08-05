import React, { useContext, useEffect, useState } from 'react';
import Head from '../Head/Head';
import './Profile.module.css';
import { AuthContext } from '../../Context/UserContext';
import info from '../img/info.svg'
import { db } from '../../FIrebase/firebase.config';
import { doc, getDoc } from 'firebase/firestore';


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

    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            if (user) {

                const uid = user.uid;

                try {
                    const userDocRef = doc(db, 'users', uid);

                    const docSnap = await getDoc(userDocRef);

                    if (docSnap.exists()) {
                        setUserData(docSnap.data());

                    }
                    else {
                        console.log('doc not found');
                    }
                }
                catch (error) {
                    console.log('error fetching data', error);
                }

            }
        };

        fetchUserData();

    }, [user]);


    if (userData) {
        console.log('user data:', userData);
    }


    // const handleUpdateData = (event) => {
    //     event.preventDefault();
    //     const form = event.target;
    //     const name = form.name.value;
    //     const phone = form.phone.value;
    //     const city = form.city.value;
    //     const batch = form.batch.value;
    //     const blood = form.blood.value;
    //     const gender = form.gender.value;
    //     const dob = form.dob.value;

    //     console.log("updated", name,  phone,  city, batch, blood, gender, dob);
    // }


    return (
        <div>
            <Head></Head>
            <div className="p-5 mt-5 align-item-center">
                <div className="container-fluid justify-content-center">
                    <div className="row">
                        <div className="col-md-6 justify-content-center">
                            <h3 className='text-center'>User Information</h3>
                            <form>
                                <div className="form-floating mb-3">
                                    <input type="email" className="form-control" id="floatingInput" name='Email' defaultValue={userData?.email || user?.email || ''} />
                                    <label htmlFor="floatingInput">Email address</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" id="floatingPassword" name='name' defaultValue={userData?.name || user?.displayName || ''} />
                                    <label htmlFor="floatingPassword">Name</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" id="floatingPassword" name='dob' defaultValue={userData?.dob || ''} />
                                    <label htmlFor="floatingPassword">Date of Birth</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" id="floatingPassword" name='batch' defaultValue={userData?.batch || ''} />
                                    <label htmlFor="floatingPassword">Batch</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" id="floatingPassword" name='phone' defaultValue={userData?.phone || ''} />
                                    <label htmlFor="floatingPassword">Phone Number</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" id="floatingPassword" name='gender' defaultValue={userData?.gender || ''} />
                                    <label htmlFor="floatingPassword">Gender</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" id="floatingPassword" name='blood' defaultValue={userData?.blood || ''} />
                                    <label htmlFor="floatingPassword">Blood Group</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" id="floatingPassword" name='city' defaultValue={userData?.city || ''} />
                                    <label htmlFor="floatingPassword">City</label>
                                </div>
                            </form>
                            <input type="submit" value="Submit" className="nextPage" />
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