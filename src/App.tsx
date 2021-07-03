import React from 'react';
import './App.css';
import Profile from "./components/Profile";

function App() {
    return (
        <main className="App">
            <h3>The Profiles</h3>
            <div className="profile-container">
                <Profile name="Raaid" age={22} description="Comp Sci Student"/>
                <Profile name="Natalie" age={20} description="Mermaid in a human body"/>
            </div>
        </main>
    );
}

export default App;