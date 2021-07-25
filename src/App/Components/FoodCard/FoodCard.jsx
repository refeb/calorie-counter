import React from 'react'
import styled from 'styled-components'

import { Button } from '../Button'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background: #fafafa;
  padding: 1em 1.2em;
  box-sizing: border-box;
  border-radius: 8px;
  box-shadow: 0 1px 5px 1px #0000001c;
  margin-bottom: 0.6em;
  transition: box-shadow 200ms ease;
  :hover {
    box-shadow: 0 0px 1px 1px #0000001c;
  }
`
const Field = styled.span`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`
const FoodField = styled(Field)`
  justify-content: flex-start;
  flex: 2;
`
const FoodItem = styled.span`
  flex: 1;
`
const RemoveButton = styled(Button)`
  background-color: #e53935;
  color: #f5f5f5;
  :active {
    background-color: #f5f5f5;
    color: #e53935;
  }
`
export function FoodCard ({ id, name, calories, onRemove }) {
  const handleOnRemove = () => {
    if (typeof onRemove === 'function') {
      onRemove(id)
    }
  }
  return (
    <Container>
      <FoodField>
        <FoodItem>{name}</FoodItem>
        <FoodItem>{calories}</FoodItem>
      </FoodField>
      <Field>
        <RemoveButton onClick={handleOnRemove}>Remove</RemoveButton>
      </Field>
    </Container>
  )
}
