import React from 'react'
import styled from 'styled-components'

import { Button } from '../Button'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fafafa;
  padding: 1em;
`
const StyledP = styled.p`
  font-size: 2em;
  text-align: center;
  color: #424242;
  margin-bottom: 0.5em;
`
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export class Counter extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      number: props.initialValue
    }
  }

  handleIncrease = () => {
    this.setState((prevState) => {
      return {
        number: prevState.number + 1
      }
    })
  }

  handleReset = () => {
    this.setState(() => {
      return {
        number: 0
      }
    })
  }

  render () {
    return (
      <Container>
        <StyledP>Count {this.state.number}</StyledP>
        <ButtonContainer>
          <Button onClick={this.handleIncrease}>Increase</Button>
          <Button onClick={this.handleReset}>Reset</Button>
        </ButtonContainer>
      </Container>
    )
  }
}
