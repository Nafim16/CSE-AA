import React from 'react';
import "./Head.css"

const head = () => {
    return (

        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark nav-b">
                <a className="navbar-brand" href="#">Lu Alumni</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Businesses</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Job-Opportunity</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Articles</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">News</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Stories</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Committee</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default head;