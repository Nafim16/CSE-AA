import React, { useContext } from 'react';
import './Head.css'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';

const Head = () => {


    const { user, logOut } = useContext(AuthContext);
    // console.log(user);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark nb">
                {/* <a className="navbar-brand" href="#">CSE-AA-LU</a> */}
                <Link to={'/'} className="navbar-brand mx-3">CSE-AA-LU</Link>
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
                            {/* <a className="nav-link" href="/news">News</a> */}
                            <Link to={'/news'} className="nav-link">News</Link>
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
                        {user && <li className="nav-item">
                            <a className="nav-link" href="#">Profile</a>
                        </li>}
                    </ul>

                    <div className="ms-auto mx-4">
                    {
                        user ? <>
                            <span className="navbar-text">{user.email}</span>
                            <button onClick={handleLogOut} className="btn btn-outline-danger mx-2" type="submit">Logout</button>
                        </> : <Link to="/login"><button className="btn btn-outline-success mx-5" type="submit">Login</button></Link>
                    }
                    </div>

                </div>
            </nav>
        </div>
    );
};

export default Head;