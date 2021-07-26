import {
  ROLES
} from "../../constants/actionTypes";

const INIT_STATE = {
  loader: false,
  alertMessage: '',
  messageId: null,
  lists: []
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {

    case ROLES.RESET_ROLES: {
      return {
        ...state,
        loader: false,
        alertMessage: '',
        messageId: null
      }
    }

    case ROLES.LIST_ROLES_REQUEST: {
      return {
        ...state,
        loader: true,
        alertMessage: '',
        messageId: null
      }
    }

    case ROLES.LIST_ROLES_SUCCESS: {
      return {
        ...state,
        loader: false,
        lists: action.payload,
        alertMessage: '',
        messageId: 200
      }
    }

    case ROLES.LIST_ROLES_FAIL: {
      return {
        ...state,
        loader: false,
        alertMessage: action.payload.message,
      }
    }

    default:
      return state;
  }
}
