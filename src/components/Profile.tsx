import "./Profile.css"
import {FC} from "react";

interface ProfileProps {
    name: string;
    age: number;
    description: string;
}

const Profile: FC<ProfileProps> = (props: any) => {
    return <div className="profile">
        <p>Name: {props.name}</p>
        <p>Age: {props.age}</p>
        <p>Description: {props.description}</p>
    </div>;
}

export default Profile;
