import Cookies from 'js-cookie';

import {
  USER_AUTH
} from "./../../config/actionTypes";

var CryptoJS = require("crypto-js");
let originalText = null;

if(Cookies.get('_tok_u')){
  // Decrypt
  const bytes  = CryptoJS.AES.decrypt(Cookies.get('_tok_u'), 'GFYUFGTYGFTYTY64564545acvbvrttyFG@%#%#%#%#TTRR');
  originalText = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
}

const INIT_STATE = {
  loader: false,
  alertMessage: '',
  authUser: originalText
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case USER_AUTH.RESET_AUTH: {
      return {
        ...state,
        loader: false,
        alertMessage: '',
        messageId: null
      }
    }
    case USER_AUTH.SIGNOUT_USER: {
      return {
        ...state,
        authUser: null,
        loader: false
      }
    }
    case USER_AUTH.SIGNIN_REQUEST: {
      return {
        ...state,
        loader: true
      }
    }
    case USER_AUTH.SIGNIN_REQUEST_SUCCESS: {
      return {
        ...state,
        loader: false,
        alertMessage: action.payload.message,
        messageId: 200,
        authUser: action.payload.data
      }
    }
    case USER_AUTH.SIGNIN_REQUEST_FAIL: {
      return {
        ...state,
        loader: false,
        alertMessage: action.payload.message,
        messageId: 203
      }
    }
    case USER_AUTH.SIGNUP_REQUEST: {
      return {
        ...state,
        loader: true
      }
    }
    case USER_AUTH.SIGNUP_REQUEST_SUCCESS: {
      return {
        ...state,
        loader: false,
        alertMessage: action.payload.message,
        messageId: 200
      }
    }
    case USER_AUTH.SIGNUP_REQUEST_FAIL: {
      return {
        ...state,
        loader: false,
        alertMessage: action.payload.message,
        messageId: 203
      }
    }
    default:
      return state;
  }
}
