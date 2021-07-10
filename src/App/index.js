import React from 'react'
import { Greeting } from './Components/Greeting'

class App extends React.Component {
  render () {
    return (
      <div>
        <Greeting name='Jon Doe' />
      </div>
    )
  }
}

export default App
