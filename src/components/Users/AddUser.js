import React, { useState, useRef } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";

function AddUser(props) {
  const nameInputRef = useRef();
  const mailInputRef = useRef();

  //  const [enteredUsername, setEnteredUsername] = useState("");
  //  const [enteredEmail, setEnteredEmail] = useState("");
  const [error, setError] = useState();

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredUserMail = mailInputRef.current.value;

    if (
      enteredName.trim().length === 0 ||
      enteredUserMail.trim().length === 0
    ) {
      setError({
        title: "Invalid Value",
        message: "Please enter a valid name and email (non-empty values).",
      });
      return;
    }

    //console.log(enteredUsername, enteredEmail);
    props.onAddUser(enteredName, enteredUserMail); //!App.js'den geliyor

    //setEnteredUsername("");
    //setEnteredEmail("");
    nameInputRef.current.value = "";
    mailInputRef.current.value = "";
  };

  //  const usernameChangeHandler = (e) => {
  //    setEnteredUsername(e.target.value);
  //  };
  //
  //  const emailChangeHandler = (e) => {
  //    setEnteredEmail(e.target.value);
  //  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler} //ErrorModal.js'e gönderiyoruz!
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={onSubmitHandler}>
          <label htmlFor="username">Username: </label>
          <input
            id="username"
            type="text"
            //value={enteredUsername}
            //onChange={usernameChangeHandler}
            ref={nameInputRef}
          />

          <label htmlFor="email">Mail Adress: </label>
          <input
            id="email"
            type="email"
            //value={enteredEmail}
            //onChange={emailChangeHandler}
            ref={mailInputRef}
          />

          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
}

export default AddUser;
