import React from 'react'
import { Greeting } from './Components/Greeting'
import { Counter } from './Components/Counter'

class App extends React.Component {
  render () {
    return (
      <div>
        <Greeting name='Jon Doe' />
        <Counter initialValue={3} />
      </div>
    )
  }
}

export default App
