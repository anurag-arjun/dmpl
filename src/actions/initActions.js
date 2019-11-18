import * as types from '../types/cards-types';
import * as api from '../api/index';

export const initCards = () => async (dispatch) => {
    // dispatch({type : types.FETCHING_CARD});
    console.log('fetching card action is inactive');
    
    // const res = await api.get('/init', 'shh')
    // console.log(res);
    
    // dispatch({type: types.GET_CARDS, payload : res})
}