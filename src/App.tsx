import {useEffect, useState} from 'react';
import './App.css';
import ProfileSection from "./components/ProfileSection";
import Profile from "./components/Profile";
import Header from "./components/header/Header"
import NewProfile from "./components/new_profile/NewProfile";
import UserInput from './components/new_profile/UserInput';

function App() {
    const [users, setUsers] = useState([
        { name: "Raaid", age: 22, description: "Comp Sci Student"},
        { name: "Natalie", age: 20, description: "Mermaid in a human body"},
        { name: "Chris", age: 26, description: "Cat Man >:)"},
        { name: "Brandon", age: 20, description: "don't talk to me"}
    ]);

    const addProfileHandler = (profile: UserInput) => {
        console.log("New Profile = " + profile);
        let tempUsers = users;
        tempUsers.push(profile);
        setUsers(tempUsers);
    };

    return (
        <main className="App">
            <Header></Header>
            <ProfileSection>
                {
                    users.map((user, index) => {
                        return <Profile key={index} name={user.name} age={user.age} description={user.description} />
                    })
                }
            </ProfileSection>
            <NewProfile onAddProfile={addProfileHandler}/>
        </main>

    );
}

export default App;