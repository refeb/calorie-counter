import { ACTIONS } from '../reducers/logs'

export function addLog (log) {
  return {
    type: ACTIONS.ADD,
    log
  }
}

export function removeLog (id) {
  return {
    type: ACTIONS.REMOVE,
    id
  }
}
