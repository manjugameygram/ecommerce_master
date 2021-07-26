import { EVENT_TITLE } from "../../constants/actionTypes";
import axios from 'axios';

import {api_url} from "../../util/config";

export const addEventTitle = (token, data) => {
    return (dispatch) => {
        dispatch({ type: EVENT_TITLE.ADD_EVENT_TITLE_REQUEST });
        const AuthStr = 'Bearer '.concat(token);
        const INSTANCE = axios.create({
            headers: {
                'Content-Type': 'application/json',
                'Authorization': AuthStr
            }
        });

        let inputJSON = JSON.stringify(data);
        
        INSTANCE.post(api_url + "event-title/create", inputJSON)
            .then(function (response) {
                dispatch(addEventTitleSuccess(response.data));
            })
            .catch(function (error) {
                dispatch(addEventTitleError(error.message));
            });
    };
};

const addEventTitleSuccess = (data) => ({
    type: EVENT_TITLE.ADD_EVENT_TITLE_SUCCESS,
    payload: data
});

const addEventTitleError = errorMessage => ({
    type: EVENT_TITLE.ADD_EVENT_TITLE_FAIL,
    payload: errorMessage
});

export const listEventTitle = (token) => {
    return (dispatch) => {
        dispatch({ type: EVENT_TITLE.LIST_EVENT_TITLE_REQUEST });
        const AuthStr = 'Bearer '.concat(token);
        const INSTANCE = axios.create({
            headers: {
                'Content-Type': 'application/json',
                'Authorization': AuthStr
            }
        });
        
        INSTANCE.get(api_url + "event-title/lists")
            .then(function (response) {
                dispatch(listEventTitleSuccess(response.data));
            })
            .catch(function (error) {
                dispatch(listEventTitleError(error.message));
            });
    };
};

const listEventTitleSuccess = (data) => ({
    type: EVENT_TITLE.LIST_EVENT_TITLE_SUCCESS,
    payload: data.data
});

const listEventTitleError = errorMessage => ({
    type: EVENT_TITLE.LIST_EVENT_TITLE_FAIL,
    payload: errorMessage
});

export const deleteEventTitle = (token, data) => {
    return (dispatch) => {
        dispatch({ type: EVENT_TITLE.DELETE_EVENT_TITLE_REQUEST });
        const AuthStr = 'Bearer '.concat(token);
        const INSTANCE = axios.create({
            headers: {
                'Content-Type': 'application/json',
                'Authorization': AuthStr
            }
        });

        let inputJSON = JSON.stringify(data);
        
        INSTANCE.post(api_url + "event-title/delete", inputJSON)
            .then(function (response) {
                dispatch(deleteEventTitleSuccess(response.data));
            })
            .catch(function (error) {
                dispatch(deleteEventTitleError(error.message));
            });
    };
};

const deleteEventTitleSuccess = (data) => ({
    type: EVENT_TITLE.DELETE_EVENT_TITLE_SUCCESS,
    payload: data
});

const deleteEventTitleError = errorMessage => ({
    type: EVENT_TITLE.DELETE_EVENT_TITLE_FAIL,
    payload: errorMessage
});

export const updateEventTitle = (token, data) => {
    return (dispatch) => {
        dispatch({ type: EVENT_TITLE.UPDATE_EVENT_TITLE_REQUEST });
        const AuthStr = 'Bearer '.concat(token);
        const INSTANCE = axios.create({
            headers: {
                'Content-Type': 'application/json',
                'Authorization': AuthStr
            }
        });

        let inputJSON = JSON.stringify(data);
        
        INSTANCE.post(api_url + "event-title/update", inputJSON)
            .then(function (response) {
                dispatch(updateEventTitleSuccess(response.data));
            })
            .catch(function (error) {
                dispatch(updateEventTitleError(error.message));
            });
    };
};

const updateEventTitleSuccess = (data) => ({
    type: EVENT_TITLE.UPDATE_EVENT_TITLE_SUCCESS,
    payload: data
});

const updateEventTitleError = errorMessage => ({
    type: EVENT_TITLE.UPDATE_EVENT_TITLE_FAIL,
    payload: errorMessage
});

export const resetEventTitle = () => {
    return (dispatch) => {
        dispatch({ type: EVENT_TITLE.RESET_EVENT_TITLE})
    }
}