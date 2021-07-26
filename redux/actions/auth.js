import {
  API_URL,
  USER_AUTH
} from "./../../config/actionTypes";

import axios from 'axios';
import Cookies from 'js-cookie';
const CryptoJS = require("crypto-js");

export const userLogin = (data) => {
  return (dispatch) => {
    dispatch({ type: USER_AUTH.SIGNIN_REQUEST });
    const INSTANCE = axios.create({
      headers: {
        'Content-Type': 'application/json'
      }
    });

    let inputJSON = JSON.stringify(data);
      
    INSTANCE.post(API_URL + "app-user/login", inputJSON)
      .then(function (response) {
        if(response.data.messageId === 200){
          let result = {
            data: {
              user: response.data.user,
              token: response.data.token
            },
            message: response.data.message
          }
          // Encrypt
          const ciphertext = CryptoJS.AES.encrypt(JSON.stringify(result.data), 'GFYUFGTYGFTYTY64564545acvbvrttyFG@%#%#%#%#TTRR').toString();
          // _tok_u = JWT Token & user details
          Cookies.set('_tok_u', ciphertext, { expires: 7 });
          dispatch(userSignInSuccess(result));
        } else {
          dispatch(userSignInFail(response.data));
        }
      })
      .catch(function (error) {
        dispatch(userSignInFail(error.message));
      });
  };
};

const userSignInSuccess = (data) => ({
  type: USER_AUTH.SIGNIN_REQUEST_SUCCESS,
  payload: data
});

const userSignInFail = errorMessage => ({
  type: USER_AUTH.SIGNIN_REQUEST_FAIL,
  payload: errorMessage
});

export const userSignUp = (data) => {
  return (dispatch) => {
    dispatch({ type: USER_AUTH.SIGNUP_REQUEST });
    const INSTANCE = axios.create({
      headers: {
        'Content-Type': 'application/json'
      }
    });

    let inputJSON = JSON.stringify(data);
      
    INSTANCE.post(API_URL + "app-user/signup", inputJSON)
      .then(function (response) {
        if(response.data.messageId === 200){
          dispatch(userSignUpSuccess(response.data));
        } else {
          dispatch(userSignUpFail(response.data));
        }
      })
      .catch(function (error) {
        dispatch(userSignUpFail(error.message));
      });
  };
};

const userSignUpSuccess = (data) => ({
  type: USER_AUTH.SIGNUP_REQUEST_SUCCESS,
  payload: data
});

const userSignUpFail = errorMessage => ({
  type: USER_AUTH.SIGNUP_REQUEST_FAIL,
  payload: errorMessage
});

export const logOutUser = () => {
  Cookies.remove('_tok_u');
  return (dispatch) => {
    dispatch({ type: USER_AUTH.SIGNOUT_USER});
  }
};

export const setInitUrl = (url) => {
  return {
    type: INIT_URL,
    payload: url
  };
};

export const resetUserAuth = () => {
  return (dispatch) => {
    dispatch({ type: USER_AUTH.RESET_AUTH})
  }
}
