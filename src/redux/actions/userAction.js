import { server } from '../store';
import axios from 'axios';

// Login User
export const login = (email, password) => async dispatch => {
  try {
    dispatch({ type: 'loginRequest' });
    const { data } = await axios.post(
      `${server}/login`,
      { email, password },
      {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      }
    );
    dispatch({ type: 'loginSuccess', payload: data });
    console.log(data);
  } catch (error) {
    dispatch({ type: 'loginFail', payload: error.response.data.message });
  }
};


// Register User
export const register = formdata => async dispatch => {
  try {
    dispatch({ type: 'registerRequest' });
    const { data } = await axios.post(`${server}/register`, formdata, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      withCredentials: true,
    });
    dispatch({ type: 'registerSuccess', payload: data });
    console.log(data);
  } catch (error) {
    dispatch({ type: 'registerFail', payload: error.response.data.message });
  }
};


// Load User
export const loadUser = () => async dispatch => {
  try {
    dispatch({ type: 'loadUserRequest' });
    const { data } = await axios.get(`${server}/me`, { withCredentials: true });
    dispatch({ type: 'loadUserSuccess', payload: data.user });
  } catch (error) {
    dispatch({ type: 'loadUserFail', payload: error.response.data.message });
  }
};

// Logout User
export const logOut = () => async dispatch => {
  try {
    dispatch({ type: 'logoutRequest' });
    const { data } = await axios.get(`${server}/logout`, {
      withCredentials: true,
    });
    dispatch({ type: 'logoutSuccess', payload: data.user });
  } catch (error) {
    dispatch({ type: 'loadUserFail', payload: error.response.data.message });
  }
};
