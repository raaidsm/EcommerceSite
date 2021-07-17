import React, {FC, useState} from 'react';
import './NewProfile.css'
const ProfileForm = (props: any) => {


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

        const profileData = {
            name: enteredName,
            age: enteredAge,
            desc: enteredDesc
        }



        props.onNewProfileData();

        //resets imput to empty strings.
        setEnteredName("");
        setEnteredAge("");
        setEnteredDesc("");

        console.log("ProfileForm", profileData);


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