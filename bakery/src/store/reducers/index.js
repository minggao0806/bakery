import { combineReducers } from 'redux'
import counter from './counter'
import bakery from './bakery'

export default combineReducers({
  counter,
  bakery
})