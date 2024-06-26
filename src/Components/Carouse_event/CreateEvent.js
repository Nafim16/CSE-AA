import React, { useContext } from 'react';
import Head from '../Head/Head';
import Footer from '../Footer/Footer';
import covevent from '../img/covevent.svg';
import Swal from 'sweetalert2'
import { AuthContext } from '../../Context/UserContext';
import useAxiosSecure from '../../hooks/useAxiosSecure';


const CreateEvent = () => {

    const axiosSecure = useAxiosSecure();

    const time = new Date();
    const { user } = useContext(AuthContext);

    const handleCreateEvent = event => {

        event.preventDefault();

        const form = event.target;

        const title = form.title.value;
        const photoUrl = form.photoUrl.value;
        const description = form.description.value;
        const startDate = form.startDate.value;
        const endDate = form.endDate.value;
        const createdAt = time.toLocaleString();
        const uid = user.uid;
        const approval = 'WaitingForApprove';

        const newEvent = { title, photoUrl, description, startDate, endDate, createdAt, uid, approval }

        console.log(newEvent);

        // Send Data to the Server

        // fetch('http://localhost:5000/event', {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(newEvent)
        // })
        //     .then(res => res.json())
        axiosSecure.post('/event', newEvent)
            .then(res => {
                console.log(res.data);
                if (res.data.insertedId) {
                    Swal.fire({
                        title: 'Success',
                        text: 'Event Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Confirm'
                    })
                }
            })

    }


    return (
        <div>
            <Head></Head>

            <h1 className='mt-5 pt-5'>Welcome!</h1>

            <div className='mt-5'>
                <div className='row'>
                    <div className='col-md-6'>
                        <img src={covevent} alt="" className='img-fluid' />
                    </div>
                    <div className='col-md-6'>
                        <div>
                            <h4>New Event Create</h4>
                        </div>
                        <div className='formfield mb-5 d-flex justify-content-center'>

                            <form onSubmit={handleCreateEvent}>

                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" name="title" placeholder='Event Title' id="floatingInputDisabled" />
                                    <label htmlFor="floatingInputDisabled">Event Title</label>
                                </div>

                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" id="floatingTextareaDisabled" name="photoUrl" placeholder='Photo URl' />
                                    <label htmlFor="floatingTextareaDisabled">Photo URl</label>
                                </div>


                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" id="floatingTextarea2Disabled" name="description" placeholder='Description' />
                                    <label htmlFor="floatingTextarea2Disabled">Description</label>
                                </div>

                                <div className="form-floating mb-3">
                                    <input type='date' className="form-control" id="floatingTextarea2Disabled" name="startDate" placeholder='Start Date' />
                                    <label htmlFor="floatingTextarea2Disabled">Start Date</label>
                                </div>

                                <div className="form-floating mb-3">
                                    <input type='date' className="form-control" id="floatingTextarea2Disabled" name="endDate" placeholder='End Date' />
                                    <label htmlFor="floatingTextarea2Disabled">End Date</label>
                                </div>

                                <button class="btn btn-primary " type="submit">Create Event</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default CreateEvent;