import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LogReg.css';
import Head from '../Head/Head';


const LogReg = () => {

    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate("/login");
    };

    const [stage, setStage] = useState(1);

    const handleNext = () => {
        setStage((prevStage) => prevStage + 1);
    };

    const handlePrevious = () => {
        setStage((prevStage) => prevStage - 1);
    };

    const renderFormContent = () => {
        switch (stage) {
            case 1:
                return (
                    <div className="stage1-content">
                        <div className="button-container">
                            <div className="text-fields name">
                                <label htmlFor="name"><i className='bx bx-user'></i></label>
                                <input type="text" name="name" id="name" placeholder='Enter Your Name' />
                            </div>
                            <div className="text-fields ID">
                                <label htmlFor="ID"><i className='bx bx-user'></i></label>
                                <input type="text" name="ID" id="ID" placeholder='Enter Your Student ID' />
                            </div>
                        </div>

                        <div className="button-container">
                            <div className="text-fields dob">
                                <input type="date" name="dob" id="dob" />
                            </div>
                            <div className="gender-selection">
                                <p className="field-heading">Gender : </p>
                                <label htmlFor="male">
                                    <input type="radio" name="gender" id="male" />Male
                                </label>
                                <label htmlFor="female">
                                    <input type="radio" name="gender" id="female" />Female
                                </label>
                            </div>
                        </div>
                        <div className="pagination-btns">
                            <input type="button" value="Next" className="nextPage stagebtn1b" onClick={handleNext} />
                        </div>
                    </div>
                );
            case 2:
                return (
                    <div className="stage2-content">
                        {/* Form content for stage 2 */}
                        <div className="button-container">
                            <div className="text-fields phone">
                                <label htmlFor="phone"><i class='bx bx-phone'></i></label>
                                <input type="text" name="phone" id="phone" placeholder='Enter Your Contact Number' />
                            </div>
                            <div className="text-fields email">
                                <label htmlFor="email"><i class='bx bx-envelope'></i></label>
                                <input type="email" name="email" id="email" placeholder='Enter Your Email ID ' />
                            </div>
                        </div>
                        <div className="button-container">
                            <div className="text-fields password">
                                <label htmlFor="password"><i class='bx bx-lock' ></i></label>
                                <input type="password" name="password" id="password" placeholder='Enter Your Password' />
                            </div>
                            <div className="text-fields confirmpassword">
                                <label htmlFor="confirmpassword"><i class='bx bx-lock' ></i></label>
                                <input type="password" name="confirmpassword" id="confirmpassword" placeholder='Confirm Password' />
                            </div>
                        </div>


                        <div className="pagination-btns">
                            <input type="button" value="Previous" className="previousPage stagebtn2a" onClick={handlePrevious} />
                            <input type="button" value="Next" className="nextPage stagebtn2b" onClick={handleNext} />
                        </div>
                    </div>
                );
            case 3:
                return (
                    <div className="stage3-content">
                        <div className="button-container">
                            <div className="text-fields city">
                                <label htmlFor="city"><i class='bx bx-buildings bx-tada bx-flip-horizontal' ></i></label>
                                <input type="text" name="city" id="city" placeholder='Enter Your City' />
                            </div>
                            <div className="text-fields blood">
                                <label htmlFor="blood"><i class='bx bxs-donate-blood bx-tada bx-flip-horizontal' ></i></label>
                                {/* <input type="text" name="blood" id="blood" placeholder='Enter Blood Group' /> */}
                                <select className="custom-select">
                                    <option selected>Your Blood Group</option>
                                    <option value="1">A+</option>
                                    <option value="2">A-</option>
                                    <option value="3">B+</option>
                                    <option value="3">B-</option>
                                    <option value="3">B+</option>
                                    <option value="3">AB+</option>
                                    <option value="3">AB-</option>
                                    <option value="3">O+</option>
                                    <option value="3">O-</option>
                                </select>
                            </div>
                        </div>
                        <div className="button-container">
                            <div className="text-fields batch">
                                <label htmlFor="batch"><i class='bx bx-buildings bx-tada bx-flip-horizontal' ></i></label>
                                <input type="text" name="batch" id="batch" placeholder='Enter Your ' />
                            </div>
                        </div>
                        <div className='text-center'>
                            Your some information will be recorded for Blood donation program.
                        </div>
                        <div className="pagination-btns">
                            <input type="button" value="Previous" className="previousPage stagebtn3a" onClick={handlePrevious} />
                            <input type="button" value="Submit" className="nextPage stagebtn3b" onClick={handleLoginClick} />
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    return (

        <div>
            <Head></Head>
            <div className="body2">
                <div className="container">
                    <div className="login-link">
                        <div className="logo">
                            <i className='bx bx-pencil'></i>
                            <span className="text">CSE-AA-LU</span>
                        </div>
                        <p className="side-big-heading">Already a Member ?</p>
                        <p className="primary-bg-text">To Keep Track on your dashboard please login with your personal info</p>
                        {/* <a href="/login" className="loginbtn" onClick={handleLoginClick} >Login</a> */}
                        {/* <Link to={navigate("/login")} className="loginbtn">Login</Link> */}
                        {/* <button className="loginbtn" onClick={handleLoginClick}>Login</button> */}
                        <input type="button" value="Login" className="loginbtn" onClick={handleLoginClick} />

                    </div>
                    <form action="" className="signup-form-container">
                        <p className="big-heading">Create Account</p>
                        <div className="social-media-platform">
                            <a href="#"><i className='bx bx-sm bxl-facebook'></i></a>
                            <a href="#"><i className='bx bx-sm bxl-twitter'></i></a>
                            <a href="#"><i className='bx bx-sm bxl-github'></i></a>
                        </div>
                        <div className="progress-bar">
                            <div className="stage">
                                <p className="tool-tip">Personal Info</p>
                                <p className="stageno stageno-1">1</p>
                            </div>
                            <div className="stage">
                                <p className="tool-tip">Contact Info</p>
                                <p className="stageno stageno-2">2</p>
                            </div>
                            <div className="stage">
                                <p className="tool-tip">Final Submit</p>
                                <p className="stageno stageno-3">3</p>
                            </div>
                        </div>
                        <div className="signup-form-content">
                            {renderFormContent()}
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default LogReg;
