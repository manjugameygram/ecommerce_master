import { CHARTER_MEMBER } from "../../constants/actionTypes";
import axios from 'axios';

import {api_url} from "../../util/config";

export const listCharterMember = (token) => {
    return (dispatch) => {
        dispatch({ type: CHARTER_MEMBER.LIST_CHARTER_MEMBER_REQUEST });
        const AuthStr = 'Bearer '.concat(token);
        const INSTANCE = axios.create({
            headers: {
                'Content-Type': 'application/json',
                'Authorization': AuthStr
            }
        });
        
        INSTANCE.get(api_url + "charter-membership-subscription/list")
            .then(function (response) {
                dispatch(listCharterMemberSuccess(response.data));
            })
            .catch(function (error) {
                dispatch(listCharterMemberError(error.message));
            });
    };
};

const listCharterMemberSuccess= (data) => ({
    type: CHARTER_MEMBER.LIST_CHARTER_MEMBER_SUCCESS,
    payload: data.data
});

const listCharterMemberError = errorMessage => ({
    type: CHARTER_MEMBER.LIST_CHARTER_MEMBER_FAIL,
    payload: errorMessage
});