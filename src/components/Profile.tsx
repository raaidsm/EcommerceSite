import "./Profile.css"
import React, {FC} from "react";
import NewProfile from "./NewProfile/NewProfile";
import ProfileSection from "./ProfileSection";

interface ProfileProps {
    name: string;
    age: number;
    description: string;
}


const Profile: FC<ProfileProps> = (props) => {
    return <div className="profile">

        <p>Name: {props.name}</p>
        <p>Age: {props.age}</p>
        <p>Description: {props.description}</p>

    </div>;
}

export default Profile;
