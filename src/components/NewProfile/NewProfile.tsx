import React from 'react';
import ProfileForm from './ProfileForm'
import './NewProfile.css'


const NewProfile = (props: any) => {
    const saveProfileDataHandler = (enteredProfileData: any) => {
        const profileData = {
            ...enteredProfileData,
            id: Math.random().toString()
        };
        props.onAddProfile(profileData);


    };
    return <div>
        <ProfileForm onNewProfileData={saveProfileDataHandler}></ProfileForm>
    </div>
};


export default NewProfile;