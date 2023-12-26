import React from 'react';
import Head from '../Head/Head';
import Footer from '../Footer/Footer';
import covevent from '../img/covevent.svg'

const CreateEvent = () => {
    return (
        <div>
            <Head></Head>

            <h1 className='mt-5 pt-5'>Welcome to create event page</h1>

            <div className='row'>
                <div className='col-md-6'>
                    <img src={covevent} alt="" />
                </div>
                <div>

                </div>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default CreateEvent;