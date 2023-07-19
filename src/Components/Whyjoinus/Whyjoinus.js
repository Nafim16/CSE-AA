import React from 'react';
import './Whyjoinus.css';
import img1 from '../img/connect.png';
import img2 from '../img/event.png';
import img3 from '../img/job.png';
const Whyjoinus = () => {
    return (
        <div>
            <div className='container mt-5'>
                <h1 className='text-center mb-4'>Here is why you should join us</h1>
                <div className='row'>


                    <div className='col-md-4'>
                          <div className="card text-white   why-box">
                          <img className='image1' src={img1} alt="" />
                          <h2 className='why-p'>Reconnect</h2>
                          <p className='why-p' >Reconnect with the members of CSE Alumni LU in the secured, ad-free online Network and know each our for future</p>
                          </div>
                        
                    </div>




                    <div className='col-md-4'>
                        <div className="card text-white why-box">
                                <img className='image1' src={img2} alt="" />
                                <h2 className='why-p'>Back To Versity Days</h2>
                                <p className='why-p'>Give Back to various causes through fundraising events.Join Us those Events and back to your university life</p>
                            
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className="card text-white why-box">
                               <img className='image1' src={img3} alt="" />
                                <h2 className='why-p'>Job Opportunities</h2>
                                <p className='why-p'>Advance your career, post job opportunities, and find open positions in your professional network and find suitabe job for you.</p>
                           
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