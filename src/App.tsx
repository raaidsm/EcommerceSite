import React from 'react';
import './App.css';
import ProfileSection from "./components/ProfileSection";
import Profile from "./components/Profile";

function App() {
    return (
        <main className="App">
            <h3>The Profiles</h3>
            <ProfileSection>
                <Profile name="Raaid" age={22} description="Comp Sci Student"/>
                <Profile name="Natalie" age={20} description="Mermaid in a human body"/>
            </ProfileSection>
        </main>
    );
}

export default App;