import React, { useState } from 'react'
import Card from '../UI/Card';
import Button from '../UI/Button';
import Error from '../UI/Error';
import classes from './AddUser.module.css';

const AddUser = (props) => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [enteredCollageName, setEnteredCollageName] = useState('');
    const [error, setError] = useState('');

    const AddUserHandler = (event) => {
        event.preventDefault();
        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0 || enteredCollageName.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age and collage name (non-empty values).'
            })
            return;
        }
        if (+enteredAge < 1) {
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age (greater than 0).'
            })
            return;
        }
        props.onAddUser(enteredUsername, enteredAge, enteredCollageName);
        setEnteredUsername('');
        setEnteredAge('');
        setEnteredCollageName('');
    }

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    };
    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    };
    const collageNameChangeHandler = (event) => {
        setEnteredCollageName(event.target.value);
    };

    const errorHandler = () => {
        setError(null);
    };

    return (
        <div>
            {error && (
                <Error
                    title={error.title}
                    message={error.message}
                    onConfirm={errorHandler}
                />
            )}
            <Card className={classes.input}>
                <form onSubmit={AddUserHandler}>
                    <label htmlFor="name">Name:-</label>
                    <input type="text" id="name" value={enteredUsername} onChange={usernameChangeHandler} />

                    <label htmlFor="age">Age(Years):-</label>
                    <input type="number" id="age" value={enteredAge} onChange={ageChangeHandler} />

                    <label htmlFor="clg">Collage Name:-</label>
                    <input type="text" id="clg" value={enteredCollageName} onChange={collageNameChangeHandler} />

                    <Button type="submit">Submit</Button>
                </form>
            </Card>
        </div>
    );
}
export default AddUser;
