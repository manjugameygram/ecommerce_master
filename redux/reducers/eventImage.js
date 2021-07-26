import {
    EVENT_IMAGE
} from "../../constants/actionTypes";
  
  const INIT_STATE = {
    loader: false,
    alertMessage: '',
    messageId: null,
    event_image_types: [],
    event_images: []
  };
  
  
  export default (state = INIT_STATE, action) => {
    switch (action.type) {

        case EVENT_IMAGE.RESET_EVENT_IMAGE: {
            return {
                ...state,
                loader: false,
                alertMessage: '',
                messageId: null
            }
        }
  
        case EVENT_IMAGE.ADD_EVENT_IMAGE_REQUEST: {
            return {
                ...state,
                loader: true
            }
        }
  
        case EVENT_IMAGE.ADD_EVENT_IMAGE_SUCCESS: {
            return {
                ...state,
                loader: false,
                alertMessage: action.payload.message,
                messageId: 200
            }
        }
  
        case EVENT_IMAGE.ADD_EVENT_IMAGE_FAIL: {
            return {
                ...state,
                loader: false,
                alertMessage: action.payload.message,
                messageId: 203
            }
        }

        case EVENT_IMAGE.LIST_EVENT_IMAGE_REQUEST: {
            return {
                ...state,
                loader: true
            }
        }
  
        case EVENT_IMAGE.LIST_EVENT_IMAGE_SUCCESS: {
            return {
                ...state,
                loader: false,
                event_image_types: action.payload
            }
        }
  
        case EVENT_IMAGE.LIST_EVENT_IMAGE_FAIL: {
            return {
                ...state,
                loader: false,
                alertMessage: action.payload.message,
                messageId: 203
            }
        }

        case EVENT_IMAGE.DELETE_EVENT_IMAGE_TYPE_REQUEST: {
            return {
                ...state,
                loader: true
            }
        }
  
        case EVENT_IMAGE.DELETE_EVENT_IMAGE_TYPE_SUCCESS: {
            return {
                ...state,
                loader: false,
                alertMessage: action.payload.message,
                messageId: 200,
                event_image_types: action.payload.data
            }
        }
  
        case EVENT_IMAGE.DELETE_EVENT_IMAGE_TYPE_FAIL: {
            return {
                ...state,
                loader: false,
                alertMessage: action.payload.message,
                messageId: 203
            }
        }

        case EVENT_IMAGE.UPDATE_EVENT_IMAGE_REQUEST: {
            return {
                ...state,
                loader: true
            }
        }
  
        case EVENT_IMAGE.UPDATE_EVENT_IMAGE_SUCCESS: {
            return {
                ...state,
                loader: false,
                alertMessage: action.payload.message,
                messageId: 200,
                event_image_types: action.payload.data
            }
        }
  
        case EVENT_IMAGE.UPDATE_EVENT_IMAGE_FAIL: {
            return {
                ...state,
                loader: false,
                alertMessage: action.payload.message,
                messageId: 203
            }
        }

        case EVENT_IMAGE.LIST_IMAGE_REQUEST: {
            return {
                ...state,
                loader: true
            }
        }
  
        case EVENT_IMAGE.LIST_IMAGE_SUCCESS: {
            return {
                ...state,
                loader: false,
                event_images: action.payload
            }
        }
  
        case EVENT_IMAGE.LIST_IMAGE_FAIL: {
            return {
                ...state,
                loader: false,
                alertMessage: action.payload.message
            }
        }

        case EVENT_IMAGE.DELETE_EVENT_IMAGE_REQUEST: {
            return {
                ...state,
                loader: true
            }
        }
  
        case EVENT_IMAGE.DELETE_EVENT_IMAGE_SUCCESS: {
            return {
                ...state,
                loader: false,
                alertMessage: action.payload.message,
                messageId: 200,
                event_images: action.payload.data
            }
        }
  
        case EVENT_IMAGE.DELETE_EVENT_IMAGE_FAIL: {
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
  