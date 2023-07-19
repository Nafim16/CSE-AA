import React from 'react';
import loginarea from '../img/loginarea.png';
import './Login.css'

const Login = () => {
    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className='mb-4 text-center mt-3'>
                            <h3>Join the CSE Alumni Association, Leading University to reconnect with your friends, classmates, seniors & juniors.</h3>
                        </div>
                        <form>
                            <div class="form-row">
                                <div class="col">
                                    <div className='submit-area'>
                                        <input type="text" className="form-control" placeholder="First name" />
                                        <br />
                                        <input type="text" className="form-control" placeholder="Last name" />
                                        <br />
                                        <button type="submit" className="btn btn-primary btn-block mb-2">Submit</button>
                                        <div className="text-center">
                                            <p>Not a member? </p>
                                            <button type="submit" className="btn btn-light">Register</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className='col-md-6'>
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