import {
    VIDEO_TUTORIAL
} from "../../constants/actionTypes";
  
  const INIT_STATE = {
    loader: false,
    alertMessage: '',
    messageId: null,
    lists: []
  };
  
  
  export default (state = INIT_STATE, action) => {
    switch (action.type) {

        case VIDEO_TUTORIAL.RESET_VIDEO_TUTORIAL: {
            return {
                ...state,
                loader: false,
                alertMessage: '',
                messageId: null
            }
        }
  
        case VIDEO_TUTORIAL.ADD_VIDEO_TUTORIAL_REQUEST: {
            return {
                ...state,
                loader: true
            }
        }
  
        case VIDEO_TUTORIAL.ADD_VIDEO_TUTORIAL_SUCCESS: {
            return {
                ...state,
                loader: false,
                alertMessage: action.payload.message,
                messageId: 200
            }
        }
  
        case VIDEO_TUTORIAL.ADD_VIDEO_TUTORIAL_FAIL: {
            return {
                ...state,
                loader: false,
                alertMessage: action.payload.message,
                messageId: 203
            }
        }

        case VIDEO_TUTORIAL.LIST_VIDEO_TUTORIAL_REQUEST: {
            return {
                ...state,
                loader: true
            }
        }
  
        case VIDEO_TUTORIAL.LIST_VIDEO_TUTORIAL_SUCCESS: {
            return {
                ...state,
                loader: false,
                lists: action.payload
            }
        }
  
        case VIDEO_TUTORIAL.LIST_VIDEO_TUTORIAL_FAIL: {
            return {
                ...state,
                loader: false,
                alertMessage: action.payload.message
            }
        }

        case VIDEO_TUTORIAL.DELETE_VIDEO_TUTORIAL_REQUEST: {
            return {
                ...state,
                loader: true
            }
        }
  
        case VIDEO_TUTORIAL.DELETE_VIDEO_TUTORIAL_SUCCESS: {
            return {
                ...state,
                loader: false,
                alertMessage: action.payload.message,
                messageId: 200,
                lists: action.payload.data
            }
        }
  
        case VIDEO_TUTORIAL.DELETE_VIDEO_TUTORIAL_FAIL: {
            return {
                ...state,
                loader: false,
                alertMessage: action.payload.message,
                messageId: 203
            }
        }

        case VIDEO_TUTORIAL.UPDATE_VIDEO_TUTORIAL_REQUEST: {
            return {
                ...state,
                loader: true
            }
        }
  
        case VIDEO_TUTORIAL.UPDATE_VIDEO_TUTORIAL_SUCCESS: {
            return {
                ...state,
                loader: false,
                alertMessage: action.payload.message,
                messageId: 200,
                lists: action.payload.data
            }
        }
  
        case VIDEO_TUTORIAL.UPDATE_VIDEO_TUTORIAL_FAIL: {
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
  