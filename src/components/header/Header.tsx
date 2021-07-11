import {FC} from "react";
import "./Header.css"

interface HeaderProps {

}

const Header: FC<HeaderProps> = (props: any) => {
    return <div className="header">
        <div className="logo">
            <a href="#" className="logo">The React App :)</a>
        </div>
           <header>
               <a className="active"  href="#">Shop</a>
               <a className="active" href="#">Blog</a>
               <a className="active" href="#">About Us</a>
           </header>
    </div>;
}

export default Header;