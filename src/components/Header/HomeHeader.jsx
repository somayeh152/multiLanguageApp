import React from 'react';
import './sass/header.css';
import { Link } from 'react-router-dom';

const HomeHeader = () => {
    return (
        <header>                
            <div className="header" id="header">
                <div id="leftSec">
                    <nav className="navbar navbar-expand-sm navbar-light leftNavBar">
                        <div className="d-flex align-items-center">
                            <Link to="/" className="navbar-brand">Blinkist</Link>
                        </div>
                    </nav>
                </div>
                <div id="rightSec">
                    <div className="d-flex homeMenu">
                        <Link to="#" className="login" data-toggle="modal" data-target="#loginBox">Log in</Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default HomeHeader;