import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './LogReg.css';
import Head from '../Head/Head';
import { AuthContext } from '../../Context/UserContext';
const Login = () => {

    const navigate = useNavigate();

    const handleRegisterClick = () => {
        navigate("/registration");
    };

    const handleLoginClick = () => {
        navigate("/");
    };


    const { signIn, signInWithGoogle } = useContext(AuthContext);




    const handleFormSubmitLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log("SUBMITTED", email, password);

        handleLoginClick();

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                form.reset();
            })
            .catch(error => {
                console.log(error);
            })
    };

    const handleGoogleSignIn = () => {
        signInWithGoogle()
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
        })
        .catch(error => {
            console.log(error);
        })
    }


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
                        <input type="button" value="Register Now" className="loginbtn" onClick={handleRegisterClick} />
                    </div>
                    <form onSubmit={handleFormSubmitLogin} className="signup-form-container">
                        <p className="big-heading">Login To Your Account</p>
                        <div className="social-media-platform">
                            <a href="#" onClick={handleGoogleSignIn}><i className='bx bx-sm bxl-google'></i></a>
                            <a href="#"><i className='bx bx-sm bxl-twitter'></i></a>
                            <a href="#"><i className='bx bx-sm bxl-github'></i></a>
                        </div>
                        <div className="login-form-contents">
                            <div className="text-fields email">
                                <label htmlFor="email"><i className='bx bx-envelope'></i></label>
                                <input type="email" name="email" id="email" placeholder='Enter Your Email ID ' />
                            </div>
                            <div className="text-fields password">
                                <label htmlFor="password"><i className='bx bx-lock' ></i></label>
                                <input type="password" name="password" id="password" placeholder='Enter Your Password' />
                            </div>
                            <input type="submit" value="login" className="nextPage"/>
                            

                        </div>

                    </form>

                </div>
            </div>
        </div>
    );
};

export default Login;