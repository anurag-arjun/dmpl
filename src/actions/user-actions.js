import * as types from "../types/user-action-types";
import { login_popup_c } from './popup_actions';
import Web3 from 'web3'
import * as activity_actions from './activty_actions';
import * as matic_actions from './blockchain_func.js';
import * as matic_js from './matic_actions';
import {push} from 'connected-react-router';
import getTransitionReceipt from './receipt_confirmation';
import getWeb3 from '../web3/getWeb3';

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
    console.log('called mm login', network);
    
    if(network==3) {
      const balance = await matic_js.getBalanceRopsten(accounts[0]);
      //c is 3 for repsten newtwork
      //c is more than 3 for other network
      //so if c is greater than 3 we assume that it is on matic network
      console.log('balance', balance);
      dispatch({type: types.METAMASK_LOGIN, payload : accounts, network , balance: balance});
      dispatch(login_popup_c());
    }
    if(network==8995) {
      const balance = await matic_js.getBalanceMatic(accounts[0]);
        //c is 3 for repsten newtwork
        //c is more than 3 for other network
        //so if c is greater than 3 we assume that it is on matic network
      console.log('balance', balance);
      dispatch({type: types.METAMASK_LOGIN, payload : accounts, network , balance: balance});
      dispatch(login_popup_c());
    }
    else {
    }
    // console.log(rpc);
}

export const minus_mana = (mana) => ({
  type: types.MINUS_MANA,
  mana
})

export const getweb3 = (web3) => async (dispatch) => {
  const web3 = await getWeb3();
  window.WEB3 = web3;
  // dispatch({ type: types.GET_WEB3, web3 })
}

export const approve_token = () => async (dispatch, getState) => {
  // matic_js.approveToken();
  const userState = getState().user;
  if(userState.erc20_approve) return;
  let h;
  await matic_js.approveToken(userState.accounts[0], userState.mana, (hash) => {
    dispatch(activity_actions.add_new_activity(hash, 'You Authorized the Matic Plasma Contact to Operate MANA on your behalf'))
    dispatch(push('/activity'));
    h = hash;
  });
  // const hash = await matic_actions.authorizeToken(userState.accounts[0], userState.token_address_rep, userState.mana, () => {
  //   dispatch(activity_actions.add_new_activity('nothing1', 'You Authorized the Matic Plasma Contact to Operate MANA on your behalf'))
  //   dispatch(push('/activity'));
  // })
  dispatch({type: types.APPROVE_ERC20 });
  dispatch(activity_actions.activity_succ(h));
}


export const deposit_token = () => async (dispatch, getState) => {
  const userState = getState().user;
  let h;
  const allowance = await matic_js.depositeToken(userState.accounts[0], userState.add_fund, (hash) => {
    dispatch(activity_actions.add_new_activity(hash, `You added ${userState.add_fund} MANA to Matic Network`))
    dispatch(push('/activity'));
    h = hash;
  })
  console.log('allowance', allowance);
  dispatch(minus_mana(userState.add_fund));
  dispatch(activity_actions.activity_succ(h));
}

export const move_to_matic = (amount) => async (dispatch, getState) => {
  const userState = getState().user;
  let hash;
  const allowance = await matic_js.depositeToken(userState.accounts[0], amount, (h) => {
    dispatch(activity_actions.add_new_activity(h, `You moved 60, -120 to Matic Network`))
    dispatch(push('/activity'));
    hash = h;
  })
  console.log('allowance', allowance);
  dispatch(activity_actions.activity_succ(hash));
}

export const add_fund_change = (value) => ({
  type: types.ADD_FUND_CHANGE,
  value
})
