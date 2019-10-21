import * as actionTypes from '../types/activity-actions-types';

// 0 for pending
// -1 for failed
// 1 for success

const initialState = {
    activity : [
        // {
        //     text: 'You Authorized the Matic Plasma Contact to Operate MANA on your behalf',
        //     time: Date.now(),
        //     status : 0,
        //     hash : 'hash1'
        // },
        // {
        //     text: 'You added 100 MANA to Matic Network',
        //     time: Date.now(),
        //     status : 1,
        //     hash : 'hash3'
        // },
        // {
        //     text: 'You Moved Your Land -123 ,-140 to Matic Network',
        //     time: Date.now(),
        //     status : -1,
        //     hash : 'hash2'
        // }
    ]
};

const loginFormReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case actionTypes.ADD_NEW_ACTIVITY: {
      const newState = { ...state };
      const newActivity = {};
      newActivity.text = actions.text;
      newActivity.hash = actions.hash;
      newActivity.status = 0;
      newActivity.time = Date.now();
      newState.activity = [newActivity, ...newState.activity];
      return newState;
    }

    case actionTypes.CHANGE_ACT_ST_TO_FAILED: {
      const newState = { ...state };
      const activity = [...newState.activity];
      const ind = activity.findIndex((e) => e.hash === actions.hash);
      if(ind===-1) return newState;
      const content = activity[ind];
      content.status = -1;
      activity[ind] = content;
      newState.activity = activity;
      return newState;
    }

    case actionTypes.CHANGE_ACT_ST_TO_SUCC: {
      const newState = { ...state };
      const activity = [...newState.activity];
      const ind = activity.findIndex((e) => e.hash === actions.hash);
      if(ind===-1) return newState;
      const content = activity[ind];
      content.status = 1;
      activity[ind] = content;
      newState.activity = activity;
      return newState;
    }

    default:
      return state;
  }
};

export default loginFormReducer;
