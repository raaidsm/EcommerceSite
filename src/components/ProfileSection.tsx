import "./ProfileSection.css";
import React, {FC} from "react";

const ProfileSection: FC = props => {
    return <div>
        <h3>The Profiles</h3>
        <div className="profile-section">
            {props.children}
        </div>
    </div>;
}

export default ProfileSection;