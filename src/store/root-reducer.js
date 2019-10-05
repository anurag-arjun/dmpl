import { combineReducers } from 'redux'
import { reducer as internet } from 'react-redux-internet-connection'
import  user from '../reducers/user-reducer'
import cards from '../reducers/cards-reducer'

const rootReducer = combineReducers({
  user,
  internet,
  cards
})

export default rootReducer
