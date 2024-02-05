import React from 'react';
import Login from '../LoginArea/Login';

import Whyjoinus from '../Whyjoinus/Whyjoinus';
import Footer from '../Footer/Footer';
import Head from '../Head/Head';
import { useNavigate } from 'react-router-dom';
import Event from '../Carouse_event/Event';
import HomeStories from '../Stories/HomeStories/HomeStories';
import HomeArticle from '../Articles/HomeArticle/HomeArticle';

const Home = () => {

    // const navigate = useNavigate();
    // navigate('/');

    return (
        <div>
            <Head></Head>
            <Login></Login>
            <Event></Event>
            <Whyjoinus></Whyjoinus>
            <HomeStories></HomeStories>
            <HomeArticle></HomeArticle>
            <Footer></Footer>
            {/* <Head></Head>
      <Login></Login>
      <Whyjoinus></Whyjoinus>
      <Footer></Footer> */}
        </div>
    );
};

export default Home;