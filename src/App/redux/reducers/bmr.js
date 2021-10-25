const defaultState = {
  BMR: 0,
  dailyCaloriesBudget: 0
}
export const ACTIONS = {
  ADD: 'add/bmr'
}

export default function bmrReducer (state = defaultState, action) {
  switch (action.type) {
    case ACTIONS.ADD:
      return Object.assign({}, state, {
        BMR: action.BMR,
        dailyCaloriesBudget: action.dailyCaloriesBudget
      })

    default:
      return state
  }
}
