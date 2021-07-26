import { DASHBOARD } from "../../constants/actionTypes";
import axios from 'axios';

import {api_url} from "../../util/config";

export const getUsersCount = (token) => {
    return (dispatch) => {
        dispatch({ type: DASHBOARD.USERS_COUNT_REQUEST });
        const AuthStr = 'Bearer '.concat(token);
        const INSTANCE = axios.create({
            headers: {
                'Content-Type': 'application/json',
                'Authorization': AuthStr
            }
        });
        
        INSTANCE.get(api_url + "users/get-users-count")
            .then(function (response) {
                dispatch(usersCountSuccess(response.data));
            })
            .catch(function (error) {
                dispatch(usersCountError(error.message));
            });
    };
};

const usersCountSuccess= (data) => ({
    type: DASHBOARD.USERS_COUNT_SUCCESS,
    payload: data
});

const usersCountError = errorMessage => ({
    type: DASHBOARD.USERS_COUNT_FAIL,
    payload: errorMessage
});

export const getCharterMemberCount = (token) => {
    return (dispatch) => {
        dispatch({ type: DASHBOARD.CHARTER_MEMBER_COUNT_REQUEST });
        const AuthStr = 'Bearer '.concat(token);
        const INSTANCE = axios.create({
            headers: {
                'Content-Type': 'application/json',
                'Authorization': AuthStr
            }
        });
        
        INSTANCE.get(api_url + "charter-membership-subscription/get-count")
            .then(function (response) {
                dispatch(charterMemberCountSuccess(response.data));
            })
            .catch(function (error) {
                dispatch(charterMemberCountError(error.message));
            });
    };
};

const charterMemberCountSuccess= (data) => ({
    type: DASHBOARD.CHARTER_MEMBER_COUNT_SUCCESS,
    payload: data
});

const charterMemberCountError = errorMessage => ({
    type: DASHBOARD.CHARTER_MEMBER_COUNT_FAIL,
    payload: errorMessage
});

export const resetDashboard = () => {
    return (dispatch) => {
        dispatch({ type: DASHBOARD.RESET_DASHBOARD})
    }
}