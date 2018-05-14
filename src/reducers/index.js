import { combineReducers } from 'redux'
import reducers from './reducer'
import authorize from './authorize'

export default combineReducers({
    reducers,
    authorize
})