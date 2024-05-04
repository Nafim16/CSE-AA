import React, { useContext } from 'react';
import './emailVerification.css';
import { AuthContext } from '../../Context/UserContext';
import { sendEmailVerification } from 'firebase/auth';

const VerifiedMail = () => {

    const { user } = useContext(AuthContext);
    
    const sendVerificationEmail = (user) => {
        sendEmailVerification(user)
            .then(result => {
                console.log(result);
                alert('Please verify your email address');
            })
            .catch(error => {
                console.log(error);
            })
    };

    const handleResendVerification = () => {
        sendVerificationEmail(user);
    };


    return (
        <div className='pt-5 mt-5'>
            <div className='d-flex justify-content-center'>
                <div className="emailVerify-card">
                    <span className="emailVerify-title">System Message</span>
                    <div className="emailVerify-comments">
                        <div className="emailVerify-comment-react">
                        </div>
                        <div className="emailVerify-comment-container">
                            <div className="emailVerify-user d-flex align-items-center">
                                <div className="emailVerify-user-pic">
                                    <svg fill="none" viewBox="0 0 24 24" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linejoin="round" fill="#707277" stroke-linecap="round" stroke-width="2" stroke="#707277" d="M6.57757 15.4816C5.1628 16.324 1.45336 18.0441 3.71266 20.1966C4.81631 21.248 6.04549 22 7.59087 22H16.4091C17.9545 22 19.1837 21.248 20.2873 20.1966C22.5466 18.0441 18.8372 16.324 17.4224 15.4816C14.1048 13.5061 9.89519 13.5061 6.57757 15.4816Z"></path>
                                        <path stroke-width="2" fill="#707277" stroke="#707277" d="M16.5 6.5C16.5 8.98528 14.4853 11 12 11C9.51472 11 7.5 8.98528 7.5 6.5C7.5 4.01472 9.51472 2 12 2C14.4853 2 16.5 4.01472 16.5 6.5Z"></path>
                                    </svg>
                                </div>
                                <div className="emailVerify-user-info">
                                    <span className='fs-2 fw-semibold'>System Admin</span>
                                    {/* <p className='fs-6'>{}</p> */}
                                </div>
                            </div>
                            <p className="emailVerify-comment-content">
                                PLEASE VERIFY YOUR EMAIL FIRST!!!
                                If you haven't received it, you can click <button onClick={handleResendVerification}>here</button> to resend.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default VerifiedMail;