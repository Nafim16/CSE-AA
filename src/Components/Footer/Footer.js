import React from 'react';
import './Footer.css';
import payWith from '../img/payWith.png';


const Footer = () => {
    return (
        <div>
            <footer >
                {/* <h1 className='foot-h1'>Leading University Alumni</h1> */}


                <div className='footer_info' >
                    <div className="footer_width about">
                        <h2>About</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo natus labore harum quisquam accusantium facere eos non dolores aspernatur odio soluta animi, nobis veniam qui vero, iste enim doloribus nostrum?
                        </p>
                        <div className='social-media'>
                            <ul>
                                <li><a ><i className="fa-brands fa-facebook"></i></a></li>
                                <li><a ><i className="fa-brands fa-whatsapp"></i></a></li>
                                <li><a ><i className="fa-brands fa-instagram"></i></a></li>
                            </ul>

                        </div>

                    </div>

                    <div className="footer_width link">

                        <h2>Quick Link</h2>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Service</a></li>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>


                    </div>


                    <div className="footer_width contact">
                        <h2>Contact</h2>
                        <ul>
                            <li>
                                <span className='footer_icon1'><i className="fa-solid fa-location-dot"></i></span>
                                <p className=''>
                                    Leading University
                                    Ragibnagar, South Surma, <br /> Sylhet-3112
                                </p>

                            </li>
                            <li>
                                <span className='footer_icon2'><i className="fa-solid fa-envelope"></i></span>
                                <p className=''>
                                    Email: <a href="info@lus.ac.bd">info@lus.ac.bd</a>
                                </p>

                            </li>
                            <li>
                                <span className='footer_icon3'><i className="fa-solid fa-phone-volume"></i></span>
                                <p className='X'>
                                    Phone: 01313084499.
                                </p>

                            </li>
                        </ul>

                    </div>



                </div>



                <div>
                    <img src={payWith} className='footImg' alt="" />
                </div>

                {/* <div className="foot">
                    <a ><i className="fa-brands fa-facebook"></i></a>
                    <a ><i className="fa-brands fa-whatsapp"></i></a>
                    <a ><i className="fa-brands fa-instagram"></i></a>

                </div> */}

            </footer>



        </div>
    );
};

export default Footer;