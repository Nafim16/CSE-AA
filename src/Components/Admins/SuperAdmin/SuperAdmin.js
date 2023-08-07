import { collection, doc, getDoc, getDocs } from 'firebase/firestore';
import React, { useContext, useEffect, useState } from 'react';
import { db } from '../../../FIrebase/firebase.config';
import Head from '../../Head/Head';
import { AuthContext } from '../../../Context/UserContext';
import Error from '../../Error/Error';

const SuperAdmin = () => {


    //fetch all user data 
    const { user } = useContext(AuthContext);
    const [allUserData, setAllUserData] = useState([]);

    useEffect(() => {
        const fetchAllUsersData = async () => {
            try {
                const userCollectionRef = collection(db, 'users');
                const querySnapshot = await getDocs(userCollectionRef);

                const userDataArray = [];
                querySnapshot.forEach((doc) => {
                    userDataArray.push(doc.data());
                });

                setAllUserData(userDataArray);
            }
            catch (error) {
                console.log('error fetching data', error);
            }
        }
        fetchAllUsersData();
    }, []);


    //fetch logged user data 

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
    



    return (
        <div>
            <Head></Head>


            {userData && userData.role === 'superAdmin' ?
                <>
                    <div className="mt-5 p-5">
                        <div className="table-responsive">
                            <table className="table caption-top table-striped table-primary table-bordered border-secondary">
                                <caption className='fs-2'>All Users Data</caption>
                                <thead className="table-dark">
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">City</th>
                                        <th scope="col">Batch</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Number</th>
                                        <th scope="col">Date of Birth</th>
                                        <th scope="col">Gender</th>
                                        <th scope="col">Blood</th>
                                        <th scope="col">Role</th>
                                        <th scope="col">Change Role</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {allUserData.map((users, _id) => (
                                        <tr key={_id}>
                                            <th scope="row">{_id + 1}</th>
                                            <td>{users.name}</td>
                                            <td>{users.city}</td>
                                            <td>{users.batch}</td>
                                            <td>{users.email}</td>
                                            <td>{users.phone}</td>
                                            <td>{users.dob}</td>
                                            <td>{users.gender}</td>
                                            <td>{users.blood}</td>
                                            <td>{users.role}</td>
                                            <td className="d-lg-flex align-items-center">
                                                <select className="form-select form-select-sm me-1 w-50">
                                                    <option value="member">Select role</option>
                                                    <option value="member">Member</option>
                                                    <option value="admin">Admin</option>
                                                </select>
                                                <button className='btn btn-primary btn-sm'>Change</button>
                                            </td>
                                        </tr>

                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </> : <>
                    <Error></Error>
                </>
            }



        </div>
    );
};

export default SuperAdmin;