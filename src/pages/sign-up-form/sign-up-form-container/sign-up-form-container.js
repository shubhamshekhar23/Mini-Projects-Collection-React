import React, { useState, useEffect } from "react";

import styles from "./sign-up-form-container.module.scss";

const initial_state = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const error_initial_state = {
  username: {
    text: "username must be alphanumeric",
    isTouched: false,
    isError: false,
  },
  email: {
    text: "email must be valid",
    isTouched: false,
    isError: false,
  },
  password: {
    text: "password must be of 6 characters",
    isTouched: false,
    isError: false,
  },
  confirmPassword: {
    text: "confirm password must match the password",
    isTouched: false,
    isError: false,
  },
};

export default function SignUpFormContainer(props) {
  const [formState, setFormState] = useState(initial_state);
  const [errorState, setErrorState] = useState(error_initial_state);

  useEffect(() => {}, []);

  const validations = {
    username: (value) => {
      return /^[a-zA-Z0-9]+$/.test(value) && !!value;
    },
    email: (value) => {
      return (
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
          value
        ) && !!value
      );
    },
    password: (value) => {
      return !!value && value.length > 6;
    },
    confirmPassword: (value) => {
      return !!value && value == formState.password;
    },
  };

  function onSubmit(e) {
    e.preventDefault();
    let isAnyError = checkForErrors();
    if (isAnyError) return;
    console.log("form success");
  }

  function checkForErrors() {
    let isAnyError = false;
    let nameList = Object.keys(initial_state);

    nameList.forEach((name) => {
      const isValid = validations[name](formState[name]);
      setErrorState((prev) => ({
        ...prev,
        [name]: { ...prev[name], isError: !isValid },
      }));
      isAnyError = isAnyError || !isValid;
    });
    console.log(isAnyError);
    return isAnyError;
  }

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    setFormState({ ...formState, [name]: value });
    setErrorState((prev) => ({
      ...prev,
      [name]: { ...prev[name], isTouched: true },
    }));
  }

  function handleOnBlur(e) {
    const name = e.target.name;
    setErrorState({
      ...errorState,
      [name]: { ...errorState[name], isTouched: true },
    });
    checkForErrors();
  }

  return (
    <main className={styles.sign_up_form_container_container}>
      <form onSubmit={onSubmit}>
        {/* UserName */}
        <div className={styles.form_field}>
          <div>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              value={formState.username}
              onChange={handleChange}
              onBlur={handleOnBlur}
            />
          </div>
          {errorState.username.isError && errorState.username.isTouched && (
            <span>{errorState.username.text}</span>
          )}
        </div>

        {/* Email */}
        <div className={styles.form_field}>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              value={formState.email}
              onChange={handleChange}
              onBlur={handleOnBlur}
            />
          </div>
          {errorState.email.isError && errorState.email.isTouched && (
            <span>{errorState.email.text}</span>
          )}
        </div>
        {/* password */}
        <div className={styles.form_field}>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={formState.password}
              onChange={handleChange}
              onBlur={handleOnBlur}
            />
          </div>
          {errorState.password.isError && errorState.password.isTouched && (
            <span>{errorState.password.text}</span>
          )}
        </div>
        {/* confrim password */}
        <div className={styles.form_field}>
          <div>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="confirmPassword"
              name="confirmPassword"
              value={formState.confirmPassword}
              onChange={handleChange}
              onBlur={handleOnBlur}
            />
          </div>
          {errorState.confirmPassword.isError &&
            errorState.confirmPassword.isTouched && (
              <span>{errorState.confirmPassword.text}</span>
            )}
        </div>
        <button>Submit</button>
      </form>
    </main>
  );
}
