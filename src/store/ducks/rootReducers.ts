import { combineReducers } from 'redux'

import points from './points';
import user from './user';


export default combineReducers({
    user,
    points
})