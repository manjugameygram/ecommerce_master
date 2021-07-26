import { USERS } from "../../constants/actionTypes";
import axios from 'axios';
import lodash from "lodash";

import {api_url} from "../../util/config";

export const addUser = (token, data) => {
    return (dispatch) => {
        dispatch({ type: USERS.ADD_USERS_REQUEST });
        const AuthStr = 'Bearer '.concat(token);
        const INSTANCE = axios.create({
            headers: {
                'Content-Type': 'application/json',
                'Authorization': AuthStr
            }
        });

        let inputJSON = JSON.stringify(data);
        
        INSTANCE.post(api_url + "users/add", inputJSON)
            .then(function (response) {
                dispatch(addUsersSuccess(response.data));
            })
            .catch(function (error) {
                dispatch(addUsersError(error.message));
            });
    };
};

const addUsersSuccess= (data) => ({
    type: USERS.ADD_USERS_SUCCESS,
    payload: data
});

const addUsersError = errorMessage => ({
    type: USERS.ADD_USERS_FAIL,
    payload: errorMessage
});

export const getUser = (token, data) => {
    return (dispatch) => {
        dispatch({ type: USERS.GET_USER_REQUEST });
        const AuthStr = 'Bearer '.concat(token);
        const INSTANCE = axios.create({
            headers: {
                'Content-Type': 'application/json',
                'Authorization': AuthStr
            }
        });

        let inputJSON = JSON.stringify(data);
        INSTANCE.post(api_url + "users/get-by-id", inputJSON)
            .then(function (response) {
                const INSTANCE1 = axios.create({
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                
                INSTANCE1.get(api_url + "location/get-countries")
                .then(function (resp) {
                    if(resp.data.messageId === 200){
                        let countryObj = lodash.find(resp.data.data, function (o) { return o.name === response.data.data.country; });
                        const INSTANCE2 = axios.create({
                            headers: {
                                'Content-Type': 'application/json'
                            }
                        });
                        let inputJSON2 = JSON.stringify({
                            countryCode: countryObj.isoCode
                        });
                        INSTANCE2.post(api_url + "location/get-states-by-country", inputJSON2)
                        .then(function (resp1) {
                            if(resp1.data.messageId === 200){
                                let stateObj = lodash.find(resp1.data.data, function (o) { return o.name === response.data.data.state; });
                                let userResp = response.data.data;
                                userResp.country = countryObj.isoCode;
                                userResp.state = stateObj.isoCode;
                                dispatch(getUserSuccess(userResp));
                            } else {
                                dispatch(getUserError(response.data));
                            }
                        })
                        .catch(function (error) {
                            dispatch(getUserError(error.message));
                        });
                    } else {
                        dispatch(getUserError(response.data));
                    }
                })
                .catch(function (error) {
                    dispatch(getUserError(error.message));
                });
            })
            .catch(function (error) {
                dispatch(getUserError(error.message));
            });
    };
};

const getUserSuccess= (data) => ({
    type: USERS.GET_USER_SUCCESS,
    payload: data
});

const getUserError = errorMessage => ({
    type: USERS.GET_USER_FAIL,
    payload: errorMessage
});

export const listUsers = (token) => {
    return (dispatch) => {
        dispatch({ type: USERS.LIST_USERS_REQUEST });
        const AuthStr = 'Bearer '.concat(token);
        const INSTANCE = axios.create({
            headers: {
                'Content-Type': 'application/json',
                'Authorization': AuthStr
            }
        });
        
        INSTANCE.get(api_url + "users/list")
            .then(function (response) {
                dispatch(listUsersSuccess(response.data));
            })
            .catch(function (error) {
                dispatch(listUsersError(error.message));
            });
    };
};

const listUsersSuccess= (data) => ({
    type: USERS.LIST_USERS_SUCCESS,
    payload: data.data
});

const listUsersError = errorMessage => ({
    type: USERS.LIST_USERS_FAIL,
    payload: errorMessage
});

export const deleteUser = (token, data) => {
    return (dispatch) => {
        dispatch({ type: USERS.DELETE_USERS_REQUEST });
        const AuthStr = 'Bearer '.concat(token);
        const INSTANCE = axios.create({
            headers: {
                'Content-Type': 'application/json',
                'Authorization': AuthStr
            }
        });

        let inputJSON = JSON.stringify(data);
        
        INSTANCE.post(api_url + "users/delete", inputJSON)
            .then(function (response) {
                dispatch(deleteUsersSuccess(response.data));
            })
            .catch(function (error) {
                dispatch(deleteUsersError(error.message));
            });
    };
};

const deleteUsersSuccess= (data) => ({
    type: USERS.DELETE_USERS_SUCCESS,
    payload: data
});

const deleteUsersError = errorMessage => ({
    type: USERS.DELETE_USERS_FAIL,
    payload: errorMessage
});

export const updateUser = (token, data) => {
    return (dispatch) => {
        dispatch({ type: USERS.UPDATE_USERS_REQUEST });
        const AuthStr = 'Bearer '.concat(token);
        const INSTANCE = axios.create({
            headers: {
                'Content-Type': 'application/json',
                'Authorization': AuthStr
            }
        });

        let inputJSON = JSON.stringify(data);
        
        INSTANCE.post(api_url + "users/update", inputJSON)
            .then(function (response) {
                dispatch(updateUsersSuccess(response.data));
            })
            .catch(function (error) {
                dispatch(updateUsersError(error.message));
            });
    };
};

const updateUsersSuccess= (data) => ({
    type: USERS.UPDATE_USERS_SUCCESS,
    payload: data
});

const updateUsersError = errorMessage => ({
    type: USERS.UPDATE_USERS_FAIL,
    payload: errorMessage
});

export const resetUser = () => {
    return (dispatch) => {
        dispatch({ type: USERS.RESET_USERS})
    }
}