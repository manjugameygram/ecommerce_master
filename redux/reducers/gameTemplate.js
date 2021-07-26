import {
  GAME_TEMPLATE
} from "../../constants/actionTypes";

const INIT_STATE = {
  loader: false,
  alertMessage: '',
  messageId: null,
  lists: []
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {

    case GAME_TEMPLATE.RESET_GAME_TEMPLATE: {
      return {
        ...state,
        loader: false,
        alertMessage: '',
        messageId: null
      }
    }

    case GAME_TEMPLATE.ADD_GAME_TEMPLATE_REQUEST: {
      return {
        ...state,
        loader: true
      }
    }

    case GAME_TEMPLATE.ADD_GAME_TEMPLATE_SUCCESS: {
      return {
        ...state,
        loader: false,
        alertMessage: action.payload.message,
        messageId: 200
      }
    }

    case GAME_TEMPLATE.ADD_GAME_TEMPLATE_FAIL: {
      return {
        ...state,
        loader: false,
        alertMessage: action.payload.message,
        messageId: 203
      }
    }
    case GAME_TEMPLATE.EDIT_GAME_TEMPLATE_REQUEST: {
      return {
        ...state,
        loader: true
      }
    }

    case GAME_TEMPLATE.EDIT_GAME_TEMPLATE_SUCCESS: {
      return {
        ...state,
        loader: false,
        alertMessage: action.payload.message,
        messageId: 200
      }
    }

    case GAME_TEMPLATE.EDIT_GAME_TEMPLATE_FAIL: {
      return {
        ...state,
        loader: false,
        alertMessage: action.payload.message,
        messageId: 203
      }
    }

    case GAME_TEMPLATE.LIST_GAME_TEMPLATE_REQUEST: {
      return {
        ...state,
        loader: true
      }
    }

    case GAME_TEMPLATE.LIST_GAME_TEMPLATE_SUCCESS: {
      return {
        ...state,
        loader: false,
        lists: action.payload,
        messageId: 200
      }
    }

    case GAME_TEMPLATE.LIST_GAME_TEMPLATE_FAIL: {
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
