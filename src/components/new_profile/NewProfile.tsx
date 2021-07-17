import React from 'react';
import ProfileForm from './ProfileForm'
import './NewProfile.css'
import UserInput from './UserInput';
import ProfileData from './ProfileData';

interface NewProfileProps {
    onAddProfile(profile: ProfileData): void;
}

const NewProfile = (props: any) => {
    //Raaid: Changed the type of this function's parameter to UserInput and the name to userInput
    const saveProfileDataHandler = (userInput: UserInput) => {
        const profileData = {
            ...userInput,
            id: Math.random().toString()
        };
        props.onAddProfile(profileData);


    };
    return <div>
        <ProfileForm onNewProfileData={saveProfileDataHandler}></ProfileForm>
    </div>
};


export default NewProfile;