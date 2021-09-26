import axios from 'axios';

const axiosWithAuth = () => {
  const token = localStorage.getItem('token');

  return axios.create({
    headers: {
      authorization: token,
    },
    // baseURL: '',
    // TODO: ADD BASE URL TO AXIOS-WITH-AUTH
  });
};

export default axiosWithAuth;
