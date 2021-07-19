import React, { FC } from 'react';
import ProfileForm from './ProfileForm'
import './NewProfile.css'
import UserInput from './UserInput';

interface NewProfileProps {
    onAddProfile(profile: UserInput): void;
}

const NewProfile: FC<NewProfileProps> = (props) => {
    //Raaid: Changed the type of this function's parameter to UserInput and the name to userInput
    const saveProfileDataHandler = (userInput: UserInput) => {
        props.onAddProfile(userInput);
    };
    return <div>
        <ProfileForm onNewProfileData={saveProfileDataHandler}></ProfileForm>
    </div>
};


export default NewProfile;