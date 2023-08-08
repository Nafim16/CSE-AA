// import React from 'react';
// import loginarea from '../img/loginarea.png'
// import sohidminar3 from '../img/shohidMinar3.jpg'

// const Event = () => {
//     return (
//         <div>

//             <div className='p-5 m-5 w-75 mx-auto'>



//                 <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
//                     <div className="carousel-indicators">
//                         <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
//                         <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
//                         <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
//                     </div>
//                     <div className="carousel-inner">
//                         <div className="carousel-item active" data-bs-interval="5000">
//                             <img src={loginarea} className="d-block w-100 img-fluid rounded" alt="..." />
//                             <div className="carousel-caption d-none d-md-block d-sm-block">
//                                 <h5>First slide label</h5>
//                                 <p>Some representative placeholder content for the first slide.</p>
//                             </div>
//                         </div>
//                         <div className="carousel-item" data-bs-interval="5000">
//                             <img src={sohidminar3} className="d-block w-100 img-fluid rounded" alt="..." />
//                             <div className="carousel-caption d-none d-md-block d-sm-block">
//                                 <h5>Second slide label</h5>
//                                 <p>Some representative placeholder content for the second slide.</p>
//                             </div>
//                         </div>
//                         <div className="carousel-item" data-bs-interval="5000">
//                             <img src={loginarea} className="d-block w-100 img-fluid rounded" alt="..." />
//                             <div className="carousel-caption d-none d-md-block d-sm-block">
//                                 <h5>Third slide label</h5>
//                                 <p>Some representative placeholder content for the third slide.</p>
//                             </div>
//                         </div>
//                     </div>
//                     <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
//                         <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//                         <span className="visually-hidden">Previous</span>
//                     </button>
//                     <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
//                         <span className="carousel-control-next-icon" aria-hidden="true"></span>
//                         <span className="visually-hidden">Next</span>
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Event;


import React from 'react';
import './Event.css';
import loginarea from '../img/loginarea.png'
import sohidminar3 from '../img/shohidMinar3.jpg'

const Event = () => {
    return (
        <div className='event'>

            <div className='p-5 m-5 w-100 mx-auto'>



                <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">

                        {/* 1st One */}
                        <div className="carousel-item active" data-bs-interval="5000">

                            <div className="container">

                                <div className="box-container">
                                    <div className="box">
                                        <div className="image">
                                            <img src={sohidminar3} className="img1" alt="..." />
                                        </div>
                                        <div className="content transition">
                                            <h3>Event title</h3>
                                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint, nulla facilis. Similique voluptate delectus voluptatem molestias possimus culpa fuga sint ea, nulla nam debitis eligendi neque quisquam repudiandae aspernatur eum.</p>
                                            <a href="" className='btn'>read more</a>
                                            <div className="icons">
                                                <span><i className="fa-solid fa-calendar-days"></i>21st may,2022</span>
                                                <span><i className="fa-solid fa-user"></i>by-admin</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="box">
                                        <div className="image transition">
                                            <img src={sohidminar3} className="img1" alt="..." />
                                        </div>
                                        <div className="content">
                                            <h3>Event title</h3>
                                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint, nulla facilis. Similique voluptate delectus voluptatem molestias possimus culpa fuga sint ea, nulla nam debitis eligendi neque quisquam repudiandae aspernatur eum.</p>
                                            <a href="" className='btn'>read more</a>
                                            <div className="icons">
                                                <span><i className="fa-solid fa-calendar-days"></i>21st may,2022</span>
                                                <span><i className="fa-solid fa-user"></i>by-admin</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>

                        {/* 1st one done */}


                        {/* 2nd one */}
                        <div className="carousel-item active" data-bs-interval="5000">

                            <div className="container">

                                <div className="box-container">
                                    <div className="box">
                                        <div className="image transition">
                                            <img src={sohidminar3} className="img1" alt="..." />
                                        </div>
                                        <div className="content">
                                            <h3>Event title</h3>
                                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint, nulla facilis. Similique voluptate delectus voluptatem molestias possimus culpa fuga sint ea, nulla nam debitis eligendi neque quisquam repudiandae aspernatur eum.</p>
                                            <a href="" className='btn'>read more</a>
                                            <div className="icons">
                                                <span><i className="fa-solid fa-calendar-days"></i>21st may,2022</span>
                                                <span><i className="fa-solid fa-user"></i>by-admin</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="box">
                                        <div className="image transition">
                                            <img src={sohidminar3} className="img1" alt="..." />
                                        </div>
                                        <div className="content">
                                            <h3>Event title</h3>
                                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint, nulla facilis. Similique voluptate delectus voluptatem molestias possimus culpa fuga sint ea, nulla nam debitis eligendi neque quisquam repudiandae aspernatur eum.</p>
                                            <a href="" className='btn'>read more</a>
                                            <div className="icons">
                                                <span><i className="fa-solid fa-calendar-days"></i>21st may,2022</span>
                                                <span><i className="fa-solid fa-user"></i>by-admin</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>

                        {/* 2nd Onr Done" */}


                        {/* 3rd One */}
                        <div className="carousel-item active" data-bs-interval="5000">

                            <div className="container">

                                <div className="box-container">
                                    <div className="box">
                                        <div className="image transition">
                                            <img src={sohidminar3} className="img1" alt="..." />
                                        </div>
                                        <div className="content">
                                            <h3>Event title</h3>
                                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint, nulla facilis. Similique voluptate delectus voluptatem molestias possimus culpa fuga sint ea, nulla nam debitis eligendi neque quisquam repudiandae aspernatur eum.</p>
                                            <a href="" className='btn'>read more</a>
                                            <div className="icons">
                                                <span><i className="fa-solid fa-calendar-days"></i>21st may,2022</span>
                                                <span><i className="fa-solid fa-user"></i>by-admin</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="box">
                                        <div className="image transition">
                                            <img src={sohidminar3} className="img1" alt="..." />
                                        </div>
                                        <div className="content">
                                            <h3>Event title</h3>
                                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint, nulla facilis. Similique voluptate delectus voluptatem molestias possimus culpa fuga sint ea, nulla nam debitis eligendi neque quisquam repudiandae aspernatur eum.</p>
                                            <a href="" className='btn'>read more</a>
                                            <div className="icons">
                                                <span><i className="fa-solid fa-calendar-days"></i>21st may,2022</span>
                                                <span><i className="fa-solid fa-user"></i>by-admin</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                        {/* 3rd one done */}


                    </div>





                    <button className="carousel-control-prev c-b" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next c-b" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Event;