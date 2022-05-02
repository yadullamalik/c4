// action types

export const LOGIN = "LOGIN";
export const ADD_ORDER = "ADD_ORDER";
export const SORT = "SORT";

// Action Creators
export const addLogin = (data) => ({
  type: LOGIN,
  payload: data,
});

export const addOrder = (data) => ({
  type: ADD_ORDER,
  payload: data,
});

export const sort = (by) => ({
  type: SORT,
  payload: by,
});
