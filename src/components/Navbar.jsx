import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';

const Navbar = () => {
    const [showPopup, setShowPopup] = useState(false);

    const togglePopup = () => {
        setShowPopup(!showPopup);
    }

    return (
        <nav className="navbar">
            <div className="container">
                <div className="logo">Quiz App</div>
                <div className="menu">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/about" className="nav-link">About</Link>
                    <Link to="/contact" className="nav-link">Contact Us</Link>
                    <Link to='/quiz-dashboard' >Quizs</Link>
                    <span className="nav-link" onClick={togglePopup}>Contest</span>
                    <span className="nav-link" onClick={togglePopup}>Category</span>
                </div>
            </div>

            {showPopup && (
                <div className="popup-container" id="popup">
                    <div className="popup-content">
                        <h2>Select Category</h2>
                        <ul>
                            <li><Link to={"#"}>Category 1</Link></li>
                            <li><Link to={"#"}>Category 2</Link></li>
                            <li><Link to={"#"}>Category 3</Link></li>
                        </ul>
                        <button onClick={togglePopup}>Close</button>
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
