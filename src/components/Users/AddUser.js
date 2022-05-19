import React from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";

function AddUser(props) {
  const onSubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Card className={classes.input}>
        <form onSubmit={onSubmitHandler}>
          <label htmlFor="username">Username: </label>
          <input id="username" type="text" />

          <label htmlFor="email">Mail Adress: </label>
          <input id="email" type="email" />

          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
}

export default AddUser;
