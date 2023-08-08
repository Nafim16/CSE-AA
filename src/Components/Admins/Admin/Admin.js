import React, { useContext, useEffect, useState } from 'react';
import './Admin.css';
import { Timestamp, addDoc, collection, doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore';
import { db } from '../../../FIrebase/firebase.config';
import { AuthContext } from '../../../Context/UserContext';

const Admin = () => {

    const { user } = useContext(AuthContext)

    const postCollectionRef = collection(db, 'posts');


    const handlePostSubmit = async (event) => {
        event.preventDefault();
        const form = event.target;
        const post = form.post.value;

        console.log('news created: ', post);
        form.reset();

        try {
            await addDoc(postCollectionRef, {
                post,
                author: user.displayName,
                userId: user.uid,
                createdAt: serverTimestamp(),
            });

            console.log("Post created");
        } catch (error) {
            console.error("Error creating post", error);
        }
    };




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







    return (
        <div>
            {userData && ((userData.role === 'superAdmin') || (userData.role === 'Admin')) ?
                <>
                    <div className='mt-5 pt-5'>
                        <div className="d-flex">
                            <div className="container-fluid w-75">
                                <h3>Create Post</h3>
                                <form onSubmit={handlePostSubmit}>
                                    <div className="form-group">
                                        <textarea className="form-control" name='post' placeholder='Write your news........' rows="5"></textarea>
                                    </div>
                                    <div className="mt-2 d-flex justify-content-end">
                                        <button type="submit " className='btn btn-primary me-2'>create</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </> : <>
                </>
            }
        </div>
    );
};

export default Admin;