import React, { useContext } from 'react';
import './Whyjoinus.css';
import { useNavigate } from 'react-router-dom';
import job from '../img/job.png';
import event from '../img/event.png'
import connect from '../img/connect.png'
import { AuthContext } from '../../Context/UserContext';
import { Bounce, Fade, Hinge, Slide } from 'react-awesome-reveal';

const Whyjoinus = () => {

    const { user } = useContext(AuthContext);

    const navigate = useNavigate();
    const registerClicked = () => {
        navigate("/registration");
    };

    return (
        <div>
            <div className="backCLR">
                <div className='container-fluid mt-5'>
                    <Fade direction='right' cascade damping={2}>
                        <h3 className='text-center text-secondary'>Still <b>◕‿‿◕</b> thinking over it?</h3>
                    </Fade>
                    <Fade direction='left' cascade damping={2}>
                        <h1 className='text-center mb-4'>Here is why you should join us</h1>
                    </Fade>
                    <div className='row p-4'>
                        <div className='col-md-4 btn-light mb-2'>
                            <div className="card text-white h-100 bg mb-3 p-3 shadow">
                                {/* <img src={job} className="card-img-top" /> */}
                                <Bounce>
                                    <img src={connect} alt='' className='card-img-top image1' />
                                    <div className="card-header text-primary">Reconnect</div>
                                    <div className="card-body">
                                        <p className="card-text text-black">Reconnect with the members of CSE Alumni LU in the secured, ad-free online Network</p>
                                    </div>
                                </Bounce>
                            </div>
                        </div>
                        <div className='col-md-4 btn-light mb-2'>
                            <div className="card text-white h-100 bg mb-3 p-3 shadow">
                                <Bounce>
                                    <img src={event} alt='' className='card-img-top image1' />
                                    <div className="card-header text-primary">Give Back</div>
                                    <div className="card-body">
                                        <p className="card-text text-black">Give Back to various causes through fundraising events.</p>
                                    </div>
                                </Bounce>
                            </div>
                        </div>
                        <div className='col-md-4 btn-light mb-2'>
                            <div className="card text-white h-100 bg mb-3 p-3 shadow">
                                <Bounce>
                                    <img src={job} alt='' className='card-img-top image1' />
                                    <div className="card-header text-primary">Advance</div>
                                    <div className="card-body">
                                        <p className="card-text text-black">Advance your career, post job opportunities, and find open positions in your professional network.</p>
                                    </div>
                                </Bounce>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='container-fluid mt-5 mb-5'>
                    <div>
                        <div className='p-5'>
                            <Bounce>
                                <Fade direction='down'>
                                    <h1 className='text-center'>Join the CSE Alumni Association, LU Network, reconnect with your friends, classmates, seniors, and juniors from the Department of Computer Science & Engineering, LU. Grow your network & advance your career.</h1>
                                </Fade>
                            </Bounce>
                        </div>
                        {user ?
                            <>

                            </> : <>
                                <button className='btn btn-primary' onClick={registerClicked}>Join Now</button>
                            </>
                        }
                    </div>

                </div>
            </div>




        </div>
    );
};

export default Whyjoinus;