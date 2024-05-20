import React, { useContext, useEffect, useState } from 'react';
import sohidminar3 from '../../img/shohidMinar3.jpg';

import './HomeStories.css';


import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';


// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { Bounce, Fade } from 'react-awesome-reveal';

const HomeStories = () => {

    const axiosSecure = useAxiosSecure();

    const [stories, setStories] = useState([]);
    useEffect(() => {
        // fetch('http://localhost:5000/story')
        //     .then(res => res.json())
        axiosSecure.get('/story')
            .then(res => setStories(res.data))
    }, [axiosSecure]);



    return (
        <div>
            <Bounce>
                <Fade direction='down'>
                    <h1 className='fw-bold mt-5 mb-4'>Stories</h1>
                </Fade>
            </Bounce>


            <div>
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    modules={[EffectCoverflow, Pagination, Autoplay]}
                    className="mySwiper"

                >
                    {stories.map(story => (
                        <SwiperSlide key={story._id} className='stories-slide-content' style={{ width: '500px', height: '550px' }}>
                            <img src={story.photo} className='img-fluid stories-slide-image' />
                            <Bounce>
                                <h2>{story.title}</h2>
                            </Bounce>
                        </SwiperSlide>

                    ))}


                </Swiper>
            </div>




        </div>
    );
};

export default HomeStories;