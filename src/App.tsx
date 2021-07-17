import React, {useState} from 'react';
import './App.css';
import ProfileSection from "./components/ProfileSection";
import Profile from "./components/Profile";
import Header from "./components/header/Header"
import NewProfile from "./components/NewProfile/NewProfile";

function App() {
    const addProfileHandler = (profile: any) => {
        console.log(profile);

    };
    return (
        <main className="App">
            <Header></Header>
            <ProfileSection>
                <Profile name="Raaid" age={22} description="Comp Sci Student"/>
                <Profile name="Natalie" age={20} description="Mermaid in a human body"/>
                <Profile name="Chris" age={26} description="Cat Man >:)"/>
                <Profile name="Brandon" age={20} description="don't talk to me"/>



            </ProfileSection>
            <NewProfile onAddProfile={addProfileHandler}/>



        </main>

    );
}

export default App;