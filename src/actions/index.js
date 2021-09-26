import axios from 'axios';
import React, { useParams } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

//THUNKY FUN
export const SET_ERROR = 'SET_ERROR';
export const FETCH_PLANTS_START = 'FETCH_PLANTS_START';
export const FETCH_PLANTS_SUCCESS = 'FETCH_PLANTS_SUCCESS';
export const FETCH_PLANTS_FAILURE = 'FETCH_PLANTS_FAILURE';
export const EDIT_PLANT = 'EDIT_PLANT';

// Error Message
export const setErrorMsg = (errorMsg) => {
  return { type: SET_ERROR, payload: errorMsg };
};
//API fetch function
export const fetchPlants = () => (dispatch) => {
  dispatch({ type: FETCH_PLANTS_START });
  //fetch the api here
  axios
    .get(``)
    .then((res) => {
      dispatch({ type: FETCH_PLANTS_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log('error: ', err);
      dispatch({ type: FETCH_PLANTS_FAILURE, payload: err });
    });
};

export const editPlant = () => (dispatch) => {
  dispatch({ type: EDIT_PLANT });
  const { id } = useParams();
  axios
    .put(``)
    .then((res) => {
      dispatch({ type: EDIT_PLANT });
    })
    .catch((err) => {
      dispatch({ type: FETCH_PLANTS_FAILURE, payload: err });
      console.log('error: ', err);
    });
};

export const ADD_USER = 'ADD_USER';
export const LOGGED_IN_USER = 'LOGGED_IN_USER';
export const LOGGED_OUT_USER = 'LOGGED_OUT_USER';

export const ADD_PLANT = 'ADD_PLANT';
export const DELETE_PLANT = 'DELETE_PLANT';
export const WATER_PLANT = 'WATER_PLANT';

export const loginUser = (userValues) => (dispatch) => {
  axios
    .post('/login', userValues)
    .then((res) => {
      localStorage.setItem('token', res.data.payload);
      dispatch({ type: LOGGED_IN_USER, payload: userValues });
    })
    .catch((err) => {
      console.log('loggin in user faileed');
      console.log(err);
    });
};

export const addUser = (registerFormValues) => (dispatch) => {
  axios
    .post('/register', registerFormValues)
    .then((res) => {
      dispatch(loginUser(res.data));
    })
    .catch((err) => {
      console.log('adding user failed');
      console.log(err);
    });
};
// is this even being used?
export const logoutUser = () => (dispatch) => {
  axiosWithAuth()
    .get('/logout')
    .then((res) => {
      localStorage.removeItem('token');
      dispatch({ type: LOGGED_OUT_USER });
    })
    .catch((err) => {
      console.log('error logging out user');
      console.log(err);
    });
};

export const addPlant = (plantValues) => {
  return { type: ADD_PLANT, payload: plantValues };
};

export const deletePlant = (id) => (dispatch) => {
  axiosWithAuth()
    .delete(`plants/${id}`)
    .then((res) => dispatch({ type: DELETE_PLANT, payload: id }))
    .catch((err) => dispatch({ type: DELETE_PLANT, payload: id }));
};

export const waterPlant = (id) => {
  return { type: WATER_PLANT, payload: id };
};
