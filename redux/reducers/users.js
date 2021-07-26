import {
    USERS
} from "../../constants/actionTypes";
  
  const INIT_STATE = {
    loader: false,
    alertMessage: '',
    messageId: null,
    lists: [],
    userData: null
  };
  
  
  export default (state = INIT_STATE, action) => {
    switch (action.type) {

        case USERS.RESET_USERS: {
            return {
                ...state,
                loader: false,
                alertMessage: '',
                messageId: null
            }
        }
  
        case USERS.ADD_USERS_REQUEST: {
            return {
                ...state,
                loader: true
            }
        }
  
        case USERS.ADD_USERS_SUCCESS: {
            return {
                ...state,
                loader: false,
                alertMessage: action.payload.message,
                messageId: 200
            }
        }
  
        case USERS.ADD_USERS_FAIL: {
            return {
                ...state,
                loader: false,
                alertMessage: action.payload.message,
                messageId: 203
            }
        }

        case USERS.GET_USER_REQUEST: {
            return {
                ...state,
                loader: true
            }
        }
  
        case USERS.GET_USER_SUCCESS: {
            return {
                ...state,
                loader: false,
                userData: action.payload,
                messageId: 202
            }
        }
  
        case USERS.GET_USER_FAIL: {
            return {
                ...state,
                loader: false,
                alertMessage: action.payload.message,
                messageId: 203
            }
        }

        case USERS.LIST_USERS_REQUEST: {
            return {
                ...state,
                loader: true
            }
        }
  
        case USERS.LIST_USERS_SUCCESS: {
            return {
                ...state,
                loader: false,
                lists: action.payload
            }
        }
  
        case USERS.LIST_USERS_FAIL: {
            return {
                ...state,
                loader: false,
                alertMessage: action.payload.message,
                messageId: 203
            }
        }

        case USERS.DELETE_USERS_REQUEST: {
            return {
                ...state,
                loader: true
            }
        }
  
        case USERS.DELETE_USERS_SUCCESS: {
            return {
                ...state,
                loader: false,
                alertMessage: action.payload.message,
                messageId: 200,
                lists: action.payload.data
            }
        }
  
        case USERS.DELETE_USERS_FAIL: {
            return {
                ...state,
                loader: false,
                alertMessage: action.payload.message,
                messageId: 203
            }
        }

        case USERS.UPDATE_USERS_REQUEST: {
            return {
                ...state,
                loader: true
            }
        }
  
        case USERS.UPDATE_USERS_SUCCESS: {
            return {
                ...state,
                loader: false,
                alertMessage: action.payload.message,
                messageId: 200,
                lists: action.payload.data
            }
        }
  
        case USERS.UPDATE_USERS_FAIL: {
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
  