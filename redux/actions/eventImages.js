import { EVENT_IMAGE } from "../../constants/actionTypes";
import axios from 'axios';

import {api_url} from "../../util/config";

export const addEventImageType = (token, data) => {
    return (dispatch) => {
        dispatch({ type: EVENT_IMAGE.ADD_EVENT_IMAGE_REQUEST });
        const AuthStr = 'Bearer '.concat(token);
        const INSTANCE = axios.create({
            headers: {
                'Content-Type': 'application/json',
                'Authorization': AuthStr
            }
        });

        let inputJSON = JSON.stringify(data);
        
        INSTANCE.post(api_url + "event-images/create", inputJSON)
            .then(function (response) {
                dispatch(addEventImageTypeSuccess(response.data));
            })
            .catch(function (error) {
                dispatch(addEventImageTypeError(error.message));
            });
    };
};

const addEventImageTypeSuccess = (data) => ({
    type: EVENT_IMAGE.ADD_EVENT_IMAGE_SUCCESS,
    payload: data
});

const addEventImageTypeError = errorMessage => ({
    type: EVENT_IMAGE.ADD_EVENT_IMAGE_FAIL,
    payload: errorMessage
});

export const listEventImageType = (token) => {
    return (dispatch) => {
        dispatch({ type: EVENT_IMAGE.LIST_EVENT_IMAGE_REQUEST });
        const AuthStr = 'Bearer '.concat(token);
        const INSTANCE = axios.create({
            headers: {
                'Content-Type': 'application/json',
                'Authorization': AuthStr
            }
        });
        
        INSTANCE.get(api_url + "event-images/lists")
            .then(function (response) {
                dispatch(listEventImageTypeSuccess(response.data));
            })
            .catch(function (error) {
                dispatch(listEventImageTypeError(error.message));
            });
    };
};

const listEventImageTypeSuccess = (data) => ({
    type: EVENT_IMAGE.LIST_EVENT_IMAGE_SUCCESS,
    payload: data.data
});

const listEventImageTypeError = errorMessage => ({
    type: EVENT_IMAGE.LIST_EVENT_IMAGE_FAIL,
    payload: errorMessage
});

export const deleteEventImageType = (token, data) => {
    return (dispatch) => {
        dispatch({ type: EVENT_IMAGE.DELETE_EVENT_IMAGE_TYPE_REQUEST });
        const AuthStr = 'Bearer '.concat(token);
        const INSTANCE = axios.create({
            headers: {
                'Content-Type': 'application/json',
                'Authorization': AuthStr
            }
        });

        let inputJSON = JSON.stringify(data);
        
        INSTANCE.post(api_url + "event-images/delete", inputJSON)
            .then(function (response) {
                dispatch(deleteEventImageTypeSuccess(response.data));
            })
            .catch(function (error) {
                dispatch(deleteEventImageTypeError(error.message));
            });
    };
};

const deleteEventImageTypeSuccess = (data) => ({
    type: EVENT_IMAGE.DELETE_EVENT_IMAGE_TYPE_SUCCESS,
    payload: data
});

const deleteEventImageTypeError = errorMessage => ({
    type: EVENT_IMAGE.DELETE_EVENT_IMAGE_TYPE_FAIL,
    payload: errorMessage
});

export const updateEventImageType = (token, data) => {
    return (dispatch) => {
        dispatch({ type: EVENT_IMAGE.UPDATE_EVENT_IMAGE_REQUEST });
        const AuthStr = 'Bearer '.concat(token);
        const INSTANCE = axios.create({
            headers: {
                'Content-Type': 'application/json',
                'Authorization': AuthStr
            }
        });

        let inputJSON = JSON.stringify(data);
        
        INSTANCE.post(api_url + "event-images/update", inputJSON)
            .then(function (response) {
                dispatch(updateEventImageTypeSuccess(response.data));
            })
            .catch(function (error) {
                dispatch(updateEventImageTypeError(error.message));
            });
    };
};

const updateEventImageTypeSuccess = (data) => ({
    type: EVENT_IMAGE.UPDATE_EVENT_IMAGE_SUCCESS,
    payload: data
});

const updateEventImageTypeError = errorMessage => ({
    type: EVENT_IMAGE.UPDATE_EVENT_IMAGE_FAIL,
    payload: errorMessage
});

export const resetEventImageType = () => {
    return (dispatch) => {
        dispatch({ type: EVENT_IMAGE.RESET_EVENT_IMAGE})
    }
}

export const listEventImages = (token) => {
    return (dispatch) => {
        dispatch({ type: EVENT_IMAGE.LIST_IMAGE_REQUEST });
        const AuthStr = 'Bearer '.concat(token);
        const INSTANCE = axios.create({
            headers: {
                'Content-Type': 'application/json',
                'Authorization': AuthStr
            }
        });
        
        INSTANCE.get(api_url + "event-images/image-lists")
            .then(function (response) {
                dispatch(listEventImagesSuccess(response.data));
            })
            .catch(function (error) {
                dispatch(listEventImagesError(error.message));
            });
    };
};

const listEventImagesSuccess = (data) => ({
    type: EVENT_IMAGE.LIST_IMAGE_SUCCESS,
    payload: data.data
});

const listEventImagesError = errorMessage => ({
    type: EVENT_IMAGE.LIST_IMAGE_FAIL,
    payload: errorMessage
});

export const deleteEventImage = (token, data) => {
    return (dispatch) => {
        dispatch({ type: EVENT_IMAGE.DELETE_EVENT_IMAGE_REQUEST });
        const AuthStr = 'Bearer '.concat(token);
        const INSTANCE = axios.create({
            headers: {
                'Content-Type': 'application/json',
                'Authorization': AuthStr
            }
        });

        let inputJSON = JSON.stringify(data);
        
        INSTANCE.post(api_url + "event-images/delete-image", inputJSON)
            .then(function (response) {
                dispatch(deleteEventImageSuccess(response.data));
            })
            .catch(function (error) {
                dispatch(deleteEventImageError(error.message));
            });
    };
};

const deleteEventImageSuccess = (data) => ({
    type: EVENT_IMAGE.DELETE_EVENT_IMAGE_SUCCESS,
    payload: data
});

const deleteEventImageError = errorMessage => ({
    type: EVENT_IMAGE.DELETE_EVENT_IMAGE_FAIL,
    payload: errorMessage
});