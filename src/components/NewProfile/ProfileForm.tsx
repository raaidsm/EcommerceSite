import React, {useState} from 'react';
import './NewProfile.css'
const ProfileForm = () => {
    const [enteredName, setEnteredName] = useState('');
    const userInputHandler = (event: any) => {
        setEnteredName(event.target.value);

    };
    return <form action="">
        <div className="form-bg">
            <div>
                <label>Name:</label>
                {/*userInputHandler just pointing to the function dont do userInputHandler() because it wont execute like this*/}
                <input type='text' onChange={userInputHandler}/>
            </div>
            <div>
                <label>Age:</label>
                <input type='text'/>
            </div>
            <div>
                <label >Description:</label>
                <input  type='text'/>
            </div>
            <div>
                <button type="submit">Add Profile</button>
            </div>

        </div>


    </form>

};

export default ProfileForm;