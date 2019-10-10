import { combineReducers } from 'redux'
import { reducer as internet } from 'react-redux-internet-connection'
import  user from '../reducers/user-reducer'
import cards from '../reducers/cards-reducer'
import popups from '../reducers/popup-reducer';

const rootReducer = combineReducers({
  user,
  internet,
  cards,
  popups
})

export default rootReducer
