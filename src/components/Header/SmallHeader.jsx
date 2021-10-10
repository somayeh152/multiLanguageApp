import React from 'react';
import './sass/header.css';
// import { Link } from 'react-router-dom';

const SmallHeader = (props) => {
    return (
        <header>                
            <div className="header" id="header">
                <div id="leftSec">
                    <nav className="navbar navbar-expand-sm navbar-light leftNavBar" >
                        <div className="d-flex align-items-center">
                            {/* <Link to="#" className="navbar-brand">Blinkist</Link> */}
                            
                            <a href="#" className="navbar-brand">Blinkist</a>
                                                
                        <select onChange={props.ChangeLang} defaultValue={props.defaultValue}>
                            <option>en</option>
                            <option>fa</option>
                        </select>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default SmallHeader;