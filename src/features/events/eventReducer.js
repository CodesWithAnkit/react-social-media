import { sampleData } from '../../app/api/sampleData'
import { CREATE_EVENT, DELETE_EVENT, UPDATE_EVENT } from './eventConstants'

const intialState = {
  events: sampleData,
}

export default function eventReduer(state = intialState, { type, payload }) {
  switch (type) {
    case CREATE_EVENT:
      return { ...state, events: [...state.events, payload] }
    case DELETE_EVENT:
      return {
        ...state,
        events: [...state.events.filter((event) => event.id !== payload.id)],
      }
    case UPDATE_EVENT:
      return {
        ...state,
        events: [
          ...state.events.filter((event) => event.id !== payload.id),
          payload,
        ],
      }
    default:
      return state
  }
}
