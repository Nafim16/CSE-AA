import React from 'react';
import './User.css';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
const ChangeRole = () => {

    const user = useLoaderData();


    const handleUpdateUser = event => {
        event.preventDefault();
        const form = event.target;
        const role = form.role.value;
        
        const updateuser = { role };

        fetch(`http://localhost:5000/user/${user._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateuser)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'UPDATED!',
                        text: 'user Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                }
            })
    }

    return (
        <div className="mt-5 d-flex align-items-center justify-content-center">
            <div className="card custom-card">
                <div className="card-body">
                    <h5 className="card-title custom-title">{user.name}</h5>
                    <p className="card-text">Role: {user.role}</p>
                    <p className="card-text">Email: {user.email}</p>
                    <p className="card-text">Batch: {user.batch}</p>
                    <p className="card-text">City: {user.city}</p>
                    <p className="card-text">Gender: {user.gender}</p>
                    <p className="card-text">Phone: {user.phone}</p>
                    <form onSubmit={handleUpdateUser}>
                        <select className="custom-select card-text" defaultValue="Select Role" name="role">
                            <option value="Select Role" disabled >Select Role</option>
                            <option value="member">Member</option>
                            <option value="admin">Admin</option>
                            <option value="superAdmin">Super Admin</option>
                        </select>
                        <button type='submit' className="btn btn-primary mt-2">Update</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ChangeRole;