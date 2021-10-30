const defaultState = []

export const ACTIONS = {
  ADD: 'add/log',
  REMOVE: 'remove/log'
}

export default function logsReducer (state = defaultState, action) {
  switch (action.type) {
    case ACTIONS.ADD:
      return [...state, action.log]
    case ACTIONS.REMOVE:
      return state.filter((log) => log.id !== action.id)
    default:
      return state
  }
}
