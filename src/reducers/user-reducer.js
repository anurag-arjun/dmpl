import * as actionTypes from '../types/user-action-types'

const initialState = {
  accounts: '',
  network: 1,
  show_login_popup : false,
  is_sign_in: false,
  token_address_rep: '0x70459e550254b9d3520a56ee95b78ee4f2dbd846',
  token_address_mat: '0xc82c13004c06E4c627cF2518612A55CE7a3Db699',
  mana: 0,
  add_fund : 0,
  erc20_approve : false,
}

const loginFormReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case actionTypes.METAMASK_LOGIN : {
      const newState = {...state};
      newState.accounts = actions.payload;
      newState.network = actions.network;
      newState.mana = actions.balance;
      newState.add_fund = actions.balance;
      newState.is_sign_in = true;
      return newState;
    }

    case actionTypes.MINUS_MANA : {
      const minus = actions.mana;
      const newState = {...state};
      newState.mana = newState.mana - minus;
      return newState;

    }

    case actionTypes.APPROVE_ERC20 : {
      const newState = {...state};
      newState.erc20_approve = true;
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

    case actionTypes.ADD_FUND_CHANGE : {
      const newState = {...state};
      newState.add_fund = actions.value;
      return newState;
    }

    default:
      return state
  }
}

export default loginFormReducer
