import {
    API_URL,
    LOCATION
} from "./../../config/actionTypes";
  
import axios from 'axios';
  
export const getCountry = () => {
    return (dispatch) => {
        dispatch({ type: LOCATION.COUNTRY_REQUEST });
        const INSTANCE = axios.create({
            headers: {
                'Content-Type': 'application/json'
            }
        });
        
        INSTANCE.get(API_URL + "location/get-countries")
        .then(function (response) {
            if(response.data.messageId === 200){
                dispatch(countryRequestSuccess(response.data));
            } else {
                dispatch(stateRequestFail(response.data.message));
            }
        })
        .catch(function (error) {
            dispatch(countryRequestFail(error.message));
        });
    };
};

const countryRequestSuccess = (data) => ({
    type: LOCATION.COUNTRY_SUCCESS,
    payload: data
});

const countryRequestFail = errorMessage => ({
    type: LOCATION.COUNTRY_FAIL,
    payload: errorMessage
});

export const getStates = (data) => {
    return (dispatch) => {
        dispatch({ type: LOCATION.STATE_REQUEST });
        const INSTANCE = axios.create({
        headers: {
            'Content-Type': 'application/json'
        }
        });

        let inputJSON = JSON.stringify(data);
        
        INSTANCE.post(API_URL + "location/get-states-by-country", inputJSON)
        .then(function (response) {
            if(response.data.messageId === 200){
                dispatch(stateRequestSuccess(response.data));
            } else {
                dispatch(stateRequestFail(response.data.message));
            }
        })
        .catch(function (error) {
            dispatch(stateRequestFail(error.message));
        });
    };
};

const stateRequestSuccess = (data) => ({
    type: LOCATION.STATE_SUCCESS,
    payload: data
});

const stateRequestFail = errorMessage => ({
    type: LOCATION.STATE_FAIL,
    payload: errorMessage
});

export const getCity = (data) => {
    return (dispatch) => {
        dispatch({ type: LOCATION.CITY_REQUEST });
        const INSTANCE = axios.create({
        headers: {
            'Content-Type': 'application/json'
        }
        });

        let inputJSON = JSON.stringify(data);
        
        INSTANCE.post(API_URL + "location/get-cities-by-state", inputJSON)
        .then(function (response) {
            if(response.data.messageId === 200){
                dispatch(cityRequestSuccess(response.data));
            } else {
                dispatch(cityRequestFail(response.data.message));
            }
        })
        .catch(function (error) {
            dispatch(cityRequestFail(error.message));
        });
    };
};

const cityRequestSuccess = (data) => ({
    type: LOCATION.CITY_SUCCESS,
    payload: data
});

const cityRequestFail = errorMessage => ({
    type: LOCATION.CITY_FAIL,
    payload: errorMessage
});
  