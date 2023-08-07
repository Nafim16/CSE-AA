import React from 'react';
import './Articles.css';
import error from '../img/error.gif';
import Head from '../Head/Head';
import Footer from '../Footer/Footer';
import news from '../img/loginarea.png';


const Articles = () => {
    return (
        <div>
            <Head></Head>

            <section className="blog">

                {/* Heading */}
                <div className="blog-heading">
                    <span>Leading University</span>
                    <h3>Articles</h3>
                </div>

                {/* blog-container */}
                <div className="blog-container">


                    {/* box-1 */}
                    <div className="blog-box">

                        {/* image */}
                        <div className="blog-img">
                            <img src={news} alt="" />
                        </div>

                        {/*Text */}
                        <div className="blog-text">
                            <span>4 Auguest 2023/Web Design</span>
                            <a href="" className='blog-title'>What Has Happened of All of the web design ideas?</a>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad molestiae dolores dicta, repellat dolorum adipisci exercitationem veniam corrupti qui laudantium maxime aliquid, autem ratione et voluptatibus? Voluptate, sunt consectetur. Reprehenderit.</p>
                            <a href="">Read More</a>
                        </div>


                    </div>


                    {/* box-2 */}
                    <div className="blog-box">

                        {/* image */}
                        <div className="blog-img">
                            <img src={news} alt="" />
                        </div>

                        {/*Text */}
                        <div className="blog-text">
                            <span>4 Auguest 2023/Web Design</span>
                            <a href="" className='blog-title'>What Has Happened of All of the web design ideas?</a>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad molestiae dolores dicta, repellat dolorum adipisci exercitationem veniam corrupti qui laudantium maxime aliquid, autem ratione et voluptatibus? Voluptate, sunt consectetur. Reprehenderit.</p>
                            <a href="">Read More</a>
                        </div>


                    </div>


                    {/* box-3 */}
                    <div className="blog-box">

                        {/* image */}
                        <div className="blog-img">
                            <img src={news} alt="" />
                        </div>

                        {/*Text */}
                        <div className="blog-text">
                            <span>4 Auguest 2023/Web Design</span>
                            <a href="" className='blog-title'>What Has Happened of All of the web design ideas?</a>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad molestiae dolores dicta, repellat dolorum adipisci exercitationem veniam corrupti qui laudantium maxime aliquid, autem ratione et voluptatibus? Voluptate, sunt consectetur. Reprehenderit.</p>
                            <a href="">Read More</a>
                        </div>


                    </div>



                    <div className="blog-box">

                        {/* image */}
                        <div className="blog-img">
                            <img src={news} alt="" />
                        </div>

                        {/*Text */}
                        <div className="blog-text">
                            <span>4 Auguest 2023/Web Design</span>
                            <a href="" className='blog-title'>What Has Happened of All of the web design ideas?</a>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad molestiae dolores dicta, repellat dolorum adipisci exercitationem veniam corrupti qui laudantium maxime aliquid, autem ratione et voluptatibus? Voluptate, sunt consectetur. Reprehenderit.</p>
                            <a href="">Read More</a>
                        </div>


                    </div>









                </div>

            </section>












            <Footer></Footer>
        </div>
    );
};

export default Articles;