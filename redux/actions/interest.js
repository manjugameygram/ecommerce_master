import { INTEREST } from "../../constants/actionTypes";
import axios from 'axios';

import {api_url} from "../../util/config";

export const addInterest = (token, data) => {
    return (dispatch) => {
        dispatch({ type: INTEREST.ADD_INTEREST_REQUEST });
        const AuthStr = 'Bearer '.concat(token);
        const INSTANCE = axios.create({
            headers: {
                'Content-Type': 'application/json',
                'Authorization': AuthStr
            }
        });

        let inputJSON = JSON.stringify(data);
        
        INSTANCE.post(api_url + "interest/create", inputJSON)
            .then(function (response) {
                dispatch(addInterestSuccess(response.data));
            })
            .catch(function (error) {
                dispatch(addInterestError(error.message));
            });
    };
};

const addInterestSuccess = (data) => ({
    type: INTEREST.ADD_INTEREST_SUCCESS,
    payload: data
});

const addInterestError = errorMessage => ({
    type: INTEREST.ADD_INTEREST_FAIL,
    payload: errorMessage
});

export const listInterest = (token) => {
    return (dispatch) => {
        dispatch({ type: INTEREST.LIST_INTEREST_REQUEST });
        const AuthStr = 'Bearer '.concat(token);
        const INSTANCE = axios.create({
            headers: {
                'Content-Type': 'application/json',
                'Authorization': AuthStr
            }
        });
        
        INSTANCE.get(api_url + "interest/lists")
            .then(function (response) {
                dispatch(listInterestSuccess(response.data));
            })
            .catch(function (error) {
                dispatch(listInterestError(error.message));
            });
    };
};

const listInterestSuccess = (data) => ({
    type: INTEREST.LIST_INTEREST_SUCCESS,
    payload: data.data
});

const listInterestError = errorMessage => ({
    type: INTEREST.LIST_INTEREST_FAIL,
    payload: errorMessage
});

export const deleteInterest = (token, data) => {
    return (dispatch) => {
        dispatch({ type: INTEREST.DELETE_INTEREST_REQUEST });
        const AuthStr = 'Bearer '.concat(token);
        const INSTANCE = axios.create({
            headers: {
                'Content-Type': 'application/json',
                'Authorization': AuthStr
            }
        });

        let inputJSON = JSON.stringify(data);
        
        INSTANCE.post(api_url + "interest/delete", inputJSON)
            .then(function (response) {
                dispatch(deleteInterestSuccess(response.data));
            })
            .catch(function (error) {
                dispatch(deleteInterestError(error.message));
            });
    };
};

const deleteInterestSuccess = (data) => ({
    type: INTEREST.DELETE_INTEREST_SUCCESS,
    payload: data
});

const deleteInterestError = errorMessage => ({
    type: INTEREST.DELETE_INTEREST_FAIL,
    payload: errorMessage
});

export const updateInterest = (token, data) => {
    return (dispatch) => {
        dispatch({ type: INTEREST.UPDATE_INTEREST_REQUEST });
        const AuthStr = 'Bearer '.concat(token);
        const INSTANCE = axios.create({
            headers: {
                'Content-Type': 'application/json',
                'Authorization': AuthStr
            }
        });

        let inputJSON = JSON.stringify(data);
        
        INSTANCE.post(api_url + "interest/update", inputJSON)
            .then(function (response) {
                dispatch(updateInterestSuccess(response.data));
            })
            .catch(function (error) {
                dispatch(updateInterestError(error.message));
            });
    };
};

const updateInterestSuccess = (data) => ({
    type: INTEREST.UPDATE_INTEREST_SUCCESS,
    payload: data
});

const updateInterestError = errorMessage => ({
    type: INTEREST.UPDATE_INTEREST_FAIL,
    payload: errorMessage
});

export const resetInterest = () => {
    return (dispatch) => {
        dispatch({ type: INTEREST.RESET_INTEREST})
    }
}