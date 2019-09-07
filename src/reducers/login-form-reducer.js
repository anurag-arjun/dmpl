import * as actionTypes from "../types/landing-page-types";

const initialState = {
  id : '',
  password : ''
}

const loginFormReducer = (state = initialState, actions) => {
  switch (actions.type) {
    default:
      return state;

  }
}

export default loginFormReducer;