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
                            {/* <a className="nav-link" href="#">Businesses</a> */}
                            <Link to={'/businesses'} className="nav-link">Businesses</Link>
                        </li>
                        <li className="nav-item">
                            {/* <a className="nav-link" href="#">Job-Opportunity</a> */}
                            <Link to={'/job'} className="nav-link">Job-Opportunity</Link>
                        </li>
                        <li className="nav-item">
                            {/* <a className="nav-link" href="#">Articles</a> */}
                            <Link to={'/articles'} className="nav-link">Articles</Link>
                        </li>
                        <li className="nav-item">
                            {/* <a className="nav-link" href="/news">News</a> */}
                            <Link to={'/news'} className="nav-link">News</Link>
                        </li>
                        <li className="nav-item">
                            {/* <a className="nav-link" href="#">Stories</a> */}
                            <Link to={'/stories'} className="nav-link">Stories</Link>
                        </li>
                        <li className="nav-item">
                            {/* <a className="nav-link" href="#">Committee</a> */}
                            <Link to={'/committee'} className="nav-link">Committee</Link>
                        </li>
                        <li className="nav-item">
                            {/* <a className="nav-link" href="#">About</a> */}
                            <Link to={'/about'} className="nav-link">About</Link>
                        </li>
                        <li className="nav-item">
                            {/* <a className="nav-link" href="#">Contact</a> */}
                            <Link to={'/contact'} className="nav-link">Contact</Link>
                        </li>
                        {user && <li className="nav-item">
                            {/* <a className="nav-link" href="#">Profile</a> */}
                            <Link to={'/profile'} className="nav-link">Profile</Link>
                        </li>}
                    </ul>

                    <div className="ms-auto mx-4 ">
                    {
                        user ? <>
                            <span className="navbar-text">{user.displayName}</span>
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