import * as actionTypes from '../types/popup-action-types'

const initialState = {
  add_fund : false,
  connect_wallet : false,
  matic_network : false,
  login_popup : false,
  not_prt_o_d : false,
  why_matic : false,
  why_wallet : false
}

const loginFormReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case actionTypes.ADD_FUND_O : {
      const newState = {...state};
      newState.add_fund = true;
      return newState;
    }
    case actionTypes.CONNECT_WALLET_O : {
      const newState = {...state};
      newState.connect_wallet = true;
      return newState;
    }
    case actionTypes.LOGIN_POPUP_O : {
      const newState = {...state};
      newState.login_popup = true;
      return newState;
    }
    case actionTypes.NOT_PRT_O_D_O : {
      const newState = {...state};
      newState.not_prt_o_d = true;
      return newState;
    }
    case actionTypes.WHY_MATIC_O : {
      const newState = {...state};
      newState.why_matic = true;
      return newState;
    }
    case actionTypes.WHY_WALLET_O : {
      const newState = {...state};
      newState.why_wallet = true;
      return newState;
    }
    case actionTypes.MATIC_NET_O : {
      const newState = {...state};
      newState.matic_network = true;
      return newState;
    }

    case actionTypes.ADD_FUND_C : {
      const newState = {...state};
      newState.add_fund = false;
      return newState;
    }
    case actionTypes.CONNECT_WALLET_C : {
      const newState = {...state};
      newState.connect_wallet = false;
      return newState;
    }
    case actionTypes.LOGIN_POPUP_C : {
      const newState = {...state};
      newState.login_popup = false;
      return newState;
    }
    case actionTypes.NOT_PRT_O_D_C : {
      const newState = {...state};
      newState.not_prt_o_d = false;
      return newState;
    }
    case actionTypes.WHY_MATIC_C : {
      const newState = {...state};
      newState.why_matic = false;
      return newState;
    }
    case actionTypes.WHY_WALLET_C : {
      const newState = {...state};
      newState.why_wallet = false;
      return newState;
    }
    case actionTypes.MATIC_NET_C : {
      const newState = {...state};
      newState.matic_network = false;
      return newState;
    }
    default:
      return state
  }
}

export default loginFormReducer
