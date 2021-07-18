import React from 'react'
import { Greeting } from './Components/Greeting'
import { Counter } from './Components/Counter'
import { Input, INPUT_TYPES } from './Components/Input'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      age: 0
    }
  }

  handleOnButtonClick = () => {
    console.log(this.state.firstName, this.state.lastName, this.state.age)
  }

  onTextChange = (value, name) => {
    this.setState(() => {
      return {
        [name]: value
      }
    })
  }

  render () {
    return (
      <div>
        <Greeting name='Jon Doe' />
        <Counter initialValue={3} />
        <Input
          title='First Name'
          id='firstNameId'
          name='firstName'
          value={this.state.firstName}
          handleOnChange={this.onTextChange}
          type={INPUT_TYPES.TEXT}
        />
        <Input
          title='Last Name'
          id='lastNameId'
          name='lastName'
          value={this.state.lastName}
          handleOnChange={this.onTextChange}
          type={INPUT_TYPES.TEXT}
        />
        <Input
          title='Age'
          id='ageId'
          name='age'
          value={this.state.age}
          handleOnChange={this.onTextChange}
          type={INPUT_TYPES.NUMBER}
        />
        <button onClick={this.handleOnButtonClick}>Click Me!</button>
      </div>
    )
  }
}

export default App
