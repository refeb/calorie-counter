import { ACTIONS } from '../reducers/bmr'

export function setBMR ({ BMR, dailyCaloriesBudget }) {
  return {
    type: ACTIONS.ADD,
    BMR,
    dailyCaloriesBudget
  }
}
