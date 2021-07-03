import "./Profile.css"

const Profile = (props: any) => {
    return (
        <div className="profile">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Description: {props.description}</p>
        </div>
    );
}

export default Profile;
