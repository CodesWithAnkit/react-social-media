import { combineReducers } from 'redux'
import eventReduer from '../../features/events/eventReducer'
import testReducer from '../../features/sandbox/testReducer'

const rootReducer = combineReducers({
  test: testReducer,
  event: eventReduer,
})

export default rootReducer
