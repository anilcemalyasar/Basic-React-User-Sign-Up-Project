import classes from "./AddUser.module.css"
import Button from "../UI/Button";
import Cart from "../UI/Cart";
import { useState } from "react";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {

    const [ enteredUsername, setEnteredUsername ] = useState('');
    const [ enteredAge, setEnteredAge ] = useState('');
    const [ enteredName, setEnteredName ] = useState('');
    const [ enteredLastName, setEnteredLastName ] = useState('');
    const [ error, setError ] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();
        if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0
        || enteredName.trim().length === 0 || enteredLastName.trim().length === 0) {
            setError({
                title:"Invalid input!",
                message:"Please enter a valid name and age (non-empty values)."
            });
            return;
        }
        if(+enteredAge < 1) {
            setError({
                title:"Invalid Age!",
                message:"Please enter a valid age (> 0)."
            });
            return;
        }
        props.onAddUser(enteredUsername, enteredAge, enteredName, enteredLastName);
        setEnteredUsername('');
        setEnteredAge('');
        setEnteredName('');
        setEnteredLastName('');
    }

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    }

    const ageChangeHandler = event => {
        setEnteredAge(event.target.value);
    }

    const nameChangeHandler = event => {
        setEnteredName(event.target.value);
    }

    const lastNameChangeHandler = event => {
        setEnteredLastName(event.target.value);
    }

    const errorHandler = () => {
        setError(null);
    }

    return (
        <div>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
            <Cart className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="firstName">First Name</label>
                    <input 
                    id = "firstName"
                    type="text"
                    value={enteredName}
                    onChange={nameChangeHandler}
                    />
                    <label htmlFor="lastName">Last Name</label>
                    <input
                    id = "lastName"
                    type="text"
                    value={enteredLastName}
                    onChange={lastNameChangeHandler}
                    />
                    <label htmlFor="username">Username</label>
                    <input 
                    id="username" 
                    type="text" 
                    value={enteredUsername}
                    onChange={usernameChangeHandler} />
                    <label htmlFor="age">Age (Years)</label>
                    <input
                    id="age" 
                    type="number" 
                    value={enteredAge}
                    onChange={ageChangeHandler}/>
                    <Button type="submit">Add User</Button>
                </form>
            </Cart>
        </div>
    )
}

export default AddUser;