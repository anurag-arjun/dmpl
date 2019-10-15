import * as types from "../types/user-action-types";
import { login_popup_c } from './popup_actions';
import * as matic_actions from './blockchain_func.js';
import * as matic_act from './matic_actions';

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
  matic_act.approveToken();
  // await matic_actions.getBalanceRopsten('0x699E2d28b6AdbEC6C3ee069a16D79ed7cB64083D');
  
}
