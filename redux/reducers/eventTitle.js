import {
    EVENT_TITLE
} from "../../constants/actionTypes";
  
  const INIT_STATE = {
    loader: false,
    alertMessage: '',
    messageId: null,
    lists: []
  };
  
  
  export default (state = INIT_STATE, action) => {
    switch (action.type) {

        case EVENT_TITLE.RESET_EVENT_TITLE: {
            return {
                ...state,
                loader: false,
                alertMessage: '',
                messageId: null
            }
        }
  
        case EVENT_TITLE.ADD_EVENT_TITLE_REQUEST: {
            return {
                ...state,
                loader: true
            }
        }
  
        case EVENT_TITLE.ADD_EVENT_TITLE_SUCCESS: {
            return {
                ...state,
                loader: false,
                alertMessage: action.payload.message,
                messageId: 200
            }
        }
  
        case EVENT_TITLE.ADD_EVENT_TITLE_FAIL: {
            return {
                ...state,
                loader: false,
                alertMessage: action.payload.message,
                messageId: 203
            }
        }

        case EVENT_TITLE.LIST_EVENT_TITLE_REQUEST: {
            return {
                ...state,
                loader: true
            }
        }
  
        case EVENT_TITLE.LIST_EVENT_TITLE_SUCCESS: {
            return {
                ...state,
                loader: false,
                lists: action.payload
            }
        }
  
        case EVENT_TITLE.LIST_EVENT_TITLE_FAIL: {
            return {
                ...state,
                loader: false,
                alertMessage: action.payload.message,
                messageId: 203
            }
        }

        case EVENT_TITLE.DELETE_EVENT_TITLE_REQUEST: {
            return {
                ...state,
                loader: true
            }
        }
  
        case EVENT_TITLE.DELETE_EVENT_TITLE_SUCCESS: {
            return {
                ...state,
                loader: false,
                alertMessage: action.payload.message,
                messageId: 200,
                lists: action.payload.data
            }
        }
  
        case EVENT_TITLE.DELETE_EVENT_TITLE_FAIL: {
            return {
                ...state,
                loader: false,
                alertMessage: action.payload.message,
                messageId: 203
            }
        }

        case EVENT_TITLE.UPDATE_EVENT_TITLE_REQUEST: {
            return {
                ...state,
                loader: true
            }
        }
  
        case EVENT_TITLE.UPDATE_EVENT_TITLE_SUCCESS: {
            return {
                ...state,
                loader: false,
                alertMessage: action.payload.message,
                messageId: 200,
                lists: action.payload.data
            }
        }
  
        case EVENT_TITLE.UPDATE_EVENT_TITLE_FAIL: {
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
  