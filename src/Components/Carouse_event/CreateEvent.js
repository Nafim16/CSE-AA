import React from 'react';
import Head from '../Head/Head';
import Footer from '../Footer/Footer';
import covevent from '../img/covevent.svg';


const CreateEvent = () => {
    return (
        <div>
            <Head></Head>

            <h1 className='mt-5 pt-5'>Welcome!</h1>

            <div className='mt-5'>
                <div className='row'>
                    <div className='col-md-6'><img src={covevent} alt=""  className='img-fluid'/></div>
                    <div className='col-md-6'>
                        <div>
                            <h4>New Event Create</h4>
                        </div>
                        <div className='formfield'>
                            <form action="">
                                <div className="form-floating mb-3">
                                    <input type="email" className="form-control" placeholder='abc' id="floatingInputDisabled" />
                                    <label htmlFor="floatingInputDisabled">Event Title</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input className="form-control" id="floatingTextareaDisabled" placeholder='abc' />
                                    <label htmlFor="floatingTextareaDisabled">Event Type</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input className="form-control" id="floatingTextarea2Disabled" placeholder='abc' />
                                    <label htmlFor="floatingTextarea2Disabled">Description</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input className="form-control" id="floatingTextarea2Disabled" placeholder='abc' />
                                    <label htmlFor="floatingTextarea2Disabled">Start Date</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input className="form-control" id="floatingTextarea2Disabled" placeholder='abc' />
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