import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './App/redux/reducers'
const LOCAL_STORAGE_FOODS_KEY = 'foods'
const BMR_KEY = 'BMR'
const LOGS_KEY = 'logs'

const preloadStates = () => {
  const foods = JSON.parse(localStorage.getItem(LOCAL_STORAGE_FOODS_KEY)) || []
  const BMR = JSON.parse(localStorage.getItem(BMR_KEY)) || undefined
  const logs = JSON.parse(localStorage.getItem(LOGS_KEY)) || undefined

  return {
    foods,
    BMR,
    logs
  }
}
const store = createStore(reducers, preloadStates())
store.subscribe(() => {
  const state = store.getState()
  const { foods, BMR, logs } = state
  localStorage.setItem(LOCAL_STORAGE_FOODS_KEY, JSON.stringify(foods))
  localStorage.setItem(BMR_KEY, JSON.stringify(BMR))
  localStorage.setItem(LOGS_KEY, JSON.stringify(logs))
})
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
