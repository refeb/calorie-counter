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

export function Counter ({ initialValue }) {
  const [number, setNumber] = React.useState(initialValue)

  const handleIncrease = () => {
    setNumber(number + 1)
  }

  const handleReset = () => {
    setNumber(0)
  }

  return (
    <Container>
      <StyledP>Count {number}</StyledP>
      <ButtonContainer>
        <Button onClick={handleIncrease}>Increase</Button>
        <Button onClick={handleReset}>Reset</Button>
      </ButtonContainer>
    </Container>
  )
}
