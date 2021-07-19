import React, {FC, useState} from 'react';
import './NewProfile.css'
import UserInput from './UserInput';

//Raaid: Added this interface to define the props for ProfileForm components
interface ProfileFormProps {
    onNewProfileData(profileData: UserInput): void;
}

//Raaid: Changed the type of props to ProfileFormProps
const ProfileForm = (props: ProfileFormProps) => {


    const [enteredName, setEnteredName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [enteredDesc, setEnteredDesc] = useState('');

    const [userInput, setUserInput] = useState({
        enteredName: '',
        enteredAge: 0,
        enteredDesc: ''

    });

    const nameChangeHandler =  (event: any) => {
        setEnteredName(event.target.value);
        // setUserInput({
        //     ...userInput, //takes an object and pulls out all the key pairs and adds them to this new object
        //     enteredName: event.target.value,
        //     // enteredAge: "",
        //     // enteredDesc: ""
        // })
    };

    const ageChangeHandler = (event: any) => {
        setEnteredAge(event.target.value);
    }

    const descChangeHandler = (event: any) => {
        setEnteredDesc(event.target.value);
    }

    const handleSubmit = (event: any) => {
        event.preventDefault() //stops the page from reloading when the form is submitted which is the default request

        //Raaid: Changed the name of this to userInput
        const userInput = {
            name: enteredName,
            //Parsed this as an int
            age: parseInt(enteredAge),
            description: enteredDesc
        }



        props.onNewProfileData(userInput);

        //resets imput to empty strings.
        setEnteredName("");
        setEnteredAge("");
        setEnteredDesc("");

        //Raaid: Commented out this unnecessary console log
        //console.log("ProfileForm", userInput);


    }
    return <form action="" onSubmit={handleSubmit}>
        <div className="form-bg">
            <div>
                <label>Name:</label>
                {/*userInputHandler just pointing to the function dont do userInputHandler() because it wont execute like this*/}
                {/*value is letting us set it back to an empty string when the form is subbmitted */}
                <input type='text' name='name' value={enteredName} onChange={nameChangeHandler}/>
            </div>
            <div>
                <label>Age:</label>
                <input type='text' name='age' value={enteredAge} onChange={ageChangeHandler}/>
            </div>
            <div>
                <label >Description:</label>
                <input  type='text' name='desc' value={enteredDesc} onChange={descChangeHandler}/>
            </div>
            <div>
                <button type="submit">Add Profile</button>
            </div>
        </div>
    </form>

};

export default ProfileForm;