import React from 'react';
import './App.css';
import Profile from "./components/Profile";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>The Profiles</h3>
        <Profile name="Raaid" age={22} description="Comp Sci Student"/>
        <Profile name="Natalie" age={20} description="Mermaid in a human body"/>
      </header>
    </div>
  );
}

export default App;
