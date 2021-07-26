import {
    INTEREST
} from "../../constants/actionTypes";
  
  const INIT_STATE = {
    loader: false,
    alertMessage: '',
    messageId: null,
    lists: []
  };
  
  
  export default (state = INIT_STATE, action) => {
    switch (action.type) {

        case INTEREST.RESET_INTEREST: {
            return {
                ...state,
                loader: false,
                alertMessage: '',
                messageId: null
            }
        }
  
        case INTEREST.ADD_INTEREST_REQUEST: {
            return {
                ...state,
                loader: true
            }
        }
  
        case INTEREST.ADD_INTEREST_SUCCESS: {
            return {
                ...state,
                loader: false,
                alertMessage: action.payload.message,
                messageId: 200
            }
        }
  
        case INTEREST.ADD_INTEREST_FAIL: {
            return {
                ...state,
                loader: false,
                alertMessage: action.payload.message,
                messageId: 203
            }
        }

        case INTEREST.LIST_INTEREST_REQUEST: {
            return {
                ...state,
                loader: true
            }
        }
  
        case INTEREST.LIST_INTEREST_SUCCESS: {
            return {
                ...state,
                loader: false,
                lists: action.payload
            }
        }
  
        case INTEREST.LIST_INTEREST_FAIL: {
            return {
                ...state,
                loader: false,
                alertMessage: action.payload.message
            }
        }

        case INTEREST.DELETE_INTEREST_REQUEST: {
            return {
                ...state,
                loader: true
            }
        }
  
        case INTEREST.DELETE_INTEREST_SUCCESS: {
            return {
                ...state,
                loader: false,
                alertMessage: action.payload.message,
                messageId: 200,
                lists: action.payload.data
            }
        }
  
        case INTEREST.DELETE_INTEREST_FAIL: {
            return {
                ...state,
                loader: false,
                alertMessage: action.payload.message,
                messageId: 203
            }
        }

        case INTEREST.UPDATE_INTEREST_REQUEST: {
            return {
                ...state,
                loader: true
            }
        }
  
        case INTEREST.UPDATE_INTEREST_SUCCESS: {
            return {
                ...state,
                loader: false,
                alertMessage: action.payload.message,
                messageId: 200,
                lists: action.payload.data
            }
        }
  
        case INTEREST.UPDATE_INTEREST_FAIL: {
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
  