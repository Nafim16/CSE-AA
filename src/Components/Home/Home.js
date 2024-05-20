import React, { useEffect } from 'react';
import Login from '../LoginArea/Login';

import Whyjoinus from '../Whyjoinus/Whyjoinus';
import Footer from '../Footer/Footer';
import Head from '../Head/Head';
import { useNavigate } from 'react-router-dom';
import Event from '../Carouse_event/Event';
import HomeStories from '../Stories/HomeStories/HomeStories';
import HomeArticle from '../Articles/HomeArticle/HomeArticle';
import HomeJobs from '../Job/HomeJobs/HomeJobs';
import { Fade } from 'react-awesome-reveal';


const Home = () => {

    // const navigate = useNavigate();
    // navigate('/');



    return (
        <div>

            <Head></Head>

            <Login></Login>



            <Event></Event>




            <HomeArticle></HomeArticle>



            {/* <Fade direction='right' cascade damping={2}>
                <Whyjoinus></Whyjoinus>
            </Fade> */}



            <div className='bg-contact'>
                <Whyjoinus></Whyjoinus>
                <HomeStories></HomeStories>

                <HomeJobs></HomeJobs>
            </div>



            <Footer></Footer>
        </div>
    );
};

export default Home;