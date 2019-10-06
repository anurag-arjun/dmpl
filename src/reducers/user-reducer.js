import * as actionTypes from '../types/user-action-types'

const initialState = {
  accounts: '',
  show_login_popup : false,
  is_sign_in: false
}

const loginFormReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case actionTypes.METAMASK_LOGIN : {
      const newState = {...state};
      newState.accounts = actions.payload;
      newState.is_sign_in = true;
      return newState;
    }

    case actionTypes.SHOW_LOGIN_POPUP : {
      const newState = {...state};
      newState.show_login_popup = true;
      return newState;
    }
    case actionTypes.HIDE_LOGIN_POPUP : {
      const newState = {...state};
      newState.show_login_popup = false;
      return newState;
    }
    default:
      return state
  }
}

export default loginFormReducer
