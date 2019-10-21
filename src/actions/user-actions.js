import * as types from "../types/user-action-types";
import { login_popup_c } from './popup_actions';
import Web3 from 'web3'
import * as activity_actions from './activty_actions';
import * as matic_actions from './blockchain_func.js';
import * as matic_js from './matic_actions';
import {push} from 'connected-react-router';
import getTransitionReceipt from './receipt_confirmation';

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
    web3 = new Web3(window.web3.currentProvider) 
    var network = await web3.eth.net.getId();
    
    if(network==3) {
      const balance = await matic_actions.getBalanceRopsten(accounts[0], getState().user.token_address_rep);
      //c is 3 for repsten newtwork
      //c is more than 3 for other network
      //so if c is greater than 3 we assume that it is on matic network
      console.log('balance', balance);
      dispatch({type: types.METAMASK_LOGIN, payload : accounts, network , balance: balance});
      dispatch(login_popup_c());
    }
    else 
      matic_actions.getBalanceMatic(accounts[0], getState().user.token_address_mat, (nu, cc) => {
        const balance = cc;
        //c is 3 for repsten newtwork
        //c is more than 3 for other network
        //so if c is greater than 3 we assume that it is on matic network
        console.log('balance', balance);
        dispatch({type: types.METAMASK_LOGIN, payload : accounts, network , balance: balance});
        dispatch(login_popup_c());
      });
    // console.log(rpc);
}



export const approve_token = () => async (dispatch, getState) => {
  // matic_js.approveToken();
  const userState = getState().user;
  if(userState.erc20_approve) return;

  const hash = await matic_actions.authorizeToken(userState.accounts[0], userState.token_address_rep, userState.mana, () => {
    dispatch(activity_actions.add_new_activity('nothing1', 'You Authorized the Matic Plasma Contact to Operate MANA on your behalf'))
    dispatch(push('/activity'));
  })
  dispatch({type: types.APPROVE_ERC20 });
  dispatch(activity_actions.activity_succ('nothing1'));
}


export const deposit_token = () => async (dispatch, getState) => {
  const userState = getState().user;
  const allowance = await matic_actions.depositToken(userState.accounts[0] ,userState.token_address_rep, userState.add_fund, () => {
    dispatch(activity_actions.add_new_activity('nothing2', `You added ${userState.add_fund} MANA to Matic Network`))
    dispatch(push('/activity'));
  })
  console.log('allowance', allowance);
  dispatch(activity_actions.activity_succ('nothing2'));
}

export const add_fund_change = (value) => ({
  type: types.ADD_FUND_CHANGE,
  value
})
