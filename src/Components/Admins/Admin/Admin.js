import React, { useContext, useEffect, useRef, useState } from 'react';
import './Admin.css';
import { Timestamp, addDoc, collection, doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore';
import { db } from '../../../FIrebase/firebase.config';
import { AuthContext } from '../../../Context/UserContext';
import Swal from 'sweetalert2';
import JoditEditor from 'jodit-react';

const Admin = () => {

    const { user } = useContext(AuthContext);

    const editor = useRef(null);

    const [post, setPost] = useState('');
    const time = new Date();

    const handlePostSubmit = async (event) => {
        event.preventDefault();
        const form = event.target;

        if (!post.trim()) {
            // If post value is empty or contains only whitespace
            Swal.fire({
                title: 'Error!',
                text: 'Please write something before submitting.',
                icon: 'error',
                confirmButtonText: 'Ok'
            });
            return;
        }

        
        
        const name = user.displayName;
        const uid = user.uid;
        const approval = 'WaitingForApprove';
        const createdAt = time.toLocaleString();

        const newspost = { post, name, uid, createdAt, approval };
        console.log('news created: ', newspost);
        form.reset();


        fetch('http://localhost:5000/news', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newspost)
        })
            .then(res => res.json()
                .then(data => {
                    console.log(data);
                    if (data.insertedId) {
                        Swal.fire({
                            title: 'Success!',
                            text: 'Post created Successfully, Wait for the Admins to Approve it',
                            icon: 'success',
                            confirmButtonText: 'Cool'
                        })
                        setPost('');
                    }
                }))

    };




    return (
        <div>
            {
                <>
                    <div className='mt-5 pt-5'>
                        <div className="d-flex">
                            <div className="container-fluid w-75">
                                <h3>Create Post</h3>
                                <form onSubmit={handlePostSubmit}>
                                    <div className="form-group">
                                        <JoditEditor
                                            ref={editor}
                                            value={post}
                                            onChange={setPost}
                                        />
                                        {/* <textarea className="form-control" name='post' placeholder='Write your news........' rows="5"></textarea> */}
                                    </div>
                                    <div className="mt-2 d-flex justify-content-end">
                                        <button type="submit " className='btn btn-primary me-2'>create</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                </>
            }
        </div>
    );
};

export default Admin;