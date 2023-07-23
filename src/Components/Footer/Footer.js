import React from 'react';
import './Footer.css';


const Footer = () => {
    return (
        <div>
            <footer>
                <h1 className='foot-h1'>Leading University Alumni</h1>

                <h4 className='foot-h4'>Ground Floor - Leading University Information Center <br />

                    Phone: President - 017333577217; <br /> General Secretary - 01819311815 <br />

                    Other Contacts: 01312181166, 01842181166 <br />

                    Technical Support: 01742834880 <br />

                    Email: <a href="https://www.lus.ac.bd" >https://www.lus.ac.bd</a></h4>

                <div class="foot">
                    <a ><i class="fa-brands fa-facebook"></i></a>
                    <a ><i class="fa-brands fa-whatsapp"></i></a>
                    <a ><i class="fa-brands fa-instagram"></i></a>

                </div>

            </footer>

        </div>
    );
};

export default Footer;