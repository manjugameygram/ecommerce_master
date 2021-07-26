import {
    LOCATION
} from "./../../config/actionTypes";
  
  const INIT_STATE = {
    loader: false,
    messageId: null,
    countryList: [],
    stateList: [],
    cityList: []
  };
  
  
  export default (state = INIT_STATE, action) => {
    switch (action.type) {

        case LOCATION.COUNTRY_REQUEST: {
            return {
                ...state,
                loader: true
            }
        }

        case LOCATION.COUNTRY_SUCCESS: {
            return {
                ...state,
                loader: false,
                messageId: 200,
                countryList: action.payload.data
            }
        }
  
        case LOCATION.COUNTRY_FAIL: {
            return {
                ...state,
                loader: false,
                messageId: 203
            }
        }

        case LOCATION.STATE_REQUEST: {
            return {
                ...state,
                loader: true
            }
        }

        case LOCATION.STATE_SUCCESS: {
            return {
                ...state,
                loader: false,
                stateList: action.payload.data,
                messageId: 204
            }
        }
  
        case LOCATION.STATE_FAIL: {
            return {
                ...state,
                loader: false,
                messageId: 203
            }
        }

        case LOCATION.CITY_REQUEST: {
            return {
                ...state,
                loader: true
            }
        }

        case LOCATION.CITY_SUCCESS: {
            return {
                ...state,
                loader: false,
                messageId: 205,
                cityList: action.payload.data
            }
        }
  
        case LOCATION.CITY_FAIL: {
            return {
                ...state,
                loader: false,
                messageId: 203
            }
        }
  
        default:
            return state;
    }
  }
  