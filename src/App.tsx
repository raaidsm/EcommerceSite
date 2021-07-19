import {Reducer, useEffect, useReducer, useState} from 'react';
import './App.css';
import ProfileSection from "./components/ProfileSection";
import Profile from "./components/Profile";
import Header from "./components/header/Header"
import NewProfile from "./components/new_profile/NewProfile";
import UserInput from './components/new_profile/UserInput';

function App() {
    type State = {
        users: Array<UserInput>;
    }
    enum ActionType {
        ADD = "ADD",
        REMOVE = "REMOVE"
    }
    type Action = {
        type: ActionType;
        payload: UserInput | number;
    }
    const reducer = (state: State, action: Action): State => {
        let newState: State;
        switch (action.type) {
            case ActionType.ADD:
                console.log("Adding profile: " + action.payload);
                newState = { users: [...state.users, action.payload as UserInput] };
                return newState;
            case ActionType.REMOVE:
                console.log("Remove profile at index " + action.payload);
                newState = { users: state.users.filter((user, index) => index !== action.payload as number) };
                return newState;
        }
    };
    const [state, dispatch] = useReducer<Reducer<State, Action>>(reducer, { users: [
        { name: "Raaid", age: 22, description: "Comp Sci Student"},
        { name: "Natalie", age: 20, description: "Mermaid in a human body"},
        { name: "Chris", age: 26, description: "Cat Man >:)"},
        { name: "Brandon", age: 20, description: "don't talk to me"}
    ] });

    const addProfileHandler = (profile: UserInput) => {
        //DEBUGGING
        console.log("New Profile = " + profile);
        dispatch({ type: ActionType.ADD, payload: profile });
    };

    return (
        <main className="App">
            <Header></Header>
            <ProfileSection>
                {
                    state.users.map((user: UserInput, index: number) => {
                        return <Profile key={index} name={user.name} age={user.age} description={user.description} />
                    })
                }
            </ProfileSection>
            <NewProfile onAddProfile={addProfileHandler}/>
        </main>

    );
}

export default App;