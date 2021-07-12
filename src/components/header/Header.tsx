import {FC} from "react";
import React, {useState} from 'react'
import "./Header.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

interface HeaderProps {

}

const Header: FC<HeaderProps> = (props: any) => {
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
            <button onClick={ () => setShowLinks(!showLinks)}>Open</button>
        </div>
    </div>;
}

export default Header;