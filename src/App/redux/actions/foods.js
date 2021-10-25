import { ACTIONS } from '../reducers/foods'

export function addNewFood (food) {
  return {
    type: ACTIONS.ADD,
    food
  }
}
export function removeFood (id) {
  return {
    type: ACTIONS.REMOVE,
    id
  }
}
export function setFoods (foods) {
  return {
    type: ACTIONS.SET,
    foods
  }
}
