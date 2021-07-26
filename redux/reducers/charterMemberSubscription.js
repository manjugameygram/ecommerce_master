import {
    CHARTER_MEMBER
} from "../../constants/actionTypes";
  
  const INIT_STATE = {
    loader: false,
    alertMessage: '',
    messageId: null,
    lists: [],
  };
  
  
  export default (state = INIT_STATE, action) => {
    switch (action.type) {

        case CHARTER_MEMBER.LIST_CHARTER_MEMBER_REQUEST: {
            return {
                ...state,
                loader: true
            }
        }
  
        case CHARTER_MEMBER.LIST_CHARTER_MEMBER_SUCCESS: {
            return {
                ...state,
                loader: false,
                lists: action.payload
            }
        }
  
        case CHARTER_MEMBER.LIST_CHARTER_MEMBER_FAIL: {
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
  