import axios from 'axios';
import axiosWithAuth from '../utils/axiosWithAuth';

export const ADD_USER = 'ADD_USER';
export const LOGGED_IN_USER = 'LOGGED_IN_USER';
export const LOGGED_OUT_USER = 'LOGGED_OUT_USER';
export const UPDATE_USER = 'UPDATE_USER';

export const ADD_PLANT = 'ADD_PLANT';
export const DELETE_PLANT = 'DELETE_PLANT';
export const WATER_PLANT = 'WATER_PLANT';
export const UPDATE_PLANT = 'UPDATE_PLANT';

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

export const updateUser = (userData) => {
  return { type: UPDATE_USER, payload: userData };
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

export const updatePlant = (plantInfo, id) => (dispatch) => {
  axiosWithAuth()
    .put(`/plants/${id}`, plantInfo)
    .then((res) => {
      dispatch({ type: UPDATE_PLANT, payload: { plantInfo, id } });
    })
    .catch((err) => {
      dispatch({ type: UPDATE_PLANT, payload: { plantInfo, id } });
      console.log(err);
    });
};
