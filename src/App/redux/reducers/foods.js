const defaultState = []
export const ACTIONS = {
  ADD: 'add/food',
  REMOVE: 'remove/food',
  SET: 'set/foods'
}
export default function foodReducer (state = defaultState, action) {
  switch (action.type) {
    case ACTIONS.ADD:
      return [...state, action.food]
    case ACTIONS.REMOVE:
      return state.filter((food) => food.id !== action.id)
    case ACTIONS.SET:
      return action.foods
    default:
      return state
  }
}
