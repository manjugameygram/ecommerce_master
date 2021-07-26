import { ROLES } from "../../constants/actionTypes";
import axios from 'axios';

import { api_url } from "../../util/config";

export const listRoles = (token) => {
  return (dispatch) => {
    dispatch({ type: ROLES.LIST_ROLES_REQUEST });
    const AuthStr = 'Bearer '.concat(token);
    const INSTANCE = axios.create({
      headers: {
        'Content-Type': 'application/json',
        'Authorization': AuthStr
      }
    });

    INSTANCE.get(api_url + "roles/list")
      .then(function (response) {
        dispatch(listRolesSuccess(response.data));
      })
      .catch(function (error) {
        dispatch(listRolesError(error.message));
      });
  };
};

const listRolesSuccess = (data) => ({
  type: ROLES.LIST_ROLES_SUCCESS,
  payload: data.data
});

const listRolesError = errorMessage => ({
  type: ROLES.LIST_ROLES_FAIL,
  payload: errorMessage
});

export const resetRoles = () => {
  return (dispatch) => {
    dispatch({ type: ROLES.RESET_ROLES })
  }
}
