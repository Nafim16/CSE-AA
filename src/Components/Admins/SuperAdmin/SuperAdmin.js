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
                        <h2>All Users Data</h2>
                        <ul className='list-group'>
                            {allUserData.map((users, _id) => (
                                <li key={_id} className="list-group-item mb-2">
                                    {/* Display user data  */}
                                    <div>Name: {users.name}</div>
                                    <div>Email: {users.email}</div>
                                    <div>Date of Birth: {users.dob}</div>
                                    <div>Number: {users.phone}</div>
                                    <div>Gender: {users.gender}</div>
                                    <div>City: {users.city}</div>
                                    <div>Batch: {users.batch}</div>
                                    <div>Blood: {users.blood}</div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </> : <>
                    <Error></Error>
                </>

            }



        </div>
    );
};

export default SuperAdmin;