import { combineReducers } from 'redux'
import { reducer as internet } from 'react-redux-internet-connection'
import  user from '../reducers/user-reducer'
import cards from '../reducers/cards-reducer'
import popups from '../reducers/popup-reducer';
import activity from '../reducers/activity_reducer';

const rootReducer = combineReducers({
  user,
  internet,
  cards,
  popups,
  activity
})

export default rootReducer
