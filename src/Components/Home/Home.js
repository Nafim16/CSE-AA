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
            <Fade direction='down' cascade damping={1}>
                <Login></Login>
            </Fade>

            <Fade direction='right' cascade damping={2}>
                <Event></Event>
            </Fade>


            <Fade direction='left' cascade damping={2}>
                <HomeArticle></HomeArticle>
            </Fade>


            <Fade direction='right' cascade damping={2}>
                <Whyjoinus></Whyjoinus>
            </Fade>


            <Fade direction='left' cascade damping={2}>
                <HomeStories></HomeStories>
            </Fade>


            <Fade direction='right' cascade damping={2}>
                <HomeJobs></HomeJobs>
            </Fade>


            <Footer></Footer>
        </div>
    );
};

export default Home;