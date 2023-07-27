import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './LogReg.css';
import Head from '../Head/Head';
import { AuthContext } from '../../Context/UserContext';

const Registration = () => {

    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate("/login");
    };

    const handleRegisterClick = () => {
        navigate("/");
    };


    const { user, createUser } = useContext(AuthContext);

    // console.log(createUser);


    const handleFormSubmitReg = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const idnum = form.idnum.value;
        const phone = form.phone.value;
        const password = form.password.value;
        const confirmpassword = form.confirmpassword.value;
        const city = form.city.value;
        const batch = form.batch.value;
        // const blood = form.blood.value;
        console.log("SUBMITTED", name, email, idnum, phone, password, confirmpassword, city, batch);

        handleRegisterClick();

        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                form.reset();
            })
            .catch(error => {
                console.log(error)
            })
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
                    <form onSubmit={handleFormSubmitReg} className="signup-form-container">
                        <p className="big-heading">Create Account</p>
                        <div className="social-media-platform">
                            <a href="#"><i className='bx bx-sm bxl-facebook'></i></a>
                            <a href="#"><i className='bx bx-sm bxl-twitter'></i></a>
                            <a href="#"><i className='bx bx-sm bxl-github'></i></a>
                        </div>


                        <div className="signup-form-content">

                            <div className="stage1-content">
                                {/* Form content for stage 1 */}
                                <div className="button-container">
                                    <div className="text-fields name">
                                        <label htmlFor="name"><i className='bx bx-user'></i></label>
                                        <input type="text" name="name" id="name" placeholder='Enter Your Name' />
                                    </div>
                                    <div className="text-fields ID">
                                        <label htmlFor="ID"><i className='bx bx-user'></i></label>
                                        <input type="text" name="idnum" id="idnum" placeholder='Enter Your Student ID' />
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
                            </div>



                            <div className="stage2-content">
                                {/* Form content for stage 2 */}
                                <div className="button-container">
                                    <div className="text-fields phone">
                                        <label htmlFor="phone"><i className='bx bx-phone'></i></label>
                                        <input type="number" name="phone" id="phone" placeholder='Enter Your Contact Number' />
                                    </div>
                                    <div className="text-fields email">
                                        <label htmlFor="email"><i className='bx bx-envelope'></i></label>
                                        <input type="email" name="email" id="email" placeholder='Enter Your Email ID ' />
                                        {/* <input type="email" name="email" id="email" placeholder='Enter Your Email ID ' /> */}
                                    </div>
                                </div>
                                <div className="button-container">
                                    <div className="text-fields password">
                                        <label htmlFor="password"><i className='bx bx-lock' ></i></label>
                                        <input type="password" name="password" id="password" placeholder='Enter Your Password' />
                                    </div>
                                    <div className="text-fields confirmpassword">
                                        <label htmlFor="confirmpassword"><i className='bx bx-lock' ></i></label>
                                        <input type="password" name="confirmpassword" id="confirmpassword" placeholder='Confirm Password' />
                                    </div>
                                </div>
                            </div>


                            <div className="stage3-content">
                                {/* Form content for stage 3 */}
                                <div className="button-container">
                                    <div className="text-fields city">
                                        <label htmlFor="city"><i className='bx bx-buildings bx-tada bx-flip-horizontal' ></i></label>
                                        <input type="text" name="city" id="city" placeholder='Enter Your City' />
                                    </div>
                                    <div className="text-fields blood">
                                        <label htmlFor="blood"><i className='bx bxs-donate-blood bx-tada bx-flip-horizontal' ></i></label>
                                        {/* <input type="text" name="blood" id="blood" placeholder='Enter Blood Group' /> */}
                                        <select className="custom-select" defaultValue="Your Blood Group">
                                            <option value="Your Blood Group">Your Blood Group</option>
                                            <option value="A+">A+</option>
                                            <option value="A-">A-</option>
                                            <option value="B+">B+</option>
                                            <option value="B-">B-</option>
                                            <option value="AB+">AB+</option>
                                            <option value="AB-">AB-</option>
                                            <option value="O+">O+</option>
                                            <option value="O-">O-</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="button-container">
                                    <div className="text-fields batch">
                                        <label htmlFor="batch"><i className='bx bx-buildings bx-tada bx-flip-horizontal' ></i></label>
                                        <input type="text" name="batch" id="batch" placeholder='Enter Your ' />
                                    </div>
                                </div>
                                <div className='text-center'>
                                    Your some information will be recorded for Blood donation program.
                                </div>
                                <div className="pagination-btns">
                                    <input type="submit" value="Submit" className="nextPage stagebtn3b"/>
                                    {/* <input type="submit" value="Submit" className="nextPage stagebtn3b" onClick={handleLoginClick} /> */}
                                    {/* <button type="submit" value="submit" className="nextPage">submit</button> */}
                                    {/* <button type="submit" className="nextPage stagebtn3b">Submit</button> */}
                                    {/* <button className="nextPage">submit</button> */}

                                </div>
                            </div>




                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Registration;