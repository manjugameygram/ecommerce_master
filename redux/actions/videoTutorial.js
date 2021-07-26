import { VIDEO_TUTORIAL } from "../../constants/actionTypes";
import axios from 'axios';

import {api_url} from "../../util/config";

export const addVideoTutorial = (token, data) => {
    return (dispatch) => {
        dispatch({ type: VIDEO_TUTORIAL.ADD_VIDEO_TUTORIAL_REQUEST });
        const AuthStr = 'Bearer '.concat(token);
        const INSTANCE = axios.create({
            headers: {
                'Content-Type': 'application/json',
                'Authorization': AuthStr
            }
        });

        let inputJSON = JSON.stringify(data);
        
        INSTANCE.post(api_url + "video-tutorial/create", inputJSON)
            .then(function (response) {
                dispatch(addVideoTutorialSuccess(response.data));
            })
            .catch(function (error) {
                dispatch(addVideoTutorialError(error.message));
            });
    };
};

const addVideoTutorialSuccess = (data) => ({
    type: VIDEO_TUTORIAL.ADD_VIDEO_TUTORIAL_SUCCESS,
    payload: data
});

const addVideoTutorialError = errorMessage => ({
    type: VIDEO_TUTORIAL.ADD_VIDEO_TUTORIAL_FAIL,
    payload: errorMessage
});

export const listVideoTutorial = (token) => {
    return (dispatch) => {
        dispatch({ type: VIDEO_TUTORIAL.LIST_VIDEO_TUTORIAL_REQUEST });
        const AuthStr = 'Bearer '.concat(token);
        const INSTANCE = axios.create({
            headers: {
                'Content-Type': 'application/json',
                'Authorization': AuthStr
            }
        });
        
        INSTANCE.get(api_url + "video-tutorial/lists")
            .then(function (response) {
                dispatch(listVideoTutorialSuccess(response.data));
            })
            .catch(function (error) {
                dispatch(listVideoTutorialError(error.message));
            });
    };
};

const listVideoTutorialSuccess = (data) => ({
    type: VIDEO_TUTORIAL.LIST_VIDEO_TUTORIAL_SUCCESS,
    payload: data.data
});

const listVideoTutorialError = errorMessage => ({
    type: VIDEO_TUTORIAL.LIST_VIDEO_TUTORIAL_FAIL,
    payload: errorMessage
});

export const deleteVideoTutorial = (token, data) => {
    return (dispatch) => {
        dispatch({ type: VIDEO_TUTORIAL.DELETE_VIDEO_TUTORIAL_REQUEST });
        const AuthStr = 'Bearer '.concat(token);
        const INSTANCE = axios.create({
            headers: {
                'Content-Type': 'application/json',
                'Authorization': AuthStr
            }
        });

        let inputJSON = JSON.stringify(data);
        
        INSTANCE.post(api_url + "video-tutorial/delete", inputJSON)
            .then(function (response) {
                dispatch(deleteVideoTutorialSuccess(response.data));
            })
            .catch(function (error) {
                dispatch(deleteVideoTutorialError(error.message));
            });
    };
};

const deleteVideoTutorialSuccess = (data) => ({
    type: VIDEO_TUTORIAL.DELETE_VIDEO_TUTORIAL_SUCCESS,
    payload: data
});

const deleteVideoTutorialError = errorMessage => ({
    type: VIDEO_TUTORIAL.DELETE_VIDEO_TUTORIAL_FAIL,
    payload: errorMessage
});

export const updateVideoTutorial = (token, data) => {
    return (dispatch) => {
        dispatch({ type: VIDEO_TUTORIAL.UPDATE_VIDEO_TUTORIAL_REQUEST });
        const AuthStr = 'Bearer '.concat(token);
        const INSTANCE = axios.create({
            headers: {
                'Content-Type': 'application/json',
                'Authorization': AuthStr
            }
        });

        let inputJSON = JSON.stringify(data);
        
        INSTANCE.post(api_url + "video-tutorial/update", inputJSON)
            .then(function (response) {
                dispatch(updateVideoTutorialSuccess(response.data));
            })
            .catch(function (error) {
                dispatch(updateVideoTutorialError(error.message));
            });
    };
};

const updateVideoTutorialSuccess = (data) => ({
    type: VIDEO_TUTORIAL.UPDATE_VIDEO_TUTORIAL_SUCCESS,
    payload: data
});

const updateVideoTutorialError = errorMessage => ({
    type: VIDEO_TUTORIAL.UPDATE_VIDEO_TUTORIAL_FAIL,
    payload: errorMessage
});

export const resetVideoTutorial = () => {
    return (dispatch) => {
        dispatch({ type: VIDEO_TUTORIAL.RESET_VIDEO_TUTORIAL})
    }
}