import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const ProfileUpdate = () => {

    // const currentUser = useLoaderData();
    const axiosSecure = useAxiosSecure();
    const [currentUser, setUser] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        axiosSecure.get(`/user/${id}`)
            .then(res => setUser(res.data))
    }, [axiosSecure, id])

    const page = useNavigate();
    const handleUpdate = () => {
        page('/profile');
    }

    const updateUser = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        // const dob = form.dob.value;
        const batch = form.batch.value;
        const phone = form.phone.value;
        const gender = form.gender.value;
        const blood = form.blood.value;
        const city = form.city.value;
        const role = form.role.value;
        const update = { name, batch, phone, gender, blood, city, role };


        // fetch(`http://localhost:5000/user/${currentUser._id}`, {
        //     method: 'PUT',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(update)
        // })
        //     .then(res => res.json())
        axiosSecure.put(`/user/${currentUser._id}`, update)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'UPDATED!',
                        text: 'user Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                    handleUpdate();
                }
            })





    }



    return (



        <div>
            <div className='fw-bold fs-2 text-secondary m-5'>
                Update Information!
            </div>
            <div className='d-flex justify-content-center'>
                <form onSubmit={updateUser}>

                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="floatingPassword" name='name' defaultValue={currentUser.name} />
                        <label htmlFor="floatingPassword">Name</label>
                    </div>
                    {/* <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="floatingPassword" name='dob' defaultValue={currentUser.dob} />
                        <label htmlFor="floatingPassword">Date of Birth</label>
                    </div> */}
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="floatingPassword" name='batch' defaultValue={currentUser.batch} />
                        <label htmlFor="floatingPassword">Batch</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="floatingPassword" name='phone' defaultValue={currentUser.phone} />
                        <label htmlFor="floatingPassword">Phone Number</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="floatingPassword" name='gender' defaultValue={currentUser.gender} />
                        <label htmlFor="floatingPassword">Gender</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="floatingPassword" name='blood' defaultValue={currentUser.blood} />
                        <label htmlFor="floatingPassword">Blood Group</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="floatingPassword" name='city' defaultValue={currentUser.city} />
                        <label htmlFor="floatingPassword">City</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="floatingPassword" name='role' defaultValue={currentUser.role} readOnly />
                        <label htmlFor="floatingPassword">Role</label>
                    </div>

                    <button type="submit" className="stories-btn">Update Profile</button>

                </form>
            </div>
        </div>
    );
};

export default ProfileUpdate;