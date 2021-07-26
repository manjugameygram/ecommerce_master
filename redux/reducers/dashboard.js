import {
    DASHBOARD
} from "../../constants/actionTypes";
  
  const INIT_STATE = {
    loader: false,
    alertMessage: '',
    messageId: null,
    usersData: null,
    charterMembers: null
  };
  
  
  export default (state = INIT_STATE, action) => {
    switch (action.type) {

        case DASHBOARD.RESET_DASHBOARD: {
            return {
                ...state,
                loader: false,
                alertMessage: '',
                messageId: null
            }
        }

        case DASHBOARD.USERS_COUNT_REQUEST: {
            return {
                ...state,
                loader: true
            }
        }
  
        case DASHBOARD.USERS_COUNT_SUCCESS: {
            return {
                ...state,
                loader: false,
                usersData: action.payload
            }
        }
  
        case DASHBOARD.USERS_COUNT_FAIL: {
            return {
                ...state,
                loader: false,
                alertMessage: action.payload.message
            }
        }

        case DASHBOARD.CHARTER_MEMBER_COUNT_REQUEST: {
            return {
                ...state,
                loader: true
            }
        }
  
        case DASHBOARD.CHARTER_MEMBER_COUNT_SUCCESS: {
            return {
                ...state,
                loader: false,
                charterMembers: action.payload
            }
        }
  
        case DASHBOARD.CHARTER_MEMBER_COUNT_FAIL: {
            return {
                ...state,
                loader: false,
                alertMessage: action.payload.message
            }
        }
  
        default:
            return state;
    }
  }
  