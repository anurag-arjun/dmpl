import {combineReducers} from 'redux';
import {reducer as internet} from 'react-redux-internet-connection';
import login_form from '../reducers/login-form-reducer';
import maps from '../reducers/map-reducer';

const rootReducer = combineReducers({
  login_form,
  internet,
  maps,
});

export default rootReducer;
