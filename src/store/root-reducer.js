import { combineReducers } from 'redux'
import { reducer as internet } from 'react-redux-internet-connection'
import login_form from '../reducers/login-form-reducer'
import cards from '../reducers/cards-reducer'

const rootReducer = combineReducers({
  login_form,
  internet,
  cards
})

export default rootReducer
