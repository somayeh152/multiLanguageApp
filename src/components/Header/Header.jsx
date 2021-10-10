import React from 'react';
import './sass/header.css';
// import './sass-fa/header-fa.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <React.Fragment>
            <header>                
                <div className="header" id="header">
                    <div id="leftSec">
                        <nav className="navbar navbar-expand-sm navbar-light leftNavBar" style={{ left: '-1rem' }}>
                            <div className="d-flex align-items-center">
                                <Link className="navbar-brand" to="/">Blinkist</Link>
                                {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#topMenu" aria-controls="topMenu" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button> */}
                                <li className="nav-item search">
                                    <a href="">
                                        <i className="fa fa-search" aria-hidden="true"></i>
                                    </a>
                                    {/* add */}
                                    <div className="search-field">
                                        <input type="text" placeholder="Search for titles and authors" className="search-input" /> 
                                        <button className="search-close">
                                            {/* <svg viewBox="0 0 24 24" className="search__close-sprite sprite-vue sprite-vue--app sprite-vue--close">
                                            </svg> */}
                                        </button>
                                    </div>
                                </li>
                            </div>
                            <div className="collapse navbar-collapse" id="topMenu">
                                <ul className="navbar-nav">
                                    <div className="menuHolder" style={{display: 'flex'}}> 
                                        <li id="exploreLi" className="nav-item dropdown exploreLi thirdStepInMain">
                                            <Link to='#' className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Explore
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/library" className="nav-link secondStepInMain" href="#">My Library</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/highlight" className="nav-link firstStepInMain" href="#">Highlights</Link>
                                        </li>
                                    </div>
                                </ul>
                            </div>
                        </nav>
                    </div>
                    <div id="rightSec" >
                        <div className="dropdown">
                            <a className="dropdown-toggle d-flex align-items-baseline" id="accountMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Account
                                <i className="fa fa-chevron-down ml-1" aria-hidden="true"></i>
                            </a>
                            <div className="dropdown-menu" aria-labelledby="accountMenu">
                                <Link to="/books" className="dropdown-item inMainMenu thirdStep" href="#">Explore</Link>
                                <Link to="/library"  className="dropdown-item inMainMenu secondStep" href="#">My Library</Link>
                                <Link to="/highlight"  className="dropdown-item inMainMenu firstStep" href="#">Highlights</Link>
                                <Link to="/invite-friends" className="dropdown-item" href="#">Invite Freinds</Link>
                                <Link to="/wishlist" className="dropdown-item" href="#">Wishlist</Link>
                                <Link to="/setting" className="dropdown-item" href="#">Setting</Link>
                                {/* <Link to="#" className="dropdown-item" href="#">Help and Support</Link> */}
                                <Link to="#" className="dropdown-item" href="#">Logout</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {/* <div className="dropdown-menuuuu subExplore" id="subExplore" aria-labelledby="navbarDropdownMenuLink" >
                <div>
                    <div className="discover-header d-flex">
                        <h3 className="headline">Explore by category</h3> 
                        <ul className="discover-headerlinks d-flex">
                            <li className="discover-headerlinks-item">
                                <a href="#" className="discover-menu__header-link">See recently added titles</a>
                            </li>
                            <li className="discover-headerlinks-item">
                                <a href="#" className="discover-menu__header-link">See popular titles</a>
                            </li>
                        </ul>
                    </div>
                    <ul className="categoryHolder row">
                        <li className="categoryItem col-lg-4 col-md-6 ol-sm-12">
                            <a href="#" className="categoryLink">
                                <i className="fa fa-flask" aria-hidden="true"></i>
                                <span className="categoryLabel">Entrepreneurship</span>
                            </a>    
                        </li>
                        <li className="categoryItem col-lg-4 col-md-6 col-md-6 col-sm-12">
                            <a href="#" className="categoryLink">
                                <i className="fa fa-flask" aria-hidden="true"></i>
                                <span className="categoryLabel">Politics</span>
                            </a>
                        </li>
                        <li className="categoryItem col-lg-4 col-md-6 col-md-6 col-sm-12">
                            <a href="#" className="categoryLink">
                                <i className="fa fa-flask" aria-hidden="true"></i>
                                <span className="categoryLabel">Marketing & Sales</span>
                            </a>
                        </li>
                        <li className="categoryItem col-lg-4 col-md-6 col-md-6 col-sm-12">
                            <a href="#" className="categoryLink">
                                <i className="fa fa-flask" aria-hidden="true"></i>
                                <span className="categoryLabel">Science</span>
                            </a>
                        </li>
                        <li className="categoryItem col-lg-4 col-md-6 col-sm-12">
                            <a href="#" className="categoryLink">
                                <i className="fa fa-flask" aria-hidden="true"></i>
                                <span className="categoryLabel">Health & Nutrition</span>
                            </a>
                        </li>
                        <li className="categoryItem col-lg-4 col-md-6 col-sm-12">
                            <a href="#" className="categoryLink">
                                <i className="fa fa-flask" aria-hidden="true"></i>
                                <span className="categoryLabel">Personal Development</span>
                            </a>
                        </li>
                        <li className="categoryItem col-lg-4 col-md-6 col-sm-12">
                            <a href="#" className="categoryLink">
                                <i className="fa fa-flask" aria-hidden="true"></i>
                                <span className="categoryLabel">Economics</span>
                            </a>
                        </li>
                        <li className="categoryItem col-lg-4 col-md-6 col-sm-12">
                            <a href="#" className="categoryLink">
                                <i className="fa fa-flask" aria-hidden="true"></i>
                                <span className="categoryLabel">History</span>
                            </a>
                        </li>
                        <li className="categoryItem col-lg-4 col-md-6 col-sm-12">
                            <a href="#" className="categoryLink">
                                <i className="fa fa-flask" aria-hidden="true"></i>
                                <span className="categoryLabel">Communication Skills</span>
                            </a>
                        </li>
                        <li className="categoryItem col-lg-4 col-md-6 col-sm-12">
                            <a href="#" className="categoryLink">
                                <i className="fa fa-flask" aria-hidden="true"></i>
                                <span className="categoryLabel">Entrepreneurship</span>
                            </a>
                        </li>
                        <li className="categoryItem col-lg-4 col-md-6 col-sm-12">
                            <a href="#" className="categoryLink">
                                <i className="fa fa-flask" aria-hidden="true"></i>
                                <span className="categoryLabel">Politics</span>
                            </a>
                        </li>
                        <li className="categoryItem col-lg-4 col-md-6 col-sm-12">
                            <a href="#" className="categoryLink">
                                <i className="fa fa-flask" aria-hidden="true"></i>
                                <span className="categoryLabel">Marketing & Sales</span>
                            </a>
                        </li>
                        <li className="categoryItem col-lg-4 col-md-6 col-sm-12">
                            <a href="#" className="categoryLink">
                                <i className="fa fa-flask" aria-hidden="true"></i>
                                <span className="categoryLabel">Science</span>
                            </a>
                        </li>
                        <li className="categoryItem col-lg-4 col-md-6 col-sm-12">
                            <a href="#" className="categoryLink">
                                <i className="fa fa-flask" aria-hidden="true"></i>
                                <span className="categoryLabel">Health & Nutrition</span>
                            </a>
                        </li>
                        <li className="categoryItem col-lg-4 col-md-6 col-sm-12">
                            <a href="#" className="categoryLink">
                                <i className="fa fa-flask" aria-hidden="true"></i>
                                <span className="categoryLabel">Personal Development</span>
                            </a>
                        </li>
                        <li className="categoryItem col-lg-4 col-md-6 col-sm-12">
                            <a href="#" className="categoryLink">
                                <i className="fa fa-flask" aria-hidden="true"></i>
                                <span className="categoryLabel">Economics</span>
                            </a>
                        </li>
                        <li className="categoryItem col-lg-4 col-md-6 col-sm-12">
                            <a href="#" className="categoryLink">
                                <i className="fa fa-flask" aria-hidden="true"></i>
                                <span className="categoryLabel">History</span>
                            </a>
                        </li>
                        <li className="categoryItem col-lg-4 col-md-6 col-sm-12">
                            <a href="#" className="categoryLink">
                                <i className="fa fa-flask" aria-hidden="true"></i>
                                <span className="categoryLabel">Communication Skills</span>
                            </a>
                        </li>

                        <li className="categoryItem col-lg-4 col-md-6 col-sm-12">
                            <a href="#" className="categoryLink">
                                <i className="fa fa-flask" aria-hidden="true"></i>
                                <span className="categoryLabel">Entrepreneurship</span>
                            </a>
                        </li>
                        <li className="categoryItem col-lg-4 col-md-6 col-sm-12">
                            <a href="#" className="categoryLink">
                                <i className="fa fa-flask" aria-hidden="true"></i>
                                <span className="categoryLabel">Politics</span>
                            </a>
                        </li>
                        <li className="categoryItem col-lg-4 col-md-6 col-sm-12">
                            <a href="#" className="categoryLink">
                                <i className="fa fa-flask" aria-hidden="true"></i>
                                <span className="categoryLabel">Marketing & Sales</span>
                            </a>
                        </li>
                        <li className="categoryItem col-lg-4 col-md-6 col-sm-12">
                            <a href="#" className="categoryLink">
                                <i className="fa fa-flask" aria-hidden="true"></i>
                                <span className="categoryLabel">Science</span>
                            </a>
                        </li>
                        <li className="categoryItem col-lg-4 col-md-6 col-sm-12">
                            <a href="#" className="categoryLink">
                            <i className="fa fa-flask" aria-hidden="true"></i>
                                <span className="categoryLabel">Health & Nutrition</span>
                            </a>
                        </li>
                        <li className="categoryItem col-lg-4 col-md-6 col-sm-12">
                            <a href="#" className="categoryLink">
                                <i className="fa fa-flask" aria-hidden="true"></i>
                                <span className="categoryLabel">Personal Development</span>
                            </a>
                        </li>
                        <li className="categoryItem col-lg-4 col-md-6 col-sm-12">
                            <a href="#" className="categoryLink">
                                <i className="fa fa-flask" aria-hidden="true"></i>
                                <span className="categoryLabel">Economics</span>
                            </a>
                        </li>
                        <li className="categoryItem col-lg-4 col-md-6 col-sm-12">
                            <a href="#" className="categoryLink">
                                <i className="fa fa-flask" aria-hidden="true"></i>
                                <span className="categoryLabel">History</span>
                            </a>
                        </li>
                        <li className="categoryItem col-lg-4 col-md-6 col-sm-12">
                            <a href="#" className="categoryLink">
                            <i className="fa fa-flask" aria-hidden="true"></i>
                                <span className="categoryLabel">Communication Skills</span>
                            </a>
                        </li>

                    </ul>
                </div>
            </div> */}
        </React.Fragment>
    )
}

export default Header;