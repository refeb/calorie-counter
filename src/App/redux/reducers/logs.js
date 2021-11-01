const defaultState = []

export const ACTIONS = {
  ADD: 'add/log',
  REMOVE: 'remove/log',
  EDIT: 'edit/log'
}

export default function logsReducer (state = defaultState, action) {
  switch (action.type) {
    case ACTIONS.ADD:
      return [...state, action.log]
    case ACTIONS.REMOVE:
      return state.filter((log) => log.id !== action.id)
    case ACTIONS.EDIT:
      return state.map((log) =>
        log.id !== action.id
          ? log
          : Object.assign({}, log, {
            usedCalories: action.usedCalories
          })
      )
    default:
      return state
  }
}
