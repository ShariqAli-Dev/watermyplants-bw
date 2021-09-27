import React, { useState, useEffect } from 'react';
import * as Yup from 'yup';
import axios from 'axios';

const SignUp = () => {
  const [value, setValue] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    agree: false,
  });

  const changeHandler = (e) => {
    const values =
      e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setValue({ ...value, [e.target.name]: values });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    axios.post(`#`, value)``
      .then((res) => {
        alert(res.data, 'Data!: res.data');
        setPost([...post, res.data]);
      })
      .catch((err) => console.log(err));
    console.log(value);
  };

  const schema = Yup.object().shape({
    firstName: Yup.string()
      .required('Name is Required')
      .min(3, 'Must be at least 3 letters'),
    lastName: Yup.string()
      .required('Name is Required')
      .min(2, 'Must be at least 2 letters'),
    email: Yup.string()
      .required('Email is Required')
      .min(5, 'Must be more than 5 characters'),
    password: Yup.string()
      .required('Password is Required')
      .min(6, 'Password must be at least 6 characters'),
  });
  useEffect(() => {
    schema.isValid(value).then((valid) => setDisabled(!valid));
  }, [value]);

  const [disabled, setDisabled] = useState(true);
  const [post, setPost] = useState([]);

  return (
    <div>
      <h3> Sign Up Form</h3>
      <form id='sign-up-form' onSubmit={submitHandler}>
        <label htmlFor='firstName'>
          First Name:
          <input
            type='text'
            name='firstName'
            id='first-name'
            value={value.firstName}
            onChange={changeHandler}
          />
        </label>
        <label htmlFor='lastName'>
          Last Name:
          <input
            type='text'
            name='lastName'
            id='last-name'
            value={value.lastName}
            onChange={changeHandler}
          />
        </label>
        <label htmlFor='email'>
          Email:
          <input
            type='text'
            name='email'
            id='email'
            value={value.email}
            onChange={changeHandler}
          />
        </label>
        <label htmlFor='password'>
          Password:
          <input
            type='text'
            name='password'
            id='password'
            value={value.password}
            onChange={changeHandler}
          />
        </label>
        <button id='submit' type='submit' disabled={setDisabled}>
          Submit
        </button>
      </form>
    </div>
  );
};
export default SignUp;
