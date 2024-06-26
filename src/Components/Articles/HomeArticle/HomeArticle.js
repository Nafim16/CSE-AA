import React, { useEffect, useState } from 'react';
import './HomeArticle.css';

import job from '../../img/job.png';
import event from '../../img/loginarea.png';
import connect from '../../img/connect.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { Bounce, Fade } from 'react-awesome-reveal';

const HomeArticle = () => {
    // const isMediumToLarge = window.innerWidth >= 768;
    const axiosSecure = useAxiosSecure();
    const [article, setArticle] = useState([]);
    useEffect(() => {
        // fetch('http://localhost:5000/article')
        //     .then(res => res.json())
        axiosSecure.get('/article')
            .then(res => setArticle(res.data))
    }, [axiosSecure]);





    const [slidesPerView, setSlidesPerView] = useState(2);

    useEffect(() => {
        const handleResize = () => {
            setSlidesPerView(window.innerWidth >= 768 ? 4 : 2);
        };

        handleResize(); // Initial call to set initial state

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className='mt-3'>
            <Bounce>
                <Fade direction='up'>
                    <h1 className='fw-bold mt-5 mb-4'>Latest Articles</h1>
                </Fade>
            </Bounce>

            <Swiper
                slidesPerView={slidesPerView}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}

                modules={[Pagination, Autoplay]}
                className="mySwiper"
            >
                {article.map(article => (
                    <React.Fragment key={article._id}>
                        {article.approval === 'approved' && (
                            <SwiperSlide>
                                <Bounce>
                                    <div className='btn-light'>
                                        <div className="card text-white h-100 bg mb-3 p-3 shadow" style={{ height: '300px', overflow: 'hidden' }}>
                                            <img src={article.photoUrl} alt='' className='card-img-top image1 blog-img' />
                                            <div className="card-header text-primary text-truncate">{article.title}</div>
                                            <div className="card-body">
                                                <p className="card-text text-black" style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}
                                                    dangerouslySetInnerHTML={{ __html: article.details }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </Bounce>
                            </SwiperSlide>
                        )}
                    </React.Fragment>
                ))}

                <br />

            </Swiper>
        </div>
    );
};

export default HomeArticle;