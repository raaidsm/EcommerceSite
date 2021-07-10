import {FC} from "react";
import "./Header.css"

interface HeaderProps {

}

const Header: FC<HeaderProps> = (props: any) => {
    return <div className="header">
           <header>
               <h1>This is a header</h1>
           </header>
    </div>;
}

export default Header;