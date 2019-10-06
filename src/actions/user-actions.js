import * as types from "../types/user-action-types";

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
    dispatch(hideLoginPopup());
}

export const showLoginPopup = () => ({
  type: types.SHOW_LOGIN_POPUP,
})

export const hideLoginPopup = () => ({
  type: types.HIDE_LOGIN_POPUP,
})