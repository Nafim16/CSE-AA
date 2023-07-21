import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LogReg.css';
import Head from '../Head/Head';
const Login = () => {

    const navigate = useNavigate();

    const handleRegisterClick = () => {
        navigate("/registration");
    };


    return (
        <div>
            <Head></Head>
            <div className="body2">
                <div className="container r">
                    <div className="login-link">
                        <div className="logo">
                            <i className='bx bx-pencil'></i>
                            <span className="text">CSE-AA-LU</span>
                        </div>
                        <p className="side-big-heading">Create New Account</p>
                        <p className="primary-bg-text">To Keep Track on your dashboard please login with your personal info</p>
                        {/* <a href="/registration" className="loginbtn" onClick={handleLoginClick} >Register Now</a> */}
                        {/* <Link to={navigate("/login")} className="loginbtn">Login</Link> */}
                        {/* <button className="loginbtn" onClick={handleRegisterClick}>register</button> */}
                        <input type="button" value="Register Now" className="loginbtn" onClick={handleRegisterClick}/>
                    </div>
                    <form action="" className="signup-form-container">
                        <p className="big-heading">Login To Your Account</p>
                        <div className="social-media-platform">
                            <a href="#"><i className='bx bx-sm bxl-facebook'></i></a>
                            <a href="#"><i className='bx bx-sm bxl-twitter'></i></a>
                            <a href="#"><i className='bx bx-sm bxl-github'></i></a>
                        </div>
                        <div className="login-form-contents">
                            <div className="text-fields email">
                                <label htmlFor="email"><i class='bx bx-envelope'></i></label>
                                <input type="email" name="email" id="email" placeholder='Enter Your Email ID ' />
                            </div>
                            <div className="text-fields password">
                                <label htmlFor="password"><i class='bx bx-lock' ></i></label>
                                <input type="password" name="password" id="password" placeholder='Enter Your Password' />
                            </div>
                            <input type="submit" value="login" className="nextPage" />
                        </div>
                        
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Login;