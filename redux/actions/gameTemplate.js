import { GAME_TEMPLATE } from "../../constants/actionTypes";
import axios from 'axios';

import { api_url } from "../../util/config";

export const addGameTemplate = (token, data) => {
  return (dispatch) => {
    dispatch({ type: GAME_TEMPLATE.ADD_GAME_TEMPLATE_REQUEST });
    const AuthStr = 'Bearer '.concat(token);
    const INSTANCE = axios.create({
      headers: {
        'Content-Type': data.length > 0 ? 'application/json' : undefined,
        'Authorization': AuthStr
      }
    });

    INSTANCE.post(api_url + "game-template/add", data)
      .then(function (response) {
        dispatch(addGameTemplateSuccess(response.data));
      })
      .catch(function (error) {
        dispatch(addGameTemplateError(error.message));
      });
  };
};

const addGameTemplateSuccess = (data) => ({
  type: GAME_TEMPLATE.ADD_GAME_TEMPLATE_SUCCESS,
  payload: data
});

const addGameTemplateError = errorMessage => ({
  type: GAME_TEMPLATE.ADD_GAME_TEMPLATE_FAIL,
  payload: errorMessage
});

export const listGameTemplate = (token, pageSize, gameType) => {
  return (dispatch) => {
    dispatch({ type: GAME_TEMPLATE.LIST_GAME_TEMPLATE_REQUEST });
    const AuthStr = 'Bearer '.concat(token);
    const INSTANCE = axios.create({
      headers: {
        'Content-Type': 'application/json',
        'Authorization': AuthStr
      }
    });

    INSTANCE.get(api_url + `game-template/list/${pageSize}/${gameType}`)
      .then(function (response) {
        dispatch(listGameTemplateSuccess(response.data));
      })
      .catch(function (error) {
        dispatch(listGameTemplateError(error.message));
      });
  };
};

export const getAvailableGameTemplate = (token, pageSize, gameType) => {
  return (dispatch) => {
    dispatch({ type: GAME_TEMPLATE.LIST_GAME_TEMPLATE_REQUEST });
    const AuthStr = 'Bearer '.concat(token);
    const INSTANCE = axios.create({
      headers: {
        'Content-Type': 'application/json',
        'Authorization': AuthStr
      }
    });

    INSTANCE.get(api_url + `game-template/availableGig/${pageSize}/${gameType}`)
      .then(function (response) {
        dispatch(listGameTemplateSuccess(response.data));
      })
      .catch(function (error) {
        dispatch(listGameTemplateError(error.message));
      });
  };
};

export const getSubmittedGameTemplate = (token, pageSize, gameType) => {
  return (dispatch) => {
    dispatch({ type: GAME_TEMPLATE.LIST_GAME_TEMPLATE_REQUEST });
    const AuthStr = 'Bearer '.concat(token);
    const INSTANCE = axios.create({
      headers: {
        'Content-Type': 'application/json',
        'Authorization': AuthStr
      }
    });

    INSTANCE.get(api_url + `game-template/submittedGig/${pageSize}/${gameType}`)
      .then(function (response) {
        dispatch(listGameTemplateSuccess(response.data));
      })
      .catch(function (error) {
        dispatch(listGameTemplateError(error.message));
      });
  };
};

const listGameTemplateSuccess = (data) => ({
  type: GAME_TEMPLATE.LIST_GAME_TEMPLATE_SUCCESS,
  payload: data.data
});

const listGameTemplateError = errorMessage => ({
  type: GAME_TEMPLATE.LIST_GAME_TEMPLATE_FAIL,
  payload: errorMessage
});

export const editGameTemplate = (token, data) => {
  return (dispatch) => {
    dispatch({ type: GAME_TEMPLATE.EDIT_GAME_TEMPLATE_REQUEST });
    const AuthStr = 'Bearer '.concat(token);
    const INSTANCE = axios.create({
      headers: {
        'Content-Type': data.length > 0 ? 'application/json' : undefined,
        'Authorization': AuthStr
      }
    });

    INSTANCE.post(api_url + "game-template/edit", data)
      .then(function (response) {
        dispatch(editGameTemplateSuccess(response.data));
      })
      .catch(function (error) {
        dispatch(editGameTemplateError(error.message));
      });
  };
};

const editGameTemplateSuccess = (data) => ({
  type: GAME_TEMPLATE.EDIT_GAME_TEMPLATE_SUCCESS,
  payload: data
});

const editGameTemplateError = errorMessage => ({
  type: GAME_TEMPLATE.EDIT_GAME_TEMPLATE_FAIL,
  payload: errorMessage
});


export const resetGameTemplate = () => {
  return (dispatch) => {
    dispatch({ type: GAME_TEMPLATE.RESET_GAME_TEMPLATE })
  }
}
