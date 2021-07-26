import {
    EVENT_SUBCAT
} from "../../constants/actionTypes";
  
  const INIT_STATE = {
    loader: false,
    alertMessage: '',
    messageId: null,
    lists: []
  };
  
  
  export default (state = INIT_STATE, action) => {
    switch (action.type) {

        case EVENT_SUBCAT.RESET_EVENT_SUBCAT: {
            return {
                ...state,
                loader: false,
                alertMessage: '',
                messageId: null
            }
        }
  
        case EVENT_SUBCAT.ADD_EVENT_SUBCAT_REQUEST: {
            return {
                ...state,
                loader: true
            }
        }
  
        case EVENT_SUBCAT.ADD_EVENT_SUBCAT_SUCCESS: {
            return {
                ...state,
                loader: false,
                alertMessage: action.payload.message,
                messageId: 200
            }
        }
  
        case EVENT_SUBCAT.ADD_EVENT_SUBCAT_FAIL: {
            return {
                ...state,
                loader: false,
                alertMessage: action.payload.message,
                messageId: 203
            }
        }

        case EVENT_SUBCAT.LIST_EVENT_SUBCAT_REQUEST: {
            return {
                ...state,
                loader: true
            }
        }
  
        case EVENT_SUBCAT.LIST_EVENT_SUBCAT_SUCCESS: {
            return {
                ...state,
                loader: false,
                lists: action.payload
            }
        }
  
        case EVENT_SUBCAT.LIST_EVENT_SUBCAT_FAIL: {
            return {
                ...state,
                loader: false,
                alertMessage: action.payload.message,
                messageId: 203
            }
        }

        case EVENT_SUBCAT.DELETE_EVENT_SUBCAT_REQUEST: {
            return {
                ...state,
                loader: true
            }
        }
  
        case EVENT_SUBCAT.DELETE_EVENT_SUBCAT_SUCCESS: {
            return {
                ...state,
                loader: false,
                alertMessage: action.payload.message,
                messageId: 200,
                lists: action.payload.data
            }
        }
  
        case EVENT_SUBCAT.DELETE_EVENT_SUBCAT_FAIL: {
            return {
                ...state,
                loader: false,
                alertMessage: action.payload.message,
                messageId: 203
            }
        }

        case EVENT_SUBCAT.UPDATE_EVENT_SUBCAT_REQUEST: {
            return {
                ...state,
                loader: true
            }
        }
  
        case EVENT_SUBCAT.UPDATE_EVENT_SUBCAT_SUCCESS: {
            return {
                ...state,
                loader: false,
                alertMessage: action.payload.message,
                messageId: 200,
                lists: action.payload.data
            }
        }
  
        case EVENT_SUBCAT.UPDATE_EVENT_SUBCAT_FAIL: {
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
  