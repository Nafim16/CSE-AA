import React, { useContext, useEffect, useState } from 'react';
import './Articles.css';
import error from '../img/error.gif';
import Head from '../Head/Head';
import Footer from '../Footer/Footer';
import news from '../img/loginarea.png';
import ArticleCreate from './ArticleCreate';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Context/UserContext';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import useUser from '../../hooks/useUser';


const Articles = () => {

    const axiosSecure = useAxiosSecure();


    const { user } = useContext(AuthContext);
    // const article = useLoaderData();

    const [articles, setArticles] = useState([]);
    useEffect(() => {
        axiosSecure.get('/article')
            .then(res => setArticles(res.data))

    }, [axiosSecure])




    // const [userData, setUserData] = useState([]);
    // useEffect(() => {
    //     fetch('http://localhost:5000/user')
    //         .then(res => res.json())
    //         .then(data => setUserData(data))

    // }, [])
    const userData = useUser();


    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                //   Swal.fire({
                //     title: "Deleted!",
                //     text: "Your Article has been deleted.",
                //     icon: "success"
                //   });
                // fetch(`http://localhost:5000/article/${_id}`, {
                //     method: 'DELETE'
                // })
                //     .then(res => res.json())
                axiosSecure.delete(`/article/${_id}`)
                    .then(res => {
                        console.log(res.data);
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Article has been deleted.",
                                icon: "success"
                            })
                            const remaining = articles.filter(art => art._id !== _id);
                            setArticles(remaining);
                        }
                    })

            }
        });

    }

    return (
        <div>
            <Head></Head>
            {(user) ? <>
                <ArticleCreate></ArticleCreate>
            </> : <></>}

            <section className="blog">
                {/* Heading */}
                <div className="blog-heading">
                    <span>Alumni Association</span>
                    <h3>Articles</h3>
                </div>

                {/* <h1>Total Article: {article.length}</h1> */}


                {/* blog-container */}
                <div className="blog-container">
                    {/* box-1 */}
                    {articles.map(article =>

                        <div key={article._id}>
                            {article.approval === 'approved' && <>
                                <div className="blog-box shadow">
                                    {/* image */}
                                    <div className="blog-img">
                                        <img src={article.photoUrl} alt="" />
                                    </div>
                                    {/* menu */}
                                    {(user) ? <>
                                        {((user.uid === article.uid) || userData.find(userDoc => userDoc.uid === user.uid && (userDoc.role === 'superAdmin' || userDoc.role === 'admin'))) && (
                                            <>
                                                <div className="d-flex justify-content-end mt-1 ">
                                                    <a href="#!" id="triggerId" data-toggle="dropdown" aria-haspopup="true"
                                                        aria-expanded="false">
                                                        <div className='icon-art'>
                                                            <i className='fa-solid fa-ellipsis-vertical dark ' aria-hidden="true"></i>
                                                        </div>
                                                        {/* <FontAwesomeIcon icon="fa-solid fa-ellipsis-vertical" /> */}
                                                    </a>

                                                    <div className="dropdown-menu dropdown-menu-right " aria-labelledby='triggerId'>

                                                        <Link to={`/ArticleUpdate/${article._id}`}>
                                                            <button className="dropdown-item text-danger">Update
                                                                <i className='bx bx-edit'></i>
                                                            </button>
                                                        </Link>
                                                        <button onClick={() => handleDelete(article._id)} className="dropdown-item text-danger">Delete
                                                            <i className='bx bxs-trash'></i>
                                                        </button>

                                                    </div>

                                                </div>
                                            </>
                                        )}
                                    </> : <></>}
                                    {/*Text */}
                                    <div className="blog-text">
                                        <span>{article.createdAt}</span>
                                        <div class="article-tooltip-container">
                                            <div className='blog-title text-truncate'>

                                                <span class="article-tooltip-text"><b>{article.title}</b></span>
                                                <span class="article-tooltip">{article.title}</span>


                                            </div>
                                        </div>
                                        <p style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}
                                            dangerouslySetInnerHTML={{ __html: article.details }}
                                        />
                                        {/* <a href="" onClick={()=> handleReadMode(article._id)}>Read More</a> */}
                                        {/* <button onClick={() => handleReadMode(article._id)} className='nextPage mx-auto'>Read More</button> */}
                                        <Link className='btn' to={`/readarticledetails/${article._id}`}>
                                            <button className='nextPage mx-auto'>Read More</button>
                                        </Link>
                                    </div>
                                </div>
                            </>}
                        </div>

                    )}
                </div>

            </section>






            <Footer></Footer>
        </div>
    );
};

export default Articles;