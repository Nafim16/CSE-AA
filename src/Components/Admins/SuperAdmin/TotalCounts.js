import React, { useEffect, useState } from 'react';

const TotalCounts = () => {


    const [user, setUser] = useState([]);
    const [news, setNews] = useState([]);
    const [article, setArticle] = useState([]);
    const [stories, setStories] = useState([]);
    const [job, setJob] = useState([]);
    const [events, setEvents] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/article')
            .then(res => res.json())
            .then(data => setArticle(data))
    }, []);

    useEffect(() => {
        fetch('http://localhost:5000/event')
            .then(res => res.json())
            .then(data => setEvents(data))
    }, []);
    useEffect(() => {
        fetch('http://localhost:5000/job')
            .then(res => res.json())
            .then(data => setJob(data))
    }, []);
    useEffect(() => {
        fetch('http://localhost:5000/news')
            .then(res => res.json())
            .then(data => setNews(data))
    }, []);
    useEffect(() => {
        fetch('http://localhost:5000/story')
            .then(res => res.json())
            .then(data => setStories(data))
    }, []);
    useEffect(() => {
        fetch('http://localhost:5000/user')
            .then(res => res.json())
            .then(data => setUser(data))
    }, []);



    return (
        <div className=''>
            <div className='d-flex justify-content-center'>
                <div className='row g-5 cards-body-up'>
                    <div className='col-md-4 col-sm-6 cards-body-low'>
                        <div class="card h-100 custom-card-body-b">
                            <div class="card-body">
                                <h5 class="card-title">Registered User</h5>
                                <p class="card-text">Total: {user.length}</p>

                            </div>
                        </div>
                    </div>
                    <div className='col-md-4 col-sm-6 cards-body-low'>
                        <div class="card h-100  custom-card-body-p">
                            <div class="card-body">
                                <h5 class="card-title">News</h5>
                                <p class="card-text">Total: {news.length}</p>

                            </div>
                        </div>
                    </div>
                    <div className='col-md-4 col-sm-6 cards-body-low'>
                        <div class="card h-100 custom-card-body-b">
                            <div class="card-body">
                                <h5 class="card-title">Article</h5>
                                <p class="card-text">Total: {article.length}</p>

                            </div>
                        </div>
                    </div>
                    <div className='col-md-4 col-sm-6 cards-body-low'>
                        <div class="card h-100 custom-card-body-p">
                            <div class="card-body">
                                <h5 class="card-title">Stories</h5>
                                <p class="card-text">Total: {stories.length}</p>

                            </div>
                        </div>
                    </div>
                    <div className='col-md-4 col-sm-6 cards-body-low'>
                        <div class="card h-100 custom-card-body-b">
                            <div class="card-body">
                                <h5 class="card-title">Job Post</h5>
                                <p class="card-text">Total: {job.length}</p>

                            </div>
                        </div>
                    </div>
                    <div className='col-md-4 col-sm-6 cards-body-low'>
                        <div class="card h-100 custom-card-body-p">
                            <div class="card-body">
                                <h5 class="card-title">Event</h5>
                                <p class="card-text">Total: {events.length}</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default TotalCounts;