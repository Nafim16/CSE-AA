import React from 'react';
import loginarea from '../img/loginarea.png';
import './Login.css'
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const navigate = useNavigate();
    const registerClicked = () => {
        navigate("/registration");
    };

    return (
        <div>
            <div className='container-fluid box'>
                <div className='row'>
                    <div className='col-md-4'>
                        <div className='mb-4 text-center mt-3 p-3'>
                            <h3>Join the CSE Alumni Association, Leading University to reconnect with your friends, classmates, seniors & juniors.</h3>
                        </div>
                        <form>
                            <div className="form-row">
                                <div className="col">
                                    <div className='submit-area'>
                                        <input type="email" className="form-control mx-auto" placeholder="Your Email" />
                                        <br />
                                        <input type="password" className="form-control mx-auto" placeholder="Your Password" />
                                        <br />
                                        <button type="submit" className="btn btn-primary mb-2 bsub">Submit</button>
                                        <div className="text-center">
                                            <p>Not a member? </p>
                                            <button type="submit" className="btn btn-light bsub" onClick={registerClicked}>Register</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className='col-md-8'>
                        <div className='col'>
                            <div className='img-area'>
                            <img src={loginarea} alt="log" className="img-fluid"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;