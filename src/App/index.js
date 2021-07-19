import React from 'react'
import styled from 'styled-components'

import { Greeting } from './Components/Greeting'
import { Counter } from './Components/Counter'
import { Input, INPUT_TYPES } from './Components/Input'
import { Button } from './Components/Button'

const MainContainer = styled.div`
  background-color: #ffffff;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  max-width: 500px;
  width: 100%;
`
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  width: 100%;
  align-items: flex-end;
  margin-bottom: 1em;
  background-color: #f5f5f5;
  padding: 1em;
  box-sizing: border-box;
`

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
    alert(`
    First name is ${this.state.firstName || 'N/A'}
    Last name is ${this.state.lastName || 'N/A'}
    Age is ${this.state.age || 'N/A'}
    `)
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
      <MainContainer>
        <Container>
          <Greeting name='Jon Doe' />
          <Counter initialValue={3} />
          <InputContainer>
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
            <Button onClick={this.handleOnButtonClick}>Click Me!</Button>
          </InputContainer>
        </Container>
      </MainContainer>
    )
  }
}

export default App
