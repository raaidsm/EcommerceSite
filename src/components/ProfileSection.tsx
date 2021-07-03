import "./ProfileSection.css";
import {FC} from "react";

const ProfileSection: FC = props => {
    return <div className="profile-section">
        {props.children}
    </div>;
}

export default ProfileSection;