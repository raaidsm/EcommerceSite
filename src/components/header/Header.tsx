import {FC} from "react";
import React, {useState} from 'react'
import "./Header.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGem } from '@fortawesome/free-solid-svg-icons'

interface HeaderProps {

}

function Header() {
    const [showLinks, setShowLinks] = useState(false);
    return <div className="header">
        <div className="header-left">
            <a href="#" className="logo">The React App :)</a>
        </div>
        <div className="header-right">
            <div className="links" id={showLinks ? "hidden" : ""}>
                <a href="#">Home</a>
                <a href="#">About Us</a>
                <a href="#">Shop</a>
            </div>

            <button className="fas fa-bars" onClick={ () => setShowLinks(!showLinks)}>
                <FontAwesomeIcon icon={faGem} size="3x"/>
            </button>
        </div>
    </div>;
}

export default Header;