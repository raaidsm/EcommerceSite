import './App.css';
import ProfileSection from "./components/ProfileSection";
import Profile from "./components/Profile";

function App() {
    return (
        <main className="App">
            <ProfileSection>
                <Profile name="Raaid" age={22} description="Comp Sci Student"/>
                <Profile name="Natalie" age={20} description="Mermaid in a human body"/>
                <Profile name="Chris" age={26} description="Cat Man >:)"/>
                <Profile name="Brandon" age={20} description="don't talk to me"/>
                <Profile name="Amanda" age={32} description="Mmm I want to be a pickle..."/>
            </ProfileSection>
        </main>
    );
}

export default App;