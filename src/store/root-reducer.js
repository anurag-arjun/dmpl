import { combineReducers } from 'redux';
import { reducer as internet } from 'react-redux-internet-connection';
import login_form from "../reducers/login-form-reducer";

const rootReducer = combineReducers({
    login_form,
    internet,
});

export default rootReducer;
