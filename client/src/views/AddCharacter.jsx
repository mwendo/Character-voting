import React, {useState, useEffect} from 'react';
import axios from 'axios';


const AddCharacter = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/players')
    }

    return (
        <div>
            <h1 className="m-5">Add a player!</h1>
            <form onSubmit={onSubmitHandler}>
                <label htmlFor="firstName">First Name:</label>
                <input type="text" onChange={e=>setFirstName(e.target.value)}/>
                <label htmlFor="lastName">Last Name:</label>
                <input type="text" onChange={e=>setLastName(e.target.value)}/>
                <input type="submit" value="Add player" className="btn btn-warning"/>
            </form>
        </div>
    );
};

export default AddCharacter;