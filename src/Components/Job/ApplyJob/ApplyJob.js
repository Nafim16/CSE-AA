import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Head from '../../Head/Head';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../Context/UserContext';

const ApplyJob = () => {
    const jobs = useLoaderData();

    const { user } = useContext(AuthContext);

    const [users, setUser] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/user')
            .then(res => res.json())
            .then(data => setUser(data))
    }, []);

    const [applies, setApply] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/apply')
            .then(res => res.json())
            .then(data => setApply(data))
    }, [])



    const JobApplySubmit = (event, jobsId) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const contact = form.contact.value;
        const email = form.email.value;
        const cv = form.cv.value;
        const uid = user.uid;
        const newApply = { name, contact, email, cv, jobsId, uid };
        console.log(newApply);
        form.reset();

        if (!name.trim() || !contact.trim() || !email.trim() || !cv.trim()) {
            // If post value is empty or contains only whitespace
            Swal.fire({
                title: 'Error!',
                text: 'Please write all required data before submitting.',
                icon: 'error',
                confirmButtonText: 'Ok'
            });
            return;
        }

        fetch('http://localhost:5000/apply', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newApply)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Applied!',
                        text: 'Applied Successfully',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                }
            })
    }

    return (
        <div>
            <Head></Head>

            <div className='mt-5 pt-5'>
                <div className='formfield mb-5 d-flex justify-content-center'>
                    <div className="evt-container">
                        <form onSubmit={(event) => JobApplySubmit(event, jobs._id)} className='evt-form'>
                            <div className="evt-card evt-cart">
                                <b><h1 className="evt-title">Apply On {jobs.name}</h1></b>
                                <hr className="evt-hr" />
                                <div className="evt-steps">
                                    <div className="evt-step">
                                        <div>
                                            <span>Personal Details</span>
                                            <div className="">
                                                <input type="text" placeholder="Enter Name" className="evt-input_field" name='name' />
                                                <input type="number" placeholder="Enter Contact Number" className="evt-input_field" name='contact' />
                                                <input type="email" placeholder="Enter Email" className="evt-input_field" name='email' />
                                            </div>
                                        </div>
                                        <hr className="evt-hr" />
                                        <div>
                                            <span>CV</span>
                                            <p>Upload Your CV to google Drive</p>
                                            <p>Please Make sure your drive link is public</p>
                                        </div>
                                        <hr className="evt-hr" />
                                        <div className="evt-promo">
                                            <span>CV URL:</span>
                                            <input type="text" placeholder="Enter your CV url" className="evt-input_field" name="cv" />
                                        </div>
                                        <hr className="evt-hr" />
                                    </div>
                                </div>
                            </div>
                            <div className="evt-card evt-checkout">
                                <div className="evt-footer d-flex justify-content-end">
                                    <button className="evt-checkout-btn">Apply</button>
                                </div>
                            </div>
                        </form>
                    </div>

                </div>
            </div>


            <div className='pt-5 mt-5'>
                {user && user.uid === jobs.uid && (
                    <div className='mt-5 p-5'>

                        <div className="row">
                            <div className="col-md-12">
                                <div className=" table-responsive">
                                    <table className="table caption-top table-striped table-primary table-bordered border-secondary table-hover bg-shadow">
                                        <caption className='fs-2 fw-bold'>Applied Users</caption>
                                        <thead className="table-dark">
                                            <tr>
                                                <th>Name</th>
                                                <th>Contact</th>
                                                <th>Email</th>
                                                <th>CV</th>


                                            </tr>
                                        </thead>
                                        <tbody>
                                            {applies
                                                .filter(apply => apply.jobsId === jobs._id)
                                                .map(apply => (

                                                    <React.Fragment key={apply._id}>

                                                        <tr>
                                                            <td>
                                                                <div className="">
                                                                    <span>{apply.name}</span>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                {apply.email}
                                                            </td>
                                                            <td>
                                                                {apply.contact}
                                                            </td>
                                                            <td>
                                                                <span className="text-danger">
                                                                    <a href={window + apply.cv} target="_blank" rel="noopener noreferrer">Click To open CV</a>
                                                                </span>
                                                            </td>
                                                        </tr>

                                                    </React.Fragment>

                                                ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                )}
            </div>
        </div>

    );
};

export default ApplyJob;