import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Head from '../Head/Head';
import Footer from '../Footer/Footer';
import covevent from '../img/covevent.svg';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const UpdateEvent = () => {

    // Use destructuring to get the 'event' object from useLoaderData()
    // const events = useLoaderData();
    const axiosSecure = useAxiosSecure();
    const { id } = useParams();
    const [events, setEvents] = useState([]);
    useEffect(() => {
        // fetch('http://localhost:5000/event')
        //     .then((res) => res.json())
        axiosSecure.get(`/event/${id}`)
            .then((res) => setEvents(res.data));
    }, [axiosSecure, id]);


    const handleUpdateEvent = event => {

        event.preventDefault();

        const form = event.target;

        const title = form.title.value;
        const photoUrl = form.photoUrl.value;
        const description = form.description.value;
        const startDate = form.startDate.value;
        const endDate = form.endDate.value;

        const updatedEvent = { title, photoUrl, description, startDate, endDate }

        console.log(updatedEvent);

        // Send Data to the Server

        // fetch(`http://localhost:5000/event/${events._id}`, {
        //     method: 'PUT',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(updatedEvent),
        // })
        //     .then(res => res.json())
        axiosSecure.put(`/event/${events._id}`, updatedEvent)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'UPDATED!',
                        text: 'Event Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                }
            })
            .catch((error) => {
                console.error('Error updating event:', error);
                // You can handle the error here, e.g., show an alert or log it.
            });

    }







    return (
        <div>
            <Head></Head>

            <h1 className='mt-5 pt-5'>Welcome!</h1>

            <div className='mt-5'>
                <div className='row'>
                    <div className='col-md-6'><img src={covevent} alt="" className='img-fluid' /></div>
                    <div className='col-md-6'>
                        <div>
                            <h4>Update {events.title}</h4>
                        </div>
                        <div className='formfield d-flex justify-content-center mb-5'>

                            <form onSubmit={handleUpdateEvent}>

                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" name="title" defaultValue={events.title} placeholder='Event Title' id="floatingInputDisabled" />
                                    <label htmlFor="floatingInputDisabled">Event Title</label>
                                </div>

                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" id="floatingTextareaDisabled" name="photoUrl" placeholder='Photo URl' defaultValue={events.photoUrl} />
                                    <label htmlFor="floatingTextareaDisabled">Photo URl</label>
                                </div>

                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" id="floatingTextarea2Disabled" name="description" defaultValue={events.description} placeholder='Description' />
                                    <label htmlFor="floatingTextarea2Disabled">Description</label>
                                </div>

                                <div className="form-floating mb-3">
                                    <input type='date' className="form-control" id="floatingTextarea2Disabled" name="startDate" defaultValue={events.startDate} placeholder='Start Date' />
                                    <label htmlFor="floatingTextarea2Disabled">Start Date</label>
                                </div>

                                <div className="form-floating mb-3">
                                    <input type='date' className="form-control" id="floatingTextarea2Disabled" name="endDate" defaultValue={events.endDate} placeholder='End Date' />
                                    <label htmlFor="floatingTextarea2Disabled">End Date</label>
                                </div>

                                <button class="btn btn-primary " type="submit" value="Update Event">Update Event</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default UpdateEvent;