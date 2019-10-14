import * as types from "../types/user-action-types";
import { login_popup_c } from './popup_actions';
import * as matic_actions from './blockchain_func.js';

export const matamask_login = () => async (dispatch, getState) => {

    if (!web3) {
      try {
        await typeof window.ethereum;
      } catch (error) {
        window.alert('You need to allow Metmask Idiot.');
        return;
      }
    }

    //check if metamask is installed
    let ethereum = window.ethereum;
    if (typeof window.ethereum === undefined) {
      window.alert('Please install metamask first');
      return;
    }
    const accounts = await ethereum.enable();
    dispatch({type: types.METAMASK_LOGIN, payload : accounts});
    dispatch(login_popup_c());
}

export const repsten_balence = () => async (dispatch, getState) => {

  await matic_actions.getBalanceRopsten('0x929914Ce7458DdE2470aeD74F9537a80eBeF817c');
  
}
