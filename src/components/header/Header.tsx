import {FC} from "react";
import React, {useState} from 'react'
import "./Header.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

interface HeaderProps {

}

function Header() {
    const [showLinks, setShowLinks] = useState(false);
    return <div className="header">
        <div className="headerLeft">
            <a href="#" className="logo">The React App :)</a>
        </div>
        <div className="headerRight">
            <div className="links" id={showLinks ? "hidden" : ""}>
                <a href="#">Home</a>
                <a href="#">About Us</a>
                <a href="#">Shop</a>
            </div>

            <button className="fas fa-bars" onClick={ () => setShowLinks(!showLinks)}>
                <FontAwesomeIcon icon={faBars} size="5x"></FontAwesomeIcon>
            </button>
        </div>
    </div>;
}

export default Header;