const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'

export function increment(amount) {
  return {
    type: INCREMENT,
    payload: amount,
  }
}
export function decrement(amount) {
  return {
    type: DECREMENT,
    payload: amount,
  }
}

const intialState = {
  data: 42,
}

export default function testReducer(state = intialState, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        data: state.data + action.payload,
      }
    case DECREMENT:
      return {
        ...state,
        data: state.data - action.payload,
      }
    default:
      return state
  }
}
