import {combineReducers} from 'redux'
import indonesiaReducer from './indonesia'

const rootReducer = combineReducers({indonesia: indonesiaReducer})

export default rootReducer