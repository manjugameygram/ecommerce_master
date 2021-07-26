import { EVENT_SUBCAT } from "../../constants/actionTypes";
import axios from 'axios';

import {api_url} from "../../util/config";

export const addEventSubCategory = (token, data) => {
    return (dispatch) => {
        dispatch({ type: EVENT_SUBCAT.ADD_EVENT_SUBCAT_REQUEST });
        const AuthStr = 'Bearer '.concat(token);
        const INSTANCE = axios.create({
            headers: {
                'Content-Type': 'application/json',
                'Authorization': AuthStr
            }
        });

        let inputJSON = JSON.stringify(data);
        
        INSTANCE.post(api_url + "event-subcategory/create", inputJSON)
            .then(function (response) {
                dispatch(addEventSubCategorySuccess(response.data));
            })
            .catch(function (error) {
                dispatch(addEventSubCategoryError(error.message));
            });
    };
};

const addEventSubCategorySuccess = (data) => ({
    type: EVENT_SUBCAT.ADD_EVENT_SUBCAT_SUCCESS,
    payload: data
});

const addEventSubCategoryError = errorMessage => ({
    type: EVENT_SUBCAT.ADD_EVENT_SUBCAT_FAIL,
    payload: errorMessage
});

export const listEventSubCategory = (token) => {
    return (dispatch) => {
        dispatch({ type: EVENT_SUBCAT.LIST_EVENT_SUBCAT_REQUEST });
        const AuthStr = 'Bearer '.concat(token);
        const INSTANCE = axios.create({
            headers: {
                'Content-Type': 'application/json',
                'Authorization': AuthStr
            }
        });
        
        INSTANCE.get(api_url + "event-subcategory/lists")
            .then(function (response) {
                dispatch(listEventSubCategorySuccess(response.data));
            })
            .catch(function (error) {
                dispatch(listEventSubCategoryError(error.message));
            });
    };
};

const listEventSubCategorySuccess = (data) => ({
    type: EVENT_SUBCAT.LIST_EVENT_SUBCAT_SUCCESS,
    payload: data.data
});

const listEventSubCategoryError = errorMessage => ({
    type: EVENT_SUBCAT.LIST_EVENT_SUBCAT_FAIL,
    payload: errorMessage
});

export const deleteEventSubCategory = (token, data) => {
    return (dispatch) => {
        dispatch({ type: EVENT_SUBCAT.DELETE_EVENT_SUBCAT_REQUEST });
        const AuthStr = 'Bearer '.concat(token);
        const INSTANCE = axios.create({
            headers: {
                'Content-Type': 'application/json',
                'Authorization': AuthStr
            }
        });

        let inputJSON = JSON.stringify(data);
        
        INSTANCE.post(api_url + "event-subcategory/delete", inputJSON)
            .then(function (response) {
                dispatch(deleteEventSubCategorySuccess(response.data));
            })
            .catch(function (error) {
                dispatch(deleteEventSubCategoryError(error.message));
            });
    };
};

const deleteEventSubCategorySuccess = (data) => ({
    type: EVENT_SUBCAT.DELETE_EVENT_SUBCAT_SUCCESS,
    payload: data
});

const deleteEventSubCategoryError = errorMessage => ({
    type: EVENT_SUBCAT.DELETE_EVENT_SUBCAT_FAIL,
    payload: errorMessage
});

export const updateEventSubCategory = (token, data) => {
    return (dispatch) => {
        dispatch({ type: EVENT_SUBCAT.UPDATE_EVENT_SUBCAT_REQUEST });
        const AuthStr = 'Bearer '.concat(token);
        const INSTANCE = axios.create({
            headers: {
                'Content-Type': 'application/json',
                'Authorization': AuthStr
            }
        });

        let inputJSON = JSON.stringify(data);
        
        INSTANCE.post(api_url + "event-subcategory/update", inputJSON)
            .then(function (response) {
                dispatch(updateEventSubCategorySuccess(response.data));
            })
            .catch(function (error) {
                dispatch(updateEventSubCategoryError(error.message));
            });
    };
};

const updateEventSubCategorySuccess = (data) => ({
    type: EVENT_SUBCAT.UPDATE_EVENT_SUBCAT_SUCCESS,
    payload: data
});

const updateEventSubCategoryError = errorMessage => ({
    type: EVENT_SUBCAT.UPDATE_EVENT_SUBCAT_FAIL,
    payload: errorMessage
});

export const resetEventSubCategory = () => {
    return (dispatch) => {
        dispatch({ type: EVENT_SUBCAT.RESET_EVENT_SUBCAT})
    }
}