import React from 'react';
import './About.css';
import Head from '../Head/Head';
import Footer from '../Footer/Footer';
import abir3 from '../img/abir3.png';
import nafim3 from '../img/nafim3.png';
import prbSir from '../img/prbSir.png';
import julfa from '../img/julfa.png'
import about from '../img/about.svg';



const About = () => {
    return (
        <div>
            <Head></Head>
            <div className='about-bg'>
                <div className='pt-5 mt-5'>
                    <div className='d-flex text-start px-5'>
                        <div className='fs-1 fw-bold text-body-secondary'>ABOUT US</div>
                    </div>
                    <hr />
                    <div className='d-flex justify-content-center'>
                        <div className='px-5 mx-5 w-75'>
                            <div className='row mb-5'>
                                <div className='col-md-7 col-lg-7 text-start'>
                                    <div className='fs-2 fw-bold mb-3'>Our Mission</div>
                                    <div>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>
                                </div>
                                <div className='col-md-5 col-lg-5'>
                                    <img src={about} alt="" className='img-fluid' />
                                </div>
                            </div>

                            <div className='row mb-5'>
                                <div className='col-md-5 col-lg-5'>
                                    <img src={about} alt="" className='img-fluid' />
                                </div>
                                <div className='col-md-7 col-lg-7 text-start'>
                                    <div className='fs-2 fw-bold mb-3'>Our Story</div>
                                    <div>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>
                                </div>
                            </div>

                            <div className='row'>
                                <div className='col-md-7 col-lg-7 text-start'>
                                    <div className='fs-2 fw-bold mb-3'>Our Objectives</div>
                                    <div>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>
                                </div>
                                <div className='col-md-5 col-lg-5'>
                                    <img src={about} alt="" className='img-fluid' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="wrapper">

                    <h1 className='abourH1'>Our Team</h1>

                    <div className="team">
                        <div className="row">
                            <div className="col-md-3 col-sm-6">
                                <div className="team_member">
                                    <div >
                                        <img src={prbSir} className='about_img' alt="" />
                                    </div>
                                    <h3>Prithwiraj Bhattacharjee</h3>
                                    <p className='role'>Advisor</p>
                                    <p >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum ut id ipsam error velit sed in voluptatem, pariatur hic autem consectetur laboriosam, quia earum, reprehenderit voluptatum minima vero! Odit, inventore.</p>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <div className="team_member">
                                    <div >
                                        <img src={abir3} className='about_img' alt="" />
                                    </div>
                                    <h3>Anayet Abir</h3>
                                    <p className='role'>Web Developer</p>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum ut id ipsam error velit sed in voluptatem, pariatur hic autem consectetur laboriosam, quia earum, reprehenderit voluptatum minima vero! Odit, inventore.</p>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <div className="team_member">
                                    <div >
                                        <img src={nafim3} className='about_img' alt="" />
                                    </div>
                                    <h3>Dewan Nafim</h3>
                                    <p className='role'>Web Developer</p>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum ut id ipsam error velit sed in voluptatem, pariatur hic autem consectetur laboriosam, quia earum, reprehenderit voluptatum minima vero! Odit, inventore.</p>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <div className="team_member">
                                    <div >
                                        <img src={julfa} className='about_img' alt="" />
                                    </div>
                                    <h3>Mafruda Julfa</h3>
                                    <p className='role'>Web Developer</p>
                                    <p >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum ut id ipsam error velit sed in voluptatem, pariatur hic autem consectetur laboriosam, quia earum, reprehenderit voluptatum minima vero! Odit, inventore.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div>

                </div>

            </div>

            <Footer></Footer>

        </div>
    );
};

export default About;