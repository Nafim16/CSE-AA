import React from 'react';
import './Whyjoinus.css';
const Whyjoinus = () => {
    return (
        <div>
            <div className='container mt-5'>
                <h1 className='text-center mb-4'>Here is why you should join us</h1>
                <div className='row'>
                    <div className='col-md-4'>
                        <div className="card text-white bg-secondary mb-3 shadow">
                            <div className="card-header">Reconnect</div>
                            <div className="card-body">
                                <p className="card-text">Reconnect with the members of CSE Alumni LU in the secured, ad-free online Network</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className="card text-white bg-secondary mb-3 shadow">
                            <div className="card-header">Give Back</div>
                            <div className="card-body">
                                <p className="card-text">Give Back to various causes through fundraising events.</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className="card text-white bg-secondary mb-3 shadow">
                            <div className="card-header">Advance</div>
                            <div className="card-body">
                                <p className="card-text">Advance your career, post job opportunities, and find open positions in your professional network.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container mt-5 mb-5'>
                <div>
                    <div className='p-5'>
                        <h1 className='text-center'>Join the CSE Alumni Association, LU Network, reconnect with your friends, classmates, seniors, and juniors from the Department of Computer Science & Engineering, LU. Grow your network & advance your career.</h1>
                    </div>
                    <button className='btn btn-secondary'>Register Now</button>
                </div>

            </div>

        </div>
    );
};

export default Whyjoinus;